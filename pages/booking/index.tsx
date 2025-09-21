// pages/booking/index.tsx
import React, { useState } from "react";
import { BookingFormData } from "@/interfaces";

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    date: "",
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    alert("Booking submitted!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">Booking Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border px-2 py-1 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border px-2 py-1 rounded"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border px-2 py-1 rounded"
        />
        <input
          type="number"
          name="guests"
          placeholder="Guests"
          min={1}
          value={formData.guests}
          onChange={handleChange}
          className="border px-2 py-1 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
