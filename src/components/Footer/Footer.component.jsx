import { FooterContainer } from "./Footer.styles";
import githubIcon from "../../assets/github.svg";
import facebookIcon from "../../assets/facebook.svg";
import youtubeIcon from "../../assets/youtube.svg";
import instagramIcon from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://github.com/krzysiekk9/bybitTradingBot">
        <img src={githubIcon} alt="githubIcon" />
      </a>
      <a href="https://www.facebook.com/">
        <img src={facebookIcon} alt="facebookIcon" />
      </a>
      <a href="https://www.youtube.com/">
        <img src={youtubeIcon} alt="youtubeIcon" />
      </a>
      <a href="https://www.instagram.com/">
        <img src={instagramIcon} alt="instagramIcon" />
      </a>
    </FooterContainer>
  );
};

export default Footer;
