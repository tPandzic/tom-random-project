import { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getFilteredRowModel,
} from '@tanstack/react-table';
import TablePagination from './TablePagination';

const TablePage = ({ people }) => {
  const [data] = useState(people);

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('firstName', {
      header: () => 'First Name',
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.lastName, {
      id: 'lastName',
      cell: (info) => info.getValue(),
      header: () => 'Last Name',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('dateOfBirth', {
      header: 'Date of Birth',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('placeOfBirth', {
      header: 'Place of Birth',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('height', {
      header: 'Height',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('weight', {
      header: 'Weight',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('mother', {
      header: 'Mother',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('father', {
      header: 'Father',
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor('occupation', {
      header: 'Occupation',
      footer: (info) => info.column.id,
    }),
  ];

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <div>
      <table className='w-full bg-white'>
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
                <td className='text-center' key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='h-4' />

      <div className='h-2' />

      <TablePagination table={table} />
    </div>
  );
};

export default TablePage;
