"use client";

import { Controller, FieldValues } from 'react-hook-form';
import { FormItem, FormControl, FormMessage, FormDescription } from '@/components/ui/form';
import { Checkbox } from '@/components/ui';
import { CheckboxInputProps } from '@/lib/types';

export const CheckboxInput = <T extends FieldValues>({
  control,
  name,
  label,
  description,
  rules,
  errors,
  onCheckedChange,
  required = false,
}: CheckboxInputProps<T> & { required?: boolean }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        ...rules,
        required: required ? "Ce champ est obligatoire." : false,
      }}
      render={({ field }) => (
        <FormItem className="flex items-center space-y-0 space-x-2 mt-4">
          <FormControl>
            <Checkbox
              checked={field.value || false}
              onCheckedChange={(checked) => {
                field.onChange(checked);
                if (onCheckedChange) onCheckedChange(checked);
              }}
              aria-required={required}
              aria-labelledby={`${name}-label`}
            />
          </FormControl>
          {/* Utilisation d'un <span> pour reproduire le même style que ton ancien code */}
          <span id={`${name}-label`} className="leading-none">
            {label} {description ? `: ${description}` : ""}
          </span>
          {description && (
            <FormDescription className="sr-only">
              {description}
            </FormDescription>
          )}
          {errors?.[name] && (
            <FormMessage className="text-red-500">
              {errors[name]?.message}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};