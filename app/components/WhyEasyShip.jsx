import Image from "next/image";
import Truck from "../assets/images/truck.png";
import Mark from "../assets/images/greenmark.png";

const WhyEasyShip = () => {
  return (
    <main className="w-full px-6 md:px-[180px] space-y-2 items-center mt-[75px]">
      {/* Title */}
      <section className="text-center">
        <h1 className="font-bold text-[27px] text-black">Why Choose EasyShip?</h1>
      </section>

      {/* Content */}
      <section className="grid grid-cols-1 max-lg:flex max-lg:flex-col md:grid-cols-4 items-center gap-[25px]">
        {/* Truck Image */}
        <div className="col-span-1 max-sm:hidden max-md:hidden">
          <Image src={Truck} alt="Delivery Truck" width={300} height={250} />
        </div>

        {/* Benefits List */}
        <section className="col-span-3 text-black/75 text-[20px] max-lg:flex max-lg:flex-col space-y-[15px]">
          {[
            { title: "Fast & Reliable –", desc: "Speedy deliveries you can count on." },
            { title: "Trusted Vendors –", desc: "Shop from verified and top-rated sellers." },
            { title: "Secure Payments –", desc: "Multiple safe and convenient payment options." },
            { title: "Real-Time Tracking –", desc: "Know exactly where your package is at any time." },
            { title: "24/7 Support –", desc: "Our team is here to help whenever you need it." },
          ].map((item, index) => (
            <p key={index} className="flex max-lg:items-center max-lg:flex-col space-x-[25px]">
              <Image src={Mark} alt="Check" width={25} height={25} />
              <span className="font-bold">{item.title}</span> {item.desc}
            </p>
          ))}

          <p>
            Join thousands of satisfied customers today!{" "}
            <span className="text-[#2644A0] font-bold">Learn more.</span>
          </p>
        </section>
      </section>
    </main>
  );
};

export default WhyEasyShip;
