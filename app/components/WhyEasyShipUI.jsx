import Image from "next/image";
import mark from "../public/assets/images/Vector (6).png"; // adjust if in /public or use src path

const WhyEasyShipUI = ({ children }) => {
  return (
    <main>
      <section className="flex leading-[15px] w-full mt-[15px] text-[#000]/75 max-sm:flex-col max-md:items-center">
        <Image
          src={mark}
          alt="Check Icon"
          width={25}
          height={25}
          className="w-[18.56px] max-sm:w-[25.56px] h-[25.56px]"
        />
        <section className="leading-[15px] text-[18px] ml-[15px]">{children}</section>
      </section>
    </main>
  );
};

export default WhyEasyShipUI;
