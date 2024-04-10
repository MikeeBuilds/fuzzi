import Image from "next/image";
import Navbar from "../components/global/navbar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { Divide } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { clients, products } from "@/lib/constant";
import { HeroParallax } from "@/components/global/connect-parallax";
import { LampComponent } from "@/components/global/Lamp";
import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={'lg'}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Fuzzii
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section>
        <HeroParallax products={products}></HeroParallax>
      </section>
      <section className="mt-[-500px]">
        <LampComponent/>
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:borer:-white/[0.2] border-black-[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ='50'
                className="text-xl font-bold text-neitral-600 dark:text-white"
              >
                Hobby
                <h2 className="text-6xl">$0</h2>
              </CardItem>
              <CardItem
                translateZ='60'
                className="text-xl font-bold text-neitral-600 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads up {"you'll"} never leave us after yu experience it!
                <ul className="my-4 flex flex-col"></ul>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  );
}