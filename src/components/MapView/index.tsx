import { Coordinates } from "@/lib/types";
import { useEffect, useState } from "react";

import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

// Your access token can be found at: https://ion.cesium.com/tokens.
// Replace `your_access_token` with your Cesium ion access token.

Cesium.Ion.defaultAccessToken =
  process.env.NEXT_PUBLIC_CESIUM_ACCESSTOKEN || "";

export function MapView() {
  const [coordinates, setCoordinates] = useState<Coordinates>({});

  useEffect(() => {
    fetch("/api/map/listCoordinates")
      .then((response) => response.json())
      .then((data) => setCoordinates(data))
      .catch((error) => console.error("Error fetching coordinates:", error));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // The URL on your server where CesiumJS's static files are hosted.
      window.CESIUM_BASE_URL = process.env.NEXT_PUBLIC_CESIUM_BASE_URL || "";
      // Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
      const viewer = new Cesium.Viewer("cesiumContainer", {
        terrainProvider: Cesium.createWorldTerrain(),
      });
      // Add Cesium OSM Buildings, a global 3D buildings layer.
      const buildingTileset = viewer.scene.primitives.add(
        Cesium.createOsmBuildings()
      );
      // Fly the camera to San Francisco at the given longitude, latitude, and height.
      viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
        orientation: {
          heading: Cesium.Math.toRadians(0.0),
          pitch: Cesium.Math.toRadians(-15.0),
        },
      });
    }
  }, []);

  return (
    <div id="cesiumContainer" style={{ width: "100%", height: "600px" }} />
  );
}
