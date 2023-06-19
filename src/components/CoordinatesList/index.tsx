import { Coordinate, Coordinates } from "@/lib/types";

type EntryType = [string, Coordinate];

interface CoordinatesListProps {
  onChange: (c: Coordinate, l: string) => void;
  coordinates: Coordinates | null;
  location: string;
}

export function CoordinatesList({
  onChange,
  coordinates,
  location,
}: CoordinatesListProps) {
  return coordinates ? (
    <ul className="flex flex-row gap-2 justify-center">
      {coordinates &&
        Object.entries(coordinates).map((entry: EntryType, index: number) => {
          const [name, coordinate] = entry;
          const isActive = location === name;
          const activeClassName = isActive ? "bg-blue-500" : "";
          return (
            <li key={index}>
              <button
                className={`p-2 border rounded border-gray-300 ${activeClassName}`}
                onClick={() => {
                  onChange(coordinate, name);
                }}
              >
                {name}
              </button>
            </li>
          );
        })}
    </ul>
  ) : (
    <div>Loading...</div>
  );
}
