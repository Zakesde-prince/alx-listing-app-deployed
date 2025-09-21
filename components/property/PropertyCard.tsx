interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
}

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{property.title}</h2>
      <p className="text-gray-500">{property.location}</p>
      <p className="text-blue-600 font-semibold">${property.price}/night</p>
    </div>
  );
}
