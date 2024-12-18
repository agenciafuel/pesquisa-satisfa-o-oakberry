import Image from "next/image";

import Airplane from "../assets/airplane.webp";
import GlobeIcon from "../assets/globeIcon.svg";

function Footer() {
  return (
    <footer>
      <div className="relative z-30 grid grid-cols-3 bg-offWhite-500 py-10 lg:px-20">
        <div>
          <Image
            src={Airplane}
            alt={"airplane-alt"}
            className="z-30 hidden animate-floatingPlane select-none lg:block"
            loading="lazy"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={GlobeIcon as string}
            alt={"world-famous-alt"}
            className="w-52 select-none md:w-64"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
}

export { Footer };
