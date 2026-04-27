import React from "react";
import Conteinar from "../Conteinar";
import Images from "../Images";
import FooterLogo from "/src/assets/footerLogo.png";
import { Link } from "react-router-dom";
import Twitter from '/src/assets/twitter.png'
import Facebook from '/src/assets/facebook.png'
import Linkend from '/src/assets/linkedin.png'
import Youtube from '/src/assets/youtube.png'
import Instagram from '/src/assets/instagram.png'


const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white">
        <Conteinar>
          <div className="pt-20 pb-[130px] flex justify-between">
            {/* Footer Logo */}
            <div className="">
              <Images imgSrc={FooterLogo} />
            </div>
            {/* Footer Menu */}
            <div className="flex gap-x-[150px]">
              {/* Join Us */}
              <div className="">
                <h6 className="font-poppins text-[20px] pb-8">Join Us</h6>
                <ul className="font-poppins text-[14px] text-[#939292]">
                  <Link to={"/"}><li className="py-2.5">Careers</li></Link>
                  <Link to={"/"}><li className="py-2.5">E-Bike</li></Link>
                  <Link to={"/"}><li className="py-2.5">E-Scooter</li></Link>
                  <Link to={"/"}><li className="py-2.5">Sustainability</li></Link>
                  <Link to={"/"}><li className="py-2.5">Innovation</li></Link>
                  <Link to={"/"}><li className="py-2.5">Safety</li></Link>
                </ul>
              </div>
              {/* About */}
              <div className="">
                <h6 className="font-poppins text-[20px] pb-8">About</h6>
                <ul className="font-poppins text-[14px] text-[#939292]">
                  <Link to={"/"}><li className="py-2.5">Community</li></Link>
                  <Link to={"/"}><li className="py-2.5">Lime Times Blog</li></Link>
                  <Link to={"/"}><li className="py-2.5">Press</li></Link>
                  <Link to={"/"}><li className="py-2.5">Partners</li></Link>
                </ul>
              </div>
              {/* Programs */}
              <div className="">
                <h6 className="font-poppins text-[20px] pb-8">Programs</h6>
                <ul className="font-poppins text-[14px] text-[#939292]">
                  <Link to={"/"}><li className="py-2.5">Advertise</li></Link>
                  <Link to={"/"}><li className="py-2.5">Lime Access</li></Link>
                  <Link to={"/"}><li className="py-2.5">Lime Hero</li></Link>
                  <Link to={"/"}><li className="py-2.5">Lime Assist</li></Link>
                  <Link to={"/"}><li className="py-2.5">Insurance</li></Link>
                  <Link to={"/"}><li className="py-2.5">Our Cities</li></Link>
                </ul>
              </div>
            </div>
            {/* Location & Social */}
            <div className="">
              <h6 className="font-poppins text-[20px] text-[#939292] pb-9">Find Location</h6>
              <h6 className="font-poppins text-[20px] text-[#939292] pb-9">Get help</h6>
              <h6 className="font-poppins text-[20px] text-[#939292] pb-10">Sitemap</h6>
              {/* Social Icons */}
              <div className="flex gap-x-3">
                <a href=""><Images imgSrc={Twitter}/></a>
                <a href=""><Images imgSrc={Facebook}/></a>
                <a href=""><Images imgSrc={Linkend}/></a>
                <a href=""><Images imgSrc={Youtube}/></a>
                <a href=""><Images imgSrc={Instagram}/></a>
              </div>
            </div>
          </div>
          {/* Bottom Bar */}
          <div className="font-poppins text-[12px] pb-[57px]">
            <ul className="flex items-center">
              <li className="mr-[265px]">2024 Lime</li>
              <li className="mr-10 underline">User Agreement</li>
              <li className="mr-10 underline">Privacy Notice</li>
              <li className="mr-10 underline">Data Request</li>
              <li className="mr-10 underline">Research</li>
              <li className="mr-10 underline">Legal Bases</li>
              <li className="mr-10 underline">My Information</li>
              <li className="mr-10 underline">Imprint</li>
            </ul>
          </div>
        </Conteinar>
      </footer>
    </>
  );
};

export default Footer;