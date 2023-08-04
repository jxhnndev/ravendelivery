export type Product = {
  id: number;
  title: string;
  name?: string;
  slug?: {current: string};
  desc?: string;
  img?: string;
  image?: {asset: {_ref: string} }
  price: string[];
  options?: { title: string; additionalPrice: number }[];
};

export type Products = Product[];

export type SliderContent = {
  _id: string;
  title: string;
  buttonTitle: string;
  image?: {asset: {_ref: string} }
};

export type SliderContents = SliderContent[];