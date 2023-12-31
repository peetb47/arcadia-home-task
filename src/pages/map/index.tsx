import { Session } from "@/components/Session";
import { Layout } from "@/components/Layout";
import { MapView } from "@/components/MapView";
import { CoordinatesList } from "@/components/CoordinatesList";
import { useMap } from "@/components/MapView/useMap";
import { Coordinate } from "@/lib/types";
import { useCoordinates } from "@/components/CoordinatesList/useCoordinates";
import { useEffect, useState } from "react";

const id = "cesiumContainer";
const initialLocation = "budapest";

export default function Map() {
  const [location, setLocation] = useState<string>(initialLocation);
  const { flyTo, placePin, ready } = useMap(id);
  const { coordinates } = useCoordinates();

  const flyToAndPlacePin = (coordinate: Coordinate) => {
    flyTo(coordinate);
    placePin(coordinate);
  };

  useEffect(() => {
    // TODO: optimize the placement to not place again if already placed on a coordinate
    coordinates && ready && flyToAndPlacePin(coordinates[initialLocation]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates, ready]);

  return (
    <Layout>
      <Session unAuthText="To see the Map in action, you have to ">
        <div className="flex flex-col gap-2 justify-center items-ceter">
          <CoordinatesList
            location={location}
            coordinates={coordinates}
            onChange={(coordinate: Coordinate, location: string) => {
              flyToAndPlacePin(coordinate);
              setLocation(location);
            }}
          />
          <MapView id={id} />
        </div>
      </Session>
    </Layout>
  );
}
