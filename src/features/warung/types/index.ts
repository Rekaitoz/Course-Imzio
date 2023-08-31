export interface WarungProps {
  id: number;
  name: string;
  account: string;
  limit: string;
  product: {
    code: string;
    productName: string;
    price: number;
    unit: string;
  }[];
}
