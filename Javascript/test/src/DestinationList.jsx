import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeDestination } from "./destinationSlice";

export const DestinationList = () => {
    const destinations = useSelector((state) => state.destinations.destinations);
    const dispatch = useDispatch();

    const handleRemoveDestination = (id) => {
        dispatch(removeDestination(id));
    };
    return (
        <div>
            {" "}
            <h1>Destination List</h1>
            {destinations.map((destination) => (
                <div key={destination.id}>
                    {" "}
                    {destination.name}{" "}
                    <button onClick={() => handleRemoveDestination(destination.id)}>
                        {" "}
                        Delete Movie
                    </button>
                </div>
            ))}
        </div>
    );
};