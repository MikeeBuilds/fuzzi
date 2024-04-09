import Image from "next/image";
import Navbar from "../components/global/navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0 h-full w-full items-center"></div>
      </section>
    </main>
  );
}
