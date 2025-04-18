import { Table, ColumnDef, Column, Row } from '@tanstack/react-table'
import { ReactElement } from 'react';
import { EnrichedProject } from './dashboard';

export interface TableHeaderProps {
  title: string;
  buttonLabel?: string;
  buttonHref?: string;
  buttonAriaLabel?: string;
  titleClassName?: string;
  selectedYear?: number;
  onYearChange?: (newYear: number) => void;
  buttonOnClick?: () => void;
  isButtonDisabled?: boolean;
}

export interface TableHeaderButtonProps {
  buttonLabel: string;
  buttonHref?: string;
  buttonOnClick?: () => void;
  buttonAriaLabel?: string;
  isButtonDisabled?: boolean;
}

export interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export interface Option {
  label: string;
  value: string | number; // Accepter les valeurs de type string ou number
  icon?: React.ComponentType<{ className?: string }>;
}

export interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  options: Option[]; // Les options peuvent maintenant être de type string | number
}

export interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export interface DataTableFooterProps<TData> {
  table: Table<TData>;
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  ToolbarComponent?: React.ComponentType<{ table: Table<TData> }>;
  showPagination?: boolean;
  showSelectedRowsCount?: boolean;
  FooterComponent?: (props: DataTableFooterProps<TData>) => ReactElement | null;
}

export interface ProjectsTableRowActionsProps {
  row: Row<EnrichedProject>;
}

export interface FiscalYearsTableRowActionsProps {
  fiscalYearId: number;
  isClosed: boolean;
}

export interface TransactionsTableToolbarProps<TData> {
  table: Table<TData>;
}

export interface RecurrencesTableToolbarProps<TData> {
  table: Table<TData>;
  selectedMonth: number;
  selectedYear: number;
  onMonthChange: (month: number) => void;
  onYearChange: (year: number) => void;
  availableYears: number[];
}

export interface FiscalYearsTableToolbarProps<TData> {
  table: Table<TData>;
}

export interface TransactionsTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export interface CategoriesTableViewOptionsProps<TData> {
  table: Table<TData>;
}
export interface SubCategoriesTableViewOptionsProps<TData> {
  table: Table<TData>;
}
export interface CategoriesTableToolbarProps<TData> {
  table: Table<TData>;
  transactionTypeOptions?: { value: string | number; label: string }[]; // Rend transactionTypeOptions optionnel
}

export interface CategoriesTableRowActionsProps<TData> {
  row: Row<TData>; // Typage pour row
  isUsed: boolean;
}

export interface SubCategoriesTableToolbarProps<TData> {
  table: Table<TData>;
  transactionTypeOptions?: { value: string | number; label: string }[]; // Rend transactionTypeOptions optionnel
}

export interface CenteredCellProps {
  children: React.ReactNode;
  className?: string; // Permet de passer des classes CSS dynamiques
}

