import Image from "next/image"

import Banner from "@/assets/imgs/banner.png";


function Header(){
  return (
    <header className="relative flex flex-col items-center justify-center">
    <Image src={Banner} alt="Banner" className="h-auto w-full" />
    <div className="absolute grid grid-cols-2">
      <div />
      <h1 className="text-2xl font-extrabold italic leading-tight tracking-widest text-white md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight 2xl:text-6xl 2xl:leading-tight">
        Pesquisa de Satisfação <br />{" "}
        <strong className="font-black">OAKBERRY</strong>
      </h1>
    </div>
  </header>
  )
}

export { Header }