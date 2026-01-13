"use client";
import GiveRating from "@/components/ratings/GiveRating/GiveRating";
import PreviewRating from "@/components/ratings/PreviewRating/PreviewRating";
import { FaRegStar, FaStar } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <GiveRating activeStar={<FaStar />} inactiveStar={<FaRegStar />} />
      <PreviewRating rating={3.5} svg={<FaRegStar />} size={14} />
    </div>
  );
};

export default page;
