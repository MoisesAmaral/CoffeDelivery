export interface Product {
    [key: string]: any;
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    category2: string;
    category3: string;
}

export interface Stock{
    id: number;
    name: string;
}