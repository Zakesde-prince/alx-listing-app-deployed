// pages/landing.tsx
import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">Landing Page</h1>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-6 justify-center mb-8">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col gap-4 items-center">
        <Button title="Small Rounded" styles="rounded-sm px-4 py-2 bg-blue-500 text-white" />
        <Button title="Medium Rounded" styles="rounded-md px-5 py-2 bg-green-500 text-white" />
        <Button title="Large Rounded" styles="rounded-lg px-5 py-2 bg-yellow-500 text-black" />
        <Button title="Full Rounded" styles="rounded-full px-6 py-3 bg-red-500 text-white" />
      </div>
    </main>
  );
};

export default Landing;
