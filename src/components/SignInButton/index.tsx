import { signIn } from "next-auth/react";

export function SignInButton() {
  return (
    <a className="underline" href="#" onClick={() => signIn()}>
      Sign in
    </a>
  );
}
