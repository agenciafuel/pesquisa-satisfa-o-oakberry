import Image from "next/image";

import Airplane from "../assets/airplane.webp";
import GlobeIcon from "../assets/globeIcon.svg";

function Footer() {
  return (
    <footer>
      <div className="bg-offWhite-500 relative z-30 grid grid-cols-3 py-10 lg:px-20 ">
        <div>
          <Image
            src={Airplane}
            alt={"airplane-alt"}
            className="animate-floatingPlane z-30 hidden select-none lg:block"
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
