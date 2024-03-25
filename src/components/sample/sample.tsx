// import { Table } from "@components/table";
import { FC } from "react";

// const getData = () => [
//   {
//     name: "Jane Cooper",
//     email: "jane.cooper@example.com",
//     title: "Regional Paradigm Technician",
//     department: "Optimization",
//     status: "Active",
//     role: "Admin",
//     imgUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Cody Fisher",
//     email: "cody.fisher@example.com",
//     title: "Product Directives Officer",
//     department: "Intranet",
//     status: "Active",
//     role: "Owner",
//     imgUrl:
//       "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Esther Howard",
//     email: "esther.howard@example.com",
//     title: "Forward Response Developer",
//     department: "Directives",
//     status: "Active",
//     role: "Member",
//     imgUrl:
//       "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Jenny Wilson",
//     email: "jenny.wilson@example.com",
//     title: "Central Security Manager",
//     department: "Program",
//     status: "Active",
//     role: "Member",
//     imgUrl:
//       "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Kristin Watson",
//     email: "kristin.watson@example.com",
//     title: "Lean Implementation Liaison",
//     department: "Mobility",
//     status: "Active",
//     role: "Admin",
//     imgUrl:
//       "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Cameron Williamson",
//     email: "cameron.williamson@example.com",
//     title: "Internal Applications Engineer",
//     department: "Security",
//     status: "Active",
//     role: "Member",
//     imgUrl:
//       "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
// ];

const Sample: FC = () => {
  //   const columns = useMemo(
  //     () => [
  //       {
  //         Header: "Name",
  //         accessor: "name",
  //       },
  //       {
  //         Header: "Title",
  //         accessor: "title",
  //       },
  //       {
  //         Header: "Status",
  //         accessor: "status",
  //       },
  //       {
  //         Header: "Role",
  //         accessor: "role",
  //       },
  //     ],
  //     []
  //   );

  //   const data = useMemo(() => getData(), []);
  return (
    <>
      <div
        className="mb-4 flex rounded-lg border border-slate-200 bg-slate-50 px-5 py-3 text-slate-700 dark:border-slate-700 dark:bg-slate-800"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1">
          <li>
            <div className="flex items-center">
              <a
                className="text-sm font-medium text-slate-700 hover:text-slate-400 dark:text-slate-400 dark:hover:text-white"
                href="/"
              >
                Dashboard
              </a>
              <svg
                className="ml-1 h-6 w-6 text-slate-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-400 dark:hover:text-white">
                Trips
              </span>
            </div>
          </li>
        </ol>
      </div>
      <div>{/* <Table columns={columns} data={data} /> */}</div>
      <div className="rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:p-6 lg:p-8">
          <div className="mb-5 justify-between sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-slate-700">Trips</h1>
              <p className="mt-2 text-sm text-slate-400">
                A list of all the trips you have made.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sample;
