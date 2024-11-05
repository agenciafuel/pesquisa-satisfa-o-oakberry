import Image from "next/image";

import Banner from "@/assets/imgs/banner.png";
import BannerMobile from "@/assets/imgs/HomeBannerMobile.webp";

function Header() {
  return (
    <header className="relative flex flex-col md:items-center md:justify-center bg-offWhite-500">
      <Image
        src={Banner}
        alt="Banner"
        className="hidden h-[200px] w-full object-cover md:block md:h-auto"
      />
      <Image src={BannerMobile} alt="Banner" className="block md:hidden" />

      <div className="top-[20%] w-full absolute md:grid md:grid-cols-2 items-center ">
        <div />
        <h1 className="md:text-left text-center md:top-0 text-2xl font-extrabold italic leading-tight tracking-widest text-white md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight 2xl:text-6xl 2xl:leading-tight">
          Pesquisa de Satisfação <br />{" "}
          <strong className="font-black">OAKBERRY</strong>
        </h1>
      </div>
    </header>
  );
}

export { Header };
