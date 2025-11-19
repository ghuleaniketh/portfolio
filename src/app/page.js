import Image from "next/image";
import HomePage from "./page/home";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HomePage />
    </div>
  );
}
