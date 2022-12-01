import React, { useEffect, useMemo, useState } from 'react';
import {
  ColumnDef,
  RowData,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
  createColumnHelper,
  DeepKeys,
} from '@tanstack/react-table';
import { makeData } from '../../utils/makeData';
import { Person } from '../../utils/types';
import { useSkipper } from '../../hooks/useSkipper';
import { Filter } from './Filter';

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
}

export const Table = () => {
  const [data, setData] = useState(makeData(40));
  const [autoResetPageIndex, skipAutoResetPageIndex] = useSkipper();
  const columnHelper = createColumnHelper<Person>();

  const columns = [
    'First Name',
    'Last Name',
    'Age',
    'Visits',
    'Status',
    'Profile Progress',
    'Sub Rows',
  ].map(
    (header): ColumnDef<Person> => ({
      header,
      accessorKey: header as DeepKeys<Person>,
      cell: (info) => {
        // console.log(info.cell);
        return info.getValue();
      },
    })
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log(table.getRowModel().rows[0].getVisibleCells()[0]);

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};
