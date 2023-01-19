import { useState } from "react";
import data from "../../data.json";
import NavigationItem from "../navigation/NavigationItem";

const Navigation = () => {
  const [hotel, setHotel] = useState<number>();
  const setSelectedHotel = (id: number) => {
    setHotel(id);
  };
  return (
    <div className="mt-5 flex flex-grow flex-col">
      <nav className="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
        {data.customers.map((item) => (
          <NavigationItem
            hotelID={item.id}
            key={item.id}
            onClick={setSelectedHotel}
            selectedHotelID={hotel}
          />
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
