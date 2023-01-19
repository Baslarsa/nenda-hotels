import data from "../../data.json";
import NumberBadge from "./NumberBadge";

const HotelHeader = ({ id }: { id: number }) => {
  const hotel = data.customers.find((customer) => customer.id === id);
  return (
    <div className="w-full rounded-lg bg-white">
      <div className="bg-white p-6">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                {hotel?.name}
              </p>
              <p className="capitalize text-sm font-medium text-gray-600">
                {hotel?.type}
              </p>
            </div>
          </div>
          <NumberBadge number={hotel?.screens.length || 0} title="Screens" />
        </div>
      </div>
    </div>
  );
};

export default HotelHeader;
