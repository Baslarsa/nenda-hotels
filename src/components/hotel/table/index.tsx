import { TableRowData } from "..";
import TableRow from "./TableRow";

const Table = ({
  headers,
  rows,
}: {
  headers: string[];
  rows?: TableRowData[];
}) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
              <table className="min-w-full">
                <thead className="">
                  <tr>
                    {headers.map((header) => (
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        <a
                          href="#"
                          className="group inline-flex font-main-bold"
                        >
                          {header}
                        </a>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {rows?.map((row: TableRowData) => (
                    <TableRow data={row} />
                  ))}
                  {!rows && <p>NO data</p>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
