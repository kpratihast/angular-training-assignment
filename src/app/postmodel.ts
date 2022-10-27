export class Post{
    id:number
    title:string
    content:string
    publishedOn:string
    author:string
    cookingTime:string
    isVeg:boolean
}

export class Admin {
    username: string
    password: string
}

export class HashObject {
    Digest: string
    DigestEnc: string
    Type: string
    Key: string
}