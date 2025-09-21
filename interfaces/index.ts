// interfaces/index.ts

export interface PillProps {
  title: string;
}

export interface ButtonProps {
  title: string;
  styles?: string;
  onClick?: () => void;
}

export interface Property {
  id: number;
  title: string;
  image: string;
  rating: number;
  type: string;
  price: number;
}

export interface CardProps {
  property: Property;
}

export interface BookingFormData {
  name: string;
  email: string;
  date: string;
  guests: number;
}
