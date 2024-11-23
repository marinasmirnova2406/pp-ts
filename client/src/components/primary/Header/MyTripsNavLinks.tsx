import React from "react";
import { useSelector } from "react-redux";
import useTranslations from "../../../hooks/useTranslations";
import { NavLink } from "react-router-dom";
// components
import { Button } from "../../common/Button/Button";
// store & slices
import { RootState } from "../../../store";

const MyTripsNavLinks: React.FC = () => {

    const newTripsAvailable = useSelector((state: RootState) => state.userTrips.newTripsAvailable);

    const { translations, loading, error } = useTranslations([
      "header.my_trips",
      "header.create_trip"
    ]);
    
    const onClickFunc = () => {
        console.log("Open New Trip Page");
    };


  return (
    <div className="my-trips-nav-links">
        <NavLink to="/my-trips" end>
        {translations["header.my_trips"]}
            <Button 
    additionalClass = "my-trips-nav-links__create-trip-btn"
    content={
        <>
          + {translations["header.create_trip"]}
          <span className="my-trips-nav-links__create-trip-btn__count">{newTripsAvailable}</span>
        </>
      }
    clickFunction={onClickFunc}
    type = "button"
  />
        </NavLink>
        
    </div>
  );
};

export { MyTripsNavLinks };