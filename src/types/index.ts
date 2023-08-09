export type Asset = {
  _ref: string
};

export type GalleryItemType = {
  _key: string;
  _type: string;
  asset: Asset;
}

export type Gallery = {
  display: string;
  images: [
    GalleryItemType
  ];
  zoom: boolean
};

export type ImageType = {
  id?: string;
  asset: Asset
};

export type Product = {
  _id: string;
  name: string;
  slug: {current: string};
  image: ImageType
  mainPrice: number;
  priceOptions?: { title: string; additionalPrice: number }[];
  featured: boolean;
  details: string;
  gallery?: Gallery;
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