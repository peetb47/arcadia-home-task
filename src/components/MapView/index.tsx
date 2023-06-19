import "cesium/Build/Cesium/Widgets/widgets.css";

interface MapViewProps {
  id: string;
}

export function MapView({ id }: MapViewProps) {
  return (
    <div className="flex-col">
      <ul className="flex flex-row gap-4"></ul>
      <div id={id} style={{ width: "100%", height: "600px" }} />
    </div>
  );
}
