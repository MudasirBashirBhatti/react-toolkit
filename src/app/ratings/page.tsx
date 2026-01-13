"use client";
import GiveRating from "@/components/ratings/GiveRating/GiveRating";
import { FaRegStar, FaStar } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <GiveRating activeStar={<FaStar />} inactiveStar={<FaRegStar />} />
    </div>
  );
};

export default page;
