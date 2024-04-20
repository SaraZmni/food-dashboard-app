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
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-slate-300">
              <thead className="bg-slate-50">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-slate-900 sm:pl-6"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6"
                      >
                        <div className="flex flex-col items-start">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
