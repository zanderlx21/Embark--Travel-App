import { ObjectId } from "mongodb";

export interface Business {
    _id?: ObjectId,
    name: string,
    image_url: string, 
    review_count: number,
    rating: number,
    price: string,
    is_closed: boolean,
    location: [
        {display_address: string}
    ]
    display_phone: string,
    url: string
}