import { Coordinates } from "@/lib/types";
import { useEffect, useState } from "react";

export function useCoordinates() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  useEffect(() => {
    fetch("/api/map/listCoordinates")
      .then((response) => response.json())
      .then((data) => setCoordinates(data))
      .catch((error) => console.error("Error fetching coordinates:", error));
  }, []);

  return { coordinates };
}
