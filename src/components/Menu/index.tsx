import { useRouter } from "next/router";
import { SignOutButton } from "../SignOutButton";

export function Menu() {
  const router = useRouter();
  function goToMap() {
    router.push("/map");
  }
  return (
    <ul>
      <li className="p-4">
        <button
          className="flex w-full justify-center border border-gray-300 rounded hover:bg-blue-300"
          onClick={goToMap}
        >
          Map
        </button>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  );
}
