export type BookType = {
    id: number,
    title: string,
    image: string,
    authors: AuthorType[];
    rating: RatingType;
}
export type AuthorType = {
    id: number;
    name: string;
};

export type RatingType = {
    average: number;
};