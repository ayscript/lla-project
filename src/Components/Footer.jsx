import "../App.css";
import { Phone, Mail, Iglogo, Linkedin, Facebooksolid, Twitter } from "./Icons";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <img src="img/Logo-2.png" className="footerLogo" alt="" />
          <p>
            Supported and Encouraged by LinkedIn, LinkedIn Local™ is a
            registered trademark of LinkedIn Corporation and is used under
            license. However, LinkedIn Local™events are not sponsored or
            operated by LinkedIn.
          </p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <Phone /> <span>08162751236</span>
            </li>
            <li>
              <Phone /> <span>08162751236</span>
            </li>
            <li>
              <Mail /> <span>llabeokuta@gmail.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Follow us on</h3>
          <div className="socials">
            <a href="https://www.instagram.com/linkedinlocalabeokuta?igsh=MXZub3QyYjEzcWI0dA" target="_blank">
              <Iglogo />
            </a>
            <a href="https://www.linkedin.com/company/linkedin-local-abeokuta-1-0/

" target="_blank">
              <Linkedin />
            </a>
            <a href=" https://www.facebook.com/profile.php?id=61565966279708&mibextid=JRoKGi

"m target="_blank">
              <Facebooksolid />
            </a>
            <a href="https://x.com/linkedinlocabk?t=uoJOGwLjsv0r6rFdbDEgjw&s=09
" target="_blank">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
      <p>&copy; LinkedIn Local Abeokuta 2025. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
