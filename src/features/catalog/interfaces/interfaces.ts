export interface Category {
    id:number;
    title: string
  }
  
  export interface ItemState {
    title: string;
    price: number;
    images: Array<string>;
    id: number;
    category: number ;
  }