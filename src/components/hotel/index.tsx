import HotelHeader from "./Header";
import data from "../../data.json";
import { useParams } from "react-router-dom";
import Table from "./table";

const headers = ["Name", "Packages", "Status", "Streamed Minutes"];

export type TableRowData = {
  name: string | boolean | undefined | null;
  packages: string[];
  status: "active" | "inactive";
  streaming_length: number;
};

const HotelView = () => {
  const { id } = useParams();
  const customer = data.customers.find(
    (customer) => customer.id === Number(id)
  );

  if (!id) return <>Couldn't find data for this page</>;
  return (
    <div className="w-full flex flex-col">
      <HotelHeader id={Number(id)} />
      {customer?.screens && (
        <Table headers={headers} rows={customer.screens as TableRowData[]} />
      )}
    </div>
  );
};

export default HotelView;
