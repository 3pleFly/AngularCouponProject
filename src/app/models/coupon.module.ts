export interface Coupon {
  id: number;
  companyID: number;
  categoryID: number;
  categoryName: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  amount: number;
  price: number;
  image: string;
}
