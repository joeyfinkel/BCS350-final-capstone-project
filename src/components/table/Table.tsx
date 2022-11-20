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
    (header) =>
      ({
        header,
        accessorKey: header as DeepKeys<Person>,
        cell: (info) => info.getValue(),
      } as ColumnDef<Person, unknown>)
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    // Provide our updateData function to our table meta
    // meta: {
    //   updateData: (rowIndex, columnId, value) => {
    //     // Skip age index reset until after next rerender
    //     skipAutoResetPageIndex();
    //     setData((old) =>
    //       old.map((row, index) => {
    //         if (index === rowIndex) {
    //           return {
    //             ...old[rowIndex]!,
    //             [columnId]: value,
    //           };
    //         }
    //         return row;
    //       })
    //     );
    //   },
    // },
    // debugTable: true,
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {header.column.getCanFilter() ? (
                        <div>
                          <Filter column={header.column} table={table} />
                        </div>
                      ) : null}
                    </div>
                  )}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => {
          return (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
