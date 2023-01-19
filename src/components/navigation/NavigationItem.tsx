import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { Link, useParams } from "react-router-dom";
import data from "../../data.json";

const NavigationItem = ({
  hotelID,
  selectedHotelID,
  onClick,
}: {
  hotelID: number;
  selectedHotelID?: number;
  onClick: (value: number) => void;
}) => {
  const hotel = data.customers.find((customer) => customer.id === hotelID);
  const { id } = useParams();
  const handleClick = () => {
    onClick(hotelID);
  };
  console.log(id);
  return (
    <>
      {hotel && (
        <Link
          onClick={handleClick}
          key={hotel.name}
          to={`/hotels/${hotel.id}`}
          className={classNames(
            hotel.id == selectedHotelID
              ? "bg-main-blue text-white"
              : "text-gray-500 hover:bg-gray-50 hover:text-gray-900",
            "group flex items-center px-2 py-2 text-sm font-main-bold rounded-md"
          )}
        >
          <BuildingOfficeIcon
            className={classNames(
              hotel.id === selectedHotelID
                ? "text-white"
                : "text-gray-400 group-hover:text-gray-500",
              "mr-3 flex-shrink-0 h-6 w-6"
            )}
            aria-hidden="true"
          />
          <span className="flex-1">{hotel.name}</span>
          {hotel.screens.length > 0 ? (
            <span
              className={classNames(
                hotel.id == selectedHotelID
                  ? "bg-white text-main-blue"
                  : "bg-gray-100 group-hover:bg-gray-200 transform scale-90 group-hover:scale-100",
                "ml-3 inline-block py-0.5 px-3 text-xs rounded-sm transition-all"
              )}
            >
              {hotel.screens.length}
            </span>
          ) : null}
        </Link>
      )}
    </>
  );
};

export default NavigationItem;
