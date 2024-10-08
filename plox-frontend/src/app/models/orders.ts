import { Timestamp } from "rxjs";

export class Orders {
    orderId: number;
    userId: number;
    products: string;
    quantity: number;
    orderDate: Date;
    createdAt: Date;
    updatedAt: Date;
}