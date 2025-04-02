'use client';

import * as React from 'react';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  Row,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DataTablePagination } from '@/components/dashboard/dashboard-shared';
import { DataTableFooterProps, DataTableProps } from '@/lib/types/admin/dashboard';

export function DataTable<TData extends { visible: boolean }, TValue>({
  columns,
  data,
  ToolbarComponent,
  showPagination = true,
  defaultPageSize = 5,
  FooterComponent,
  disablePageSizeSelection = false,
  showSelectedRowsCount = false,
  renderSubComponent,
  getRowId,
}: DataTableProps<TData, TValue> & {
  defaultPageSize?: number;
  disablePageSizeSelection?: boolean;
  FooterComponent?: React.FC<DataTableFooterProps<TData>>;
  renderSubComponent?: (row: Row<TData>) => React.ReactNode;
  getRowId?: (originalRow: TData, index: number, parent?: Row<TData>) => string;
}) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    getRowId,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    initialState: {
      pagination: {
        pageSize: defaultPageSize,
      },
    },
  });

  return (
    <div className="space-y-4">
      {ToolbarComponent && <ToolbarComponent table={table} />}
      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader className="bg-blue-200 border-b border-gray-400 shadow-sm">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                const isExpanded = row.getIsExpanded();

                return (
                  <React.Fragment key={row.id}>
                    <TableRow
                      data-state={row.getIsSelected() && 'selected'}
                      onClick={() => {
                        if (renderSubComponent) {
                          row.toggleExpanded();
                        }
                      }}
                      className="hover:bg-gray-100 transition-all cursor-pointer"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>

                    {renderSubComponent && isExpanded && row.original.visible && (
                      <TableRow>
                        <TableCell colSpan={columns.length}>
                          {renderSubComponent(row)}
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Aucun résultat(s) trouvé(s)
                </TableCell>
              </TableRow>
            )}
          </TableBody>

          {FooterComponent && table && <FooterComponent table={table} />}
        </Table>
      </div>

      {showPagination && (
        <DataTablePagination
          table={table}
          showSelectedRowsCount={showSelectedRowsCount}
          disablePageSizeSelection={disablePageSizeSelection}
        />
      )}
    </div>
  );
}
