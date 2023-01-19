import { Route, Routes } from "react-router-dom";
import data from "../data.json";
import Logo from "./global/Logo";
import Navigation from "./global/Navigation";
import HotelView from "./hotel";

const LayoutNavigation = () => {
  return (
    <div className="h-full w-screen min-h-screen overflow-hidden flex">
      <div className="max-w-xs w-full h-screen flex flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
        <Logo />
        <Navigation />
      </div>
      <div className="flex w-full h-full">
        <Routes>
          {data.customers.map((customer) => {
            return (
              <Route
                key={customer.id}
                path={`/hotels/:id`}
                element={<HotelView />}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default LayoutNavigation;
