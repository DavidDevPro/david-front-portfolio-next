"use client";

import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Search } from "lucide-react";

interface ProjectsTableToolbarProps<TData> {
    table: Table<TData>;
}

export const ProjectsTableToolbar = <TData,>({ table }: ProjectsTableToolbarProps<TData>) => {
    const isFiltered = table.getState().globalFilter !== "";

    return (
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Rechercher un projet..."
                        value={table.getState().globalFilter ?? ""}
                        onChange={(event) => table.setGlobalFilter(event.target.value)}
                        className="pl-9"
                    />
                </div>
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetGlobalFilter()}
                        className="px-2"
                    >
                        <X className="w-4 h-4" />
                        <span className="ml-2">Réinitialiser</span>
                    </Button>
                )}
            </div>
        </div>
    );
};
