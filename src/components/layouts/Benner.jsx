import React from "react";
import Images from "../Images";
import BennerImg from "/src/assets/bennerImg.png";
import Conteinar from "../Conteinar";
import { Link } from "react-router-dom";
import Button from "../Button";
import Flex from "../Flex";

const Benner = () => {
  return (
    <div className="">
      <div className="bg-[url('/src/assets/bennerImg.png')] pt-[360px] pb-[190px] bg-cover bg-center bg-no-repeat">
        <Conteinar>
          <div className="">
            <h2 className="text-white text-[72px] text-center pb-15">
              Ride Green
            </h2>
            <div className={" text-center"}>
              <Link to={"/"} className="px-2.5 ">
                <Button className={"mb-6"} btnText={"Our cities"} />
              </Link>
              <Link to={"/"} className="">
                <Button btnText={"Download the App"} />
              </Link>
            </div>
          </div>
        </Conteinar>
      </div>
    </div>
  );
};

export default Benner;
