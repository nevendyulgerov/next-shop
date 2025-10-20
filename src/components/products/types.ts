export interface ProductModel {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensionsModel;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  images: string[];
  thumbnail: string;
  reviews: ProductReviewModel[];
  returnPolicy: string;
  minimumOrderQuantity: string;
  meta: ProductMetaModel;
}

export interface ProductWithQuantityModel extends ProductModel {
  quantity: number;
}

export interface ProductMetaModel {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface ProductReviewModel {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductDimensionsModel {
  width: number;
  height: number;
  depth: number;
}
