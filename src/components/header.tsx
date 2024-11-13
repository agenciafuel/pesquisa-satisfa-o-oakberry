import Image from "next/image";

import Banner from "@/assets/imgs/banner.png";
import BannerMobile from "@/assets/imgs/HomeBannerMobile.webp";

function Header() {
  return (
    <header className="relative flex flex-col bg-offWhite-500 md:items-center md:justify-center">
      <Image
        src={Banner}
        alt="Banner"
        className="hidden h-[200px] w-full object-cover md:block md:h-auto"
      />
      <Image src={BannerMobile} alt="Banner" className="block md:hidden" />

      <div className="absolute top-[20%] w-full items-center md:grid md:grid-cols-2">
        <div />
        <h1 className="text-center text-2xl font-extrabold italic leading-tight tracking-widest text-white md:top-0 md:text-left md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight 2xl:text-6xl 2xl:leading-tight">
          Pesquisa de Satisfação <br />{" "}
          <strong className="font-black">OAKBERRY</strong>
        </h1>
      </div>
    </header>
  );
}

export { Header };
