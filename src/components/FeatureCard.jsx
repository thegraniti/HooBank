import React from "react";
import { features } from "../constants";
import styles from "../style";

function FeatureCard(props) {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        props.index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img
          src={props.icon}
          alt="icon"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {props.title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {props.content}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
