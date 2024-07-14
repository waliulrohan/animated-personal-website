import Image from "next/image";


export default function Home() {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-auto md:overflow-hidden">
      {/* IMAGE CONTAINER */}
      <div className="h-2/5 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-3/5 lg:h-full lg:w-1/2 flex flex-col gap-4 md:gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-2xl md:text-6xl font-bold">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        {/* DESC */}
        <p className="md:text-xl">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code.
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
        <button className="p-3 rounded-lg ring-1 ring-black bg-black text-white">
          View My Work
        </button>
        <button className="p-2 rounded-lg ring-1 ring-black">
          Contact Me
        </button>
      </div>
      </div>
    </div>
  );
}
