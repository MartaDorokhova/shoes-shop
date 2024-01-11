export interface CategoryListResponse {
    id:number;
    title: string
  }
  
  export interface ItemListResponse {
    title: string;
    price: number;
    images: Array<string>;
    id: number;
    category: number ;
  }