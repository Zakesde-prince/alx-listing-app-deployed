import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

interface Props {
  propertyId: number | string;
}

export default function ReviewSection({ propertyId }: Props) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`); // Replace with actual API URL
        setReviews(response.data);
      } catch (err) {
        setError("Failed to fetch reviews.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="text-red-600">{error}</p>;
  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-xl font-bold mb-2">Reviews</h2>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border p-4 rounded shadow-sm hover:shadow-md"
        >
          <p className="font-semibold">{review.author}</p>
          <p className="text-yellow-500">Rating: {review.rating}/5</p>
          <p className="mt-1">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
