import React from 'react';
import type { Column } from '@tanstack/react-table';
import { DataTableColumnHeader } from '@/components/dashboard/dashboard-shared';
import { CenteredCellProps } from '@/lib/types/admin/dashboard';

/**
 * CenteredHeader component
 * 
 * This component is used to display a centered header for a table column.
 * It wraps the DataTableColumnHeader with a flex container for centering.
 * 
 * @param {object} props - The component props.
 * @param {Column<any, unknown>} props.column - The column definition from the table.
 * @param {string} props.title - The title to display in the header.
 * 
 * @returns {JSX.Element} A centered header element.
 */
export const CenteredHeader = <T,>({ column, title }: { column: Column<T, unknown>, title: string }) => (
  <div className="flex justify-center items-center text-center mx-auto px-6">
    <DataTableColumnHeader column={column} title={title} />
  </div>
);

/**
 * CenteredCell component
 * 
 * This component is used to display centered content within a table cell.
 * It wraps the children inside a flex container to ensure content is centered.
 * 
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to display inside the cell.
 * 
 * @returns {JSX.Element} A centered cell element.
 */
export const CenteredCell = ({ children, className }: CenteredCellProps) => {
  const baseClasses = 'flex justify-center items-center text-center mx-auto  px-4 py-2';
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return <span className={combinedClasses}>{children}</span>;
};
