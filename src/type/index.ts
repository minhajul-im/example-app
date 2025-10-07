export interface UserType {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductType {
  id: number;
  name: string;
  thumbnail_image: string;
  has_discount: boolean;
  stroked_price: string;
  main_price: string;
  rating: number;
  sales: number;
  links: {
    details: string;
  };
}
