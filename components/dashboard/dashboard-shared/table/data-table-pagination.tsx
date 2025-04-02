"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from '@radix-ui/react-icons'
import { Button } from '@/components/ui'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { DataTablePaginationProps } from '@/lib/types/admin/dashboard';

export function DataTablePagination<TData>({
  table,
  disablePageSizeSelection = false,
  showSelectedRowsCount = true,
}: DataTablePaginationProps<TData> & {
  disablePageSizeSelection?: boolean;
  showSelectedRowsCount?: boolean;
}) {
  return (
    <div className='flex items-center justify-between overflow-auto px-2'>
      <div className='hidden flex-1 text-sm text-muted-foreground sm:block'>
        {showSelectedRowsCount
          ? `${table.getFilteredSelectedRowModel().rows.length} sur ${table.getFilteredRowModel().rows.length} ligne(s) sélectionnées.`
          : ""}
      </div>
      <div className='flex items-center sm:space-x-6 lg:space-x-8'>
        <div className='flex items-center space-x-2'>
          <p className='hidden text-sm sm:block'>Ligne(s) par page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => table.setPageSize(Number(value))}
            disabled={disablePageSizeSelection} // ✅ Désactive la sélection
          >
            <SelectTrigger className='h-8 w-[70px] bg-card border border-primary text-sm text-gray-700 rounded-md'>
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side='top'>
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}
                  className="text-primary hover:bg-primary hover:text-card focus:bg-primary focus:text-card">
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='flex w-[100px] items-center justify-center text-sm'>
          Page {table.getState().pagination.pageIndex + 1} à {' '}
          {table.getPageCount()}
        </div>
        <div className='flex items-center space-x-2'>
          <Button
            variant='outline'
            className='hidden h-8 w-8 p-0 lg:flex bg-card'
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className='sr-only'>Allez à la première page</span>
            <DoubleArrowLeftIcon className='h-4 w-4 text-primary shrink-0' />
          </Button>
          <Button
            variant='outline'
            className='h-8 w-8 p-0 bg-card'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className='sr-only'>Allez à la page précédente</span>
            <ChevronLeftIcon className='h-4 w-4 text-primary shrink-0' />
          </Button>
          <Button
            variant='outline'
            className='h-8 w-8 p-0 bg-card'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className='sr-only'>Allez à la page suivante</span>
            <ChevronRightIcon className='h-4 w-4 text-primary shrink-0' />
          </Button>
          <Button
            variant='outline'
            className='hidden h-8 w-8 p-0 lg:flex  bg-card'
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className='sr-only'>Go to last page</span>
            <DoubleArrowRightIcon className='h-4 w-4 text-primary shrink-0' />
          </Button>
        </div>
      </div>
    </div>
  )
}
