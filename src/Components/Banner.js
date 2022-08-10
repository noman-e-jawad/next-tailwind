import Image from "next/image";
import React from "react";
import Illustration from "../../public/illustration-intro.svg";

const Banner = () => {
  return (
    <div className="relative min-h-screen h-full overflow-x-hidden">
      <svg
        className="absolute -left-40 -top-60 scale-50"
        xmlns="http://www.w3.org/2000/svg"
        width="814"
        height="814"
      >
        <rect
          width="436"
          height="970"
          x="774"
          y="-62"
          fill="#fff0eb"
          rx="218"
          transform="rotate(45 718.814 -291.157)"
        />
      </svg>

      <div className="fluid flex flex-col md:flex-row-reverse md:items-center min-h-screen h-full">
        <div className="max-w-full w-8/12 md:w-full mt-28 md:mt-0 mx-auto">
          <Image
            src={Illustration}
            width={300}
            height={280}
            alt=""
            layout="responsive"
          />
        </div>
        <div className="relative flex flex-col  justify-center md:items-start items-center h-full gap-6">
          <h1 className="bannner-heading md:text-left">
            Bring Everyone Together To Build Better Products
          </h1>
          <p className="body-text md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            facilis debitis praesentium, atque molestiae minus optio!
          </p>
          <button className="button-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
