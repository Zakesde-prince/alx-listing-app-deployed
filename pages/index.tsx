// pages/index.tsx
import React from "react";
import Card from "@/components/Card";
import { Property } from "@/interfaces";

const properties: Property[] = [
  {
    id: 1,
    title: "Modern Apartment",
    image: "/assets/house.png",
    rating: 4.9,
    type: "Self-catering",
    price: 150,
  },
  {
    id: 2,
    title: "Cozy Cottage",
    image: "/assets/house.png",
    rating: 4.8,
    type: "Self-catering",
    price: 120,
  },
];

const Home: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {properties.map((property) => (
        <Card key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Home;
