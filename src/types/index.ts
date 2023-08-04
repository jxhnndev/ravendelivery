export type Product = {
  id?: number;
  _id?: string;
  title?: string;
  name?: string;
  slug?: {current: string};
  desc?: string;
  img?: string;
  image?: {asset: {_ref: string} }
  price: number;
  mainPrice?: number;
  options?: { title: string; additionalPrice: number }[];
  priceOptions?: { title: string; additionalPrice: number }[];
  featured?: boolean;
  details?: string
};

export type Products = Product[];

export type SliderContent = {
  _id: string;
  title: string;
  buttonTitle: string;
  image?: {asset: {_ref: string} }
};

export type SliderContents = SliderContent[];

export type Item = {
  _id: string;
  allergens: any;
  categories: any;
  details: string;
  featured?: boolean;
  image?: {asset: {_ref: string} };
  price: number[];
  menuPrice: number[];
  name: string;
  slug?: {current: string};
};

export type Items = Item[];

export type OfferType = {
  _id: string;
  title: string;
  description: string;
  image?: {asset: {_ref: string} };
  buttonTitle: string;
  endDate: string;
}