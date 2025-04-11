import Image from "next/image";

const Footer = () => {
  return (
    <main className='bg-white/70 max-sm:flex-col max-sm:space-y-10 max-md:px-[30px] max-md:space-x-5 max-lg:space-x-[30px] w-full flex space-x-[155px] px-[97px] py-[44px] text-black h-auto'>
      <section className='w-full'>
        <div className='flex text-[32px] font-bold items-center space-x-[10px]'>
          <Image
            src='/assets/images/Easyship 1.png'
            alt='EasyShip Logo'
            width={40}
            height={40}
          />
          <h1 className='max-md:text-[25px]'>EasyShip</h1>
        </div>

        <div className='flex items-center space-x-[23px] mt-[38px]'>
          <Image
            src='/assets/images/Facebook.png'
            alt='Facebook'
            width={24}
            height={24}
          />
          <Image
            src='/assets/images/Insta.png'
            alt='Instagram'
            width={24}
            height={24}
          />
          <Image
            src='/assets/images/X.png'
            alt='X (Twitter)'
            width={24}
            height={24}
          />
        </div>

        <div className='space-y-1 mt-[18px]'>
          <h1 className='leading-[35px] text-black/70'>
            Subscribe to our Newsletter
          </h1>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email Address'
            className='border-1 px-[20px] py-[5px] w-[318px] border-[#000]/20'
          />
        </div>
      </section>

      <section className='w-full'>
        <ul className='text-[18px] text-black/70 font-light space-y-[23px] max-md:text-[15px]'>
          {["About Us", "FAQ", "Support", "Contact Us", "Locations"].map((item) => (
            <li key={item}>
              <a
                href='#'
                className='hover:underline hover:decoration-dotted hover:decoration-[#000]/50'
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className='w-full'>
        <ul className='text-[18px] text-black/70 font-light space-y-[24px] max-md:text-[15px]'>
          {["Terms of Service", "Privacy Policy", "Cookies Policy"].map((item) => (
            <li key={item}>
              <a
                href='#'
                className='hover:underline hover:decoration-dotted hover:decoration-[#000]/50'
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Footer;
