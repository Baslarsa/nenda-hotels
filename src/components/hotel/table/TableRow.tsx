import { TableRowData } from "..";
import data from "../../../data.json";

const TableRow = ({ data }: { data: TableRowData }) => {
  return (
    <tr>
      {Object.values(data).map((item) => {
        return (
          <td className="capitalize font-main-light whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
            {item ? colData(item) : "Unspecified room"}
          </td>
        );
      })}
    </tr>
  );
};

const packageColor = (packageName: string) => {
  switch (packageName) {
    case data.availablePackages[0]:
      return "bg-green-500";
    case data.availablePackages[1]:
      return "bg-cyan-800";
    case data.availablePackages[2]:
      return "bg-violet-800";
    case data.availablePackages[3]:
      return "bg-rose-800";
  }
};

const colData = (item: any) => {
  switch (typeof item) {
    case "string":
      console.log("string", item);
      return item;
    case "number":
      console.log("number", item);
      return (
        <p>
          <span className="font-main-bold text-main-blue">
            {Math.round((Number(item) / 60) * 10) / 10}
          </span>
          &nbsp;hrs
        </p>
      );
    case "object":
      console.log("object", item);
      return item.map((i: string) => (
        <span
          className={`py-1 px-2 ${packageColor(
            i
          )} text-white font-main-bold rounded-md mr-1 bg-opacity-80`}
        >
          {i}
        </span>
      ));
  }
};

export default TableRow;
