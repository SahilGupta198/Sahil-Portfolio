import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="md:h-38 md:mt-10 md:pt-8">
      <div className="flex flex-col items-center justify-center p-4">

        <div className="md:hidden my-1">
          <SocialMediaIcons flexDirection={'flex-row'} />
        </div>

        <div className="md:w-5/6 flex flex-col md:flex-row justify-between items-center py-2 md:pb-4 md:border-b-[0.1rem] border-neutral-300 ">
          <p className='font-playfair text-xl md:text-4xl text-center leading-5 tracking-wider md:tracking-tight text-light uppercase '>Sahil Gupta</p>
          <p className='w-3/5 md:w-1/4 font-playfair text-sm md:text-xl text-center md:text-left leading-4 md:leading-5 tracking-tight text-light/80 mt-2 md:mt-0'>Living, learning & leveling up, one day at a time.</p>
        </div>
        <p className="text-xs md:text-base md:pt-2">&copy;2023 SG | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
