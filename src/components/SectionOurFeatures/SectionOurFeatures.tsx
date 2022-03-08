import React, { FC } from "react";
import rightImgPng from "images/our-features.png";
import NcImage from "shared/NcImage/NcImage";
import Badge from "shared/Badge/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: string;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <NcImage src={rightImg} />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          BENnefits
        </span>
        <h2 className="font-semibold text-4xl mt-5">Explore cities </h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="Fast" />
            <span className="block text-xl font-semibold">
              Book 
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Contact our agents to book a full package tour in 3 easy steps.
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Easy" />
            <span className="block text-xl font-semibold">
              Hasle free
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              With us you will have your trip planned every step of the way.
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="red" name="Secure" />
            <span className="block text-xl font-semibold">
              Safe travel
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Our guides are trained professionals and will take care of you every step of the way.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
