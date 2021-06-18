export type Url = {
    name:string,
    url:string
}

export class Tool {
    id:number;
    name:string;
    png:string;
    webp:string;
    tags:string[];
    oficialPage:Url;
    tutorialsPages:Url[];
    analisisPages:Url[];

    constructor (){
        this.tags = [];
        this.tutorialsPages = [];
        this.analisisPages = [];
    }
}