export type Coordinate = {
  lat: string;
  lng: string;
};

export interface Coordinates {
  [key: string]: Coordinate;
}
