import { PlayButton } from "@/shared/ui/play-button"

export const MainPage: React.FC = () => {
  return (
    <main className="bg-[#edecdc] grid gap-2 grid-cols-2 grid-rows-8 w-full h-screen">
      <section className=" ml-2 mt-2 border-2 border-black bg-red-500 rounded-b-[100px/50px] relative"></section>
      <section className="flex flex-col mr-2 mt-2 border-2 border-black row-span-7 bg-menu bg-center bg-no-repeat bg-cover">
        <button className="border-2 text-black border-black relative [transform:skew(-10deg)] h-12 z-10 bg-white mr-3 ml-4 mt-10 after:absolute after:bottom-[-27px] after:bg-white after:border-l-2 after:border-black after:w-6 after:h-7 after:left-[-2px] after:[clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_100%,0%_0%)] before:absolute before:bottom-[-30px] before:bg-black before:w-6 before:h-7 before:left-[-2px] before:[clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_100%,0%_0%)]">Магазин</button>
        <button className="border-2 text-black border-black relative [transform:skew(-10deg)] h-12 z-10 bg-white mr-3 ml-4 mt-10 after:absolute after:bottom-[-27px] after:bg-white after:border-l-2 after:border-black after:w-6 after:h-7 after:left-[-2px] after:[clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_100%,0%_0%)] before:absolute before:bottom-[-30px] before:bg-black before:w-6 before:h-7 before:left-[-2px] before:[clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_100%,0%_0%)]">Коллекция</button>
        <button className="border-2 text-black border-black relative [transform:skew(-10deg)] h-12 z-10 bg-white mr-3 ml-4 mt-10 after:absolute after:bottom-[-27px] after:bg-white after:border-l-2 after:border-black after:w-6 after:h-7 after:left-[-2px] after:[clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_100%,0%_0%)] before:absolute before:bottom-[-30px] before:bg-black before:w-6 before:h-7 before:left-[-2px] before:[clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_100%,0%_0%)]">Лидерборд</button>
      </section>
      <section className="ml-2 mb-2 grid-rows-2 grid gap-2 row-span-7 relative">
        <div className="grid-rows-2 grid gap-2 row-span-3 absolute top-0 right-0 left-0 bottom-0 z-30">
          <div className="border-2 row-span-1 border-black"></div>
          <div className="border-2 row-span-1 border-black"></div>
        </div>
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-info z-10 bg-bottom bg-no-repeat"></div>
        <div className="border-2 row-span-1"></div>
        <div className="h-2 w-full bg-[#edecdc] absolute top-[50%] mt-[-4px] z-20"></div>
        <div className="border-2 row-span-1"></div>
      </section>
      <section className="mr-2 flex mb-2 border-2 border-black bg-lime-400">
        <PlayButton />
      </section>
    </main>
  )
}