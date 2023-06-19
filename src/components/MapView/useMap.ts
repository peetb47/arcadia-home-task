import { Coordinate } from "@/lib/types";
import { useEffect, useRef, useState } from "react";
import * as Cesium from "cesium";

Cesium.Ion.defaultAccessToken =
  process.env.NEXT_PUBLIC_CESIUM_ACCESSTOKEN || "";

const pinBuilder = new Cesium.PinBuilder();

export function useMap(mapId: string) {
  const viewer = useRef<Cesium.Viewer | null>(null);
  const [ready, setReady] = useState(false);

  function flyTo(coordinate: Coordinate | undefined, height?: number) {
    if (!coordinate) {
      console.error("Coordinate is required to fly to");
      return;
    }
    const { lat, lng } = coordinate;

    viewer.current?.entities?.add({
      position: Cesium.Cartesian3.fromDegrees(+lng, +lat, 300),
      billboard: {
        image: pinBuilder.fromColor(Cesium.Color.AZURE, 64.0),
        scale: 1.0,
      },
    });

    viewer.current?.camera?.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(+lng, +lat, height || 300),
      orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-15.0),
      },
    });
  }

  useEffect(() => {
    const asyncInit = async function () {
      await new Promise((res) => setTimeout(res, 300));
      if (typeof window !== "undefined") {
        const elem = document.getElementById(mapId);
        if (elem) {
          // The URL on the server where CesiumJS's static files are hosted.
          window.CESIUM_BASE_URL =
            process.env.NEXT_PUBLIC_CESIUM_BASE_URL || "";
          // Initialize the Cesium Viewer in the HTML element with the mapId as ID.
          viewer.current = new Cesium.Viewer(mapId, {
            terrainProvider: Cesium.createWorldTerrain(),
          });
          // Add Cesium OSM Buildings, a global 3D buildings layer.
          viewer.current.scene.primitives.add(Cesium.createOsmBuildings());
          // everything is loaded

          setReady(true);
        }
      }
    };
    asyncInit();
    return () => {
      viewer.current?.destroy();
    };
  }, [mapId]);

  return { flyTo, ready };
}
