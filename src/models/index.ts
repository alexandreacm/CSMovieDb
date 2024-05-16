type BaseResponseType = {
    status: string;
    message: string;
}

export interface IMovie extends BaseResponseType {
    Title: string;
    Year: number;
    imdbID: string;
    Type: string;
    Poster: string;
}

export type Rating = {
    average: number
}
export interface IResponseMovie extends BaseResponseType {
    Search: IMovie[]
}