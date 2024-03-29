export interface movie{
    Title:string;
    Year:string;
    Rated:string;
    Released:string;
    Runtime:string;
    Genre:string[];
    Director:string;
    Writer:string[];
    Actors:string[];
    Plot:string;
    Language:string;
    Country:string;
    Awards:string;
    Poster:string;
    Ratings:rating[];
    imdbVotes:number;
    imdbID:string;
    Type:string;
    DVD:string;
    BoxOffice:string;
    Production?:string;
    Website?:string;
}

export interface rating {
    source:String;
    value:String;
}

export interface search {
    Search:movie[],
    totalResults:number,
    Response: boolean
}