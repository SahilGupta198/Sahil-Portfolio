import { FaLinkedin, FaGithub, FaInstagram, FaFacebookSquare } from 'react-icons/fa'

const SocialMediaIcons = ({ flexDirection }) => {
  return (
    <div className={`flex ${flexDirection} gap-5`}>
      <a
        className="hover:text-main hover:scale-110 transition duration-500 text-3xl"
        href="https://www.linkedin.com/in/sahil-gupta-77a62422b"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        className="hover:text-main hover:scale-110 transition duration-500 text-3xl"
        href="https://github.com/SahilGupta198"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        className="hover:text-main hover:scale-110 transition duration-500 text-3xl"
        href="https://www.facebook.com/profile.php?id=100009853204401"
        target="_blank"
        rel="noreferrer">
        <FaFacebookSquare />
      </a>
      <a
        className="hover:text-main hover:scale-110 transition duration-500 text-3xl"
        href="https://instagram.com/sarcasticguptaji?igshid=YmMyMTA2M2Y"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
