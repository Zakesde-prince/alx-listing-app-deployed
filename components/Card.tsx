// components/Card.tsx
import Image from "next/image";
import React from "react";
import Pill from "./Pill";
import { CardProps } from "@/interfaces";

const STAR_IMAGE = "/assets/star.png";

const Card: React.FC<CardProps> = ({ property }) => {
  return (
    <div className="w-[378px] h-[300px] relative rounded-2xl overflow-hidden shadow-lg">
      <Image
        src={property.image}
        alt={property.title}
        width={378}
        height={300}
        className="object-cover"
      />

      <div className="absolute top-2 left-2">
        <Pill title={property.type} />
      </div>

      <div className="absolute bottom-2 left-2 bg-white rounded-lg px-2 py-1 flex items-center gap-1">
        <Image src={STAR_IMAGE} width={20} height={20} alt="star" />
        <span className="text-sm font-medium">{property.rating}</span>
      </div>
    </div>
  );
};

export default Card;
