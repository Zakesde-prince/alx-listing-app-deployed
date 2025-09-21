import Card from "@/components/Card";
import { Property } from "@/interfaces";

const sampleProperty: Property = {
  id: 1,
  title: "Modern Apartment",
  location: "Cape Town",
  description: "A beautiful apartment in the city center.",
  price: 120,
  imageUrl: "/assets/house.png",
};

export default function Landing() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Featured Properties</h1>
      <div className="flex flex-wrap gap-6 justify-center mb-8">
        <Card property={sampleProperty} />
        <Card property={sampleProperty} />
        <Card property={sampleProperty} />
      </div>
    </div>
  );
}
