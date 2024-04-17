import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FC, useEffect, useState } from "react";

export type User = {
  id: number;
  name: string;
  age: number;
};

const columnHelper = createColumnHelper<User>();

const columns = [
  columnHelper.accessor("id", {
    header: () => "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: () => "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("age", {
    header: () => "AGE",
    cell: (info) => info.getValue(),
  }),
];
const Table: FC = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  useEffect(() => {
    setUsers([
      {
        id: 1,
        name: "food",
        age: 40,
      },
    ]);
  }, []);

  const table = useReactTable({
    data: users,
    columns,
    debugTable: true,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="p-2 max-w-5xl mx-auto">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  <div>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
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
      </table>
    </div>
  );
};

export default Table;
