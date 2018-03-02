export interface Customer{
    "address": string,
    "city": string,
    "contactName": string,
    "email": string,
    "logo": string,
    "name": string,
    "phone": string,
    "rating": number,
    "state": string,
    "zipcode": string,
}

export interface CustomerPanel{
    customer: Customer;
    expanded: boolean;
}