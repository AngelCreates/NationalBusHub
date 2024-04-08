import React from "react";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const footer1 = [
    {
      title: "ONLINE-BOOKING",
      sub: [
        "VRL",
        "ShriNath",
        "NeetaBus",
        "SRS",
        "Gujrat",
        "HANS"
      ],
    },
    {
      title: "CUSTOMER POLICIES",
      sub: [
        "Contact Us",
        "FAQ",
        "T&C",
        "Terms of Use",
        "Privacy policy",
      ],
    },
    {
      title: "USEFUL LINKS",
      sub: ["Blog", "Careers", "Site Map", "Corporate Infomation", "Whitehat"],
    },
  ];

  return (
    <div className="Footerbody">
      <hr></hr>
      <div className="Footerclass">
        {footer1.map((item, j) => (
          <div key={j} className="Footerclassdiv1">
            <h5 className="colorblack">{item.title}</h5>
            {item.sub.map((el, z) => (
              <p key={z}>{el}</p>
            ))}
          </div>
        ))}
        <div className="Footerclassdiv2">
          <h5>EXPERIENCE of Your Favourite Buses</h5>
          <div>
            <img className="footericon1" src="/googlePlay.png" alt="" />
            <img className="footericon2" src="/AppStore.png" alt="" />
          </div>
          <h5>KEEP IN TOUCH</h5>
          <div style={{ display: "flex", gap: "10px" }}>
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaXTwitter/>
          </div>
        </div>
        <div>
          <img className="footer4" src="/Guarantee.png" alt="" />
        </div>
      </div>
      <div className="footer_popular">Popular Searches</div>
      <div className="footer_popular_details">
        Delhi | Bengluru | Patna | Jaipur | Nashik | Pune | Faridabad | Gurugram | Mumbai | Kolkata | Hyderabad
      </div>
      <div className="footer5">
        <p className="bottom">
          In case of any concern, <span className="footerspan">Contact Us</span>
        </p>
        <p className="bottom">© 2023 www.NBH.com. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
