import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { SignInButton } from "../SignInButton";

interface SessionProps {
  children?: ReactNode;
  unAuthText: string;
}

export function Session({
  children,
  unAuthText = "You are not authorized to view this content",
}: SessionProps) {
  const { data: session } = useSession();
  return (
    <>
      {session && children}
      {!session && (
        <div>
          <span className="text-red-300">{unAuthText}</span>
          <SignInButton />
        </div>
      )}
    </>
  );
}
