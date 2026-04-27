import React from "react";
import Conteinar from "../Conteinar";
import Images from "../Images";
import FooterLogo from "/src/assets/footerLogo.png";
import { Link } from "react-router-dom";
import Twitter from "/src/assets/twitter.png";
import Facebook from "/src/assets/facebook.png";
import Linkend from "/src/assets/linkedin.png";
import Youtube from "/src/assets/youtube.png";
import Instagram from "/src/assets/instagram.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white">
        <Conteinar>
          {/* Main Footer Content */}
          <div className="pt-12 md:pt-20 pb-16 md:pb-[130px] flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">
            {/* Footer Logo */}
            <div className="flex-shrink-0">
              <Images imgSrc={FooterLogo} />
            </div>

            {/* Footer Menu Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:gap-x-[80px] lg:gap-x-[150px] gap-y-10">
              {/* Join Us */}
              <div>
                <h6 className="font-poppins text-[18px] md:text-[20px] pb-5 md:pb-8">
                  Join Us
                </h6>
                <ul className="font-poppins text-[13px] md:text-[14px] text-[#939292]">
                  <Link to={"/"}>
                    <li className="py-2">Careers</li>
                  </Link>
                  <Link to={"/"}>
                    <li className="py-2">E-Bike</li>
                  </Link>
                  <Link to={"/"}>
                    <li className="py-2">E-Scooter</li>
                  </Link>
                  <Link to={"/"}>
                    <li className="py-2">Sustainability</li>
                  </Link>
                  <Link to={"/"}>
                    <li className="py-2">Innovation</li>
                  </Link>
                  <Link to={"/"}>
                    <li className="py-2">Safety</li>
                  </Link>
                </ul>
              </div>

              {/* About */}
              <div>
                <h6 className="font-poppins text-[18px] md:text-[20px] pb-5 md:pb-8">
                  About
                </h6>
                <ul className="font-poppins text-[13px] md:text-[14px] text-[#939292]">
                  <Link to={"/"}>
                    <li className="py-2">Community</li>
                  </Link>
                  <Link to={"/"}>
                    <li className="py-2">Lime Times Blog</li>
                  </Link>
                  <Link to={"/"}>
                    <li className="py-2">Press</li>
                  </Link>
                  <Link to={"/"}>
                    <li className="py-2">Partners</li>
                  </Link>
                </ul>
              </div>

              {/* Programs */}
              <div>
                <h6 className="font-poppins text-[18px] md:text-[20px] pb-5 md:pb-8">
                  Programs
                </h6>
                <ul className="font-poppins text-[13px] md:text-[14px] text-[#939292]">
                  <Link to={"/"}>
                    <li className="py-2">Advertise</li>
                  </Link>
                  <Link to={"/"}>
                    <li className="py-2">Lime Access</li>
                  </Link>
                  <Link to={"/"}>
                    <li className="py-2">Lime Hero</li>
                  </Link>
                  <Link to={"/"}>
                    <li className="py-2">Lime Assist</li>
                  </Link>
                  <Link to={"/"}>
                    <li className="py-2">Insurance</li>
                  </Link>
                  <Link to={"/"}>
                    <li className="py-2">Our Cities</li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Location & Social */}
            <div className="flex-shrink-0">
              <h6 className="font-poppins text-[18px] md:text-[20px] text-[#939292] pb-6 md:pb-9">
                Find Location
              </h6>
              <h6 className="font-poppins text-[18px] md:text-[20px] text-[#939292] pb-6 md:pb-9">
                Get help
              </h6>
              <h6 className="font-poppins text-[18px] md:text-[20px] text-[#939292] pb-8 md:pb-10">
                Sitemap
              </h6>
              {/* Social Icons */}
              <div className="flex gap-x-3 flex-wrap gap-y-3">
                <a href="">
                  <Images imgSrc={Twitter} />
                </a>
                <a href="">
                  <Images imgSrc={Facebook} />
                </a>
                <a href="">
                  <Images imgSrc={Linkend} />
                </a>
                <a href="">
                  <Images imgSrc={Youtube} />
                </a>
                <a href="">
                  <Images imgSrc={Instagram} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}

          <div className="font-poppins text-[11px] md:text-[12px] pb-10 md:pb-[57px] border-t border-[#333] pt-6 md:pt-0 md:border-none">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 md:flex-nowrap md:gap-x-0 items-center">
              <li className="w-full md:w-auto md:mr-[265px]">2024 Lime</li>
              <li className="underline md:mr-10">User Agreement</li>
              <li className="underline md:mr-10">Privacy Notice</li>
              <li className="underline md:mr-10">Data Request</li>
              <li className="underline md:mr-10">Research</li>
              <li className="underline md:mr-10">Legal Bases</li>
              <li className="underline md:mr-10">My Information</li>
              <li className="underline md:mr-10">Imprint</li>
            </ul>
          </div>
        </Conteinar>
      </footer>
    </>
  );
};

export default Footer;
