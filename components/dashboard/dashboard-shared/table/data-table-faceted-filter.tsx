"use client";

import * as React from 'react';
import { CheckIcon, PlusCircledIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { DataTableFacetedFilterProps } from '@/lib/types/admin/dashboard';

export function DataTableFacetedFilter<TData, TValue>({
  column,
  title,
  options,
}: DataTableFacetedFilterProps<TData, TValue>) {
  const [selectedValues, setSelectedValues] = React.useState<Set<string | number>>(
    new Set(column?.getFilterValue() as (string | number)[])
  );

  const facets = column?.getFacetedUniqueValues();

  const toggleSelection = (value: string | number) => {
    const newSelectedValues = new Set(selectedValues);
    if (newSelectedValues.has(value)) {
      newSelectedValues.delete(value);
    } else {
      newSelectedValues.add(value);
    }
    setSelectedValues(newSelectedValues);

    column?.setFilterValue(newSelectedValues.size ? Array.from(newSelectedValues) : undefined);
  };

  const getFacetCount = (value: string | number | boolean) => {
    let normalizedValue;

    // Conversion explicite selon le type
    if (typeof value === 'boolean') {
      // Convertir les booléens en nombres
      normalizedValue = value ? 1 : 0;
    } else if (typeof value === 'string') {
      // Convertir les chaînes en nombres si possible
      normalizedValue = /^\d+$/.test(value) ? parseInt(value, 10) : value; // Vérifie si la chaîne est un nombre
    } else {
      // Si c'est déjà un nombre, l'utiliser directement
      normalizedValue = value;
    }

    // Retourner le comptage correspondant dans facets
    return facets?.get(normalizedValue) || 0;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed border-primary bg-card">
          <PlusCircledIcon className="mr-2 h-4 w-4 text-primary shrink-0" />
          {title}
          {selectedValues.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4 bg-primary" />
              <Badge variant="secondary" className="rounded-sm px-1 font-normal lg:hidden">
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 2 ? (
                  <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                    {selectedValues.size} sélectionné(s)
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.value}
                        className="rounded-sm px-1 font-normal"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command className="bg-card">
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>Aucun résultat trouvé(s).</CommandEmpty>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option.value);
                const facetCount = getFacetCount(option.value); // Utiliser la fonction universelle pour obtenir le comptage

                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => toggleSelection(option.value)}
                  >
                    <div
                      className={cn(
                        'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border bg-card border-primary',
                        isSelected
                          ? 'bg-primary text-card'
                          : 'opacity-50 [&_svg]:invisible'
                      )}
                    >
                      <CheckIcon className={cn('h-4 w-4')} />
                    </div>
                    {option.icon && React.createElement(option.icon, { className: 'mr-2 h-4 w-4 text-primary' })}
                    <span>{option.label}</span>
                    {/* Afficher le nombre d'occurrences récupéré */}
                    {facetCount > 0 && (
                      <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                        {facetCount}
                      </span>
                    )}
                  </CommandItem>
                );
              })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => {
                      setSelectedValues(new Set());
                      column?.setFilterValue(undefined);
                    }}
                    className="justify-center text-center"
                  >
                    Supprimer les filtres
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
