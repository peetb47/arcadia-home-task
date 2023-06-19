// pages/api/listCoordinates.ts

import { Coordinates } from "@/lib/types";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Coordinates>
) {
  // Mocked data
  const coordinates: Coordinates = {
    budapest: { lat: "47.4986567", lng: "19.0532484" },
    dresden: { lat: "51.082249", lng: "13.7269685" },
    los_angeles: { lat: "33.9201528", lng: "-118.3925842" },
  };

  // Set a status code and send the coordinates as JSON
  res.status(200).json(coordinates);
}
