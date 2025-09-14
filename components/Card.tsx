import Image from "next/image"
import React from "react"
import Pill from "./Pill"

const HOUSE_IMAGE = "/assets/house.png"
const STAR_IMAGE = "/assets/star.png"

const Card: React.FC = () => {
  return (
    <div className="w-[378.56px] h-[299.37px] relative">
      <Image
        src={HOUSE_IMAGE}
        width={378.56}
        height={299.37}
        alt="house image"
        className="rounded-2xl object-cover"
      />

      <div className="absolute top-2 left-2">
        <Pill label="Self-catering" />
      </div>

      <div className="absolute bottom-2 left-2 bg-white rounded-lg px-2 py-1 flex items-center gap-1">
        <Image
          src={STAR_IMAGE}
          width={20}
          height={20}
          alt="star"
        />
        <span className="text-sm font-medium">4.9</span>
      </div>
    </div>
  )
}

export default Card
