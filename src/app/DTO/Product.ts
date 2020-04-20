//Q2.
export class Product {
    productId: number;
    productName: String;
    price: number;
    public constructor(
        productId: number,
        productName: String,
        price: number
    ) {
        this.productId=productId;
        this.productName =productName;
        this.price =price;
    }
}