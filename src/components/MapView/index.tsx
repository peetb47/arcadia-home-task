import "cesium/Build/Cesium/Widgets/widgets.css";

export function MapView({ id }: { id: string }) {
  return (
    <div className="flex-col">
      <ul className="flex flex-row gap-4"></ul>
      <div id={id} style={{ width: "100%", height: "600px" }} />
    </div>
  );
}
