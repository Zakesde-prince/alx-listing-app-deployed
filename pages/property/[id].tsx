// pages/property/[id].tsx
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import api from "@/lib/api";
import PropertyDetail from "@/components/property/PropertyDetail";
import { Property } from "@/interfaces";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await api.get(`/properties/${id}`);
        setProperty(response.data);
      } catch (err) {
        setError("Failed to fetch property details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading property details...</p>;
  if (error) return <p>{error}</p>;
  if (!property) return <p>Property not found</p>;

  return <PropertyDetail property={property} />;
}
