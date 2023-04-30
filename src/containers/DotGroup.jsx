import SocialMediaIcons from "../components/SocialMediaIcons";

const DotGroup = () => {
  return (
    <div className="z-[10] gap-6 fixed top-[30%] left-0 p-2 bg-dark rounded-sm shadow-md shadow-black">
      <SocialMediaIcons flexDirection={'flex-col'} />
    </div>
  );
};

export default DotGroup;
