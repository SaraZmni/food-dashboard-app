import { FC } from "react";

const Sample: FC = () => {
  return (
    <>
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
