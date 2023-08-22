import Image from "next/image";
import StartWrapper from "./components/StartWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-blue-300 to-blue-400">
      <StartWrapper />
    </main>
  );
}
