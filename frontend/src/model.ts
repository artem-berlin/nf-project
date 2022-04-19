
export interface Product {
    id: number
category: string;
description: string;
image: string;
price: number;
title: string;
amount: number;
}
export enum State {
    Available = 'Available',
    NotAvailable = 'NotAvailable'
}

