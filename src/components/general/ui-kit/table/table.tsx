import { FC, useEffect, useState } from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import "./table.css";

type Student = {
  studentId: number;
  name: string;
  dateOfBirth: string;
  major: string;
};

const defaultData: Student[] = [
  {
    studentId: 1111,
    name: "Bahar Constantia",
    dateOfBirth: "1984-01-04",
    major: "Computer Science",
  },
  {
    studentId: 2222,
    name: "Harold Nona",
    dateOfBirth: "1961-05-10",
    major: "Communications",
  },
  {
    studentId: 3333,
    name: "Raginolf Arnulf",
    dateOfBirth: "1991-10-12",
    major: "Business",
  },
  {
    studentId: 4444,
    name: "Marvyn Wendi",
    dateOfBirth: "1978-09-24",
    major: "Psychology",
  },
];

const columnHelper = createColumnHelper<Student>();

const columns = [
  columnHelper.accessor("studentId", {
    header: "Student ID",
  }),
  columnHelper.accessor("name", {
    header: "Full Name",
  }),
  columnHelper.accessor("dateOfBirth", {
    header: "Date Of Birth",
  }),
  columnHelper.accessor("major", {
    header: "Major",
  }),
];

const Table: FC = () => {
  const [data, setData] = useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  useEffect(() => {
    setData([...defaultData]);
  });
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
    </table>
  );
};

export default Table;
