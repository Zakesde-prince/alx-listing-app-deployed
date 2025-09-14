import ReviewSection from "./ReviewSection";

interface Property {
  id: number;
  title: string;
  location: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface Props {
  property: Property;
}

export default function PropertyDetail({ property }: Props) {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-96 object-cover rounded"
      />
      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-500">{property.location}</p>
      <p className="mt-4">{property.description}</p>
      <p className="text-blue-600 font-semibold mt-2">${property.price}/night</p>

      {/* Add Reviews */}
      <ReviewSection propertyId={property.id} />
    </div>
  );
}
