
export interface YelpModel {
    businesses: Business[],
}

export interface Business {
        name: string,
        url: string, 
        review_count: number,
        rating: number,
        price: string,
        is_closed: boolean,
        location: [
            {display_address: string}
        ]
        display_phone: string
}