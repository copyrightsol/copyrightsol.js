// src/pages/index.tsx
import { GameGrid } from "@/components/game/GameGrid";
import RecentPlays from "@/components/game/RecentPlays/RecentPlays";

export default function HomePage() {
  return (
    <>
      <div className="relative mx-auto flex flex-col gap-5 mt-20 pb-10 px-2.5 transition-all duration-250 ease-in-out sm:px-5 sm:pt-5 md:max-w-6xl">
        <div className="relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-lg lg:grid lg:grid-cols-3 gap-4 lg:p-10 bg-transparent">
          <div
            style={{
              backgroundImage: "url(/seo.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "perspective(800px) rotateX(40deg)",
              transformOrigin: "top center",
              zIndex: -1,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10 transform rotate-12 scale-150 blur-xl pointer-events-none"></div>

          <div className="lg:col-span-2 text-center lg:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <h1 className="text-2xl md:text-4xl font-bold text-white drop-shadow-md">
                WELCOME TO COPYRIGHT.FUN
              </h1>
              <img src="/wave.gif" className="h-14" alt="Copyright Logo" />
            </div>
          </div>
          <div className="whitespace-nowrap grid grid-cols-2 grid-rows-2 gap-2 mt-5 md:flex md:flex-col md:mt-0 md:justify-start">
            <button
              onClick={() => window.open("http://cprsol.com/")}
              className="rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
            >
              ‍💻 Watch the Vision
            </button>
            <button
              onClick={() => window.open("https://t.me/copyrightsolv2")}
              className="rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
            >
              🚀 Join Telegram
            </button>
            <button
              onClick={() => window.open("https://discord.gg/copyrightsol")}
              className="rounded-lg p-3 bg-white hover:bg-gray-200 hover:-translate-y-0.5 transform text-black transition-all duration-200 ease-in-out cursor-pointer shadow-lg hover:shadow-xl"
            >
              💬 Join Discord
            </button>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center">Games</h2>
        <GameGrid />
        <h2 className="text-2xl font-bold text-center">Recent Plays</h2>
        <RecentPlays />
      </div>
    </>
  );
}
