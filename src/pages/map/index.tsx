import { Session } from "@/components/Session";
import { Layout } from "@/components/Layout";
import { MapView } from "@/components/MapView";

export default function Map() {
  return (
    <Layout>
      <Session unAuthText="To see the Map in action, you have to ">
        <MapView />
      </Session>
    </Layout>
  );
}
