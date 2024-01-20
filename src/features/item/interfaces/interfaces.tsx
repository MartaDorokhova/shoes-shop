export interface ItemResponse {
  title: string;
  sku: string;
  price: number;
  oldPrice: number;
  images: Array<string>;
  id: number;
  category: number;
  manufacturer: string;
  color: string;
  material: string;
  season: string;
  heelSize: string;
  reason: string;
  sizes: Size[];
}

interface Size {
  size: string;
  available: boolean;
}
