import React from "react";
import { Map, Marker } from "pigeon-maps";

const MyMap = ({ lat, long }) => {
  return (
    <div>
      <Map height={500} defaultCenter={[lat, long]} defaultZoom={15}>
        <Marker width={50} anchor={[lat, long]} />
      </Map>
    </div>
  );
};

export default MyMap;
