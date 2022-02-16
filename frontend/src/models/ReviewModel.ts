
export interface Reviews {
    reviews: ReviewModel[];
}
export interface ReviewModel {
        rating: number;
        text: string;
        time_created: string;
        url: string
        user: {
            name: string
        }
};