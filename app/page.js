import Image from "next/image";
import SignUp from "./sign-up/page";
import Signin from "./sign-in/page";
export default function Home() {
  return (
    <main className="flex min-h-screen">
      <SignUp />
    </main>
  );
}
