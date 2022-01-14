/**
* IdentityModels.tsx
* Copyright: Microsoft 2018
*
* Type definitions for user identities.
*/
export interface userMoralis {
  username: string;
  email: string;
  createdAt: string;
  emailVerified: boolean;
  updatedAt: string;
  avatar: any;
  ethAddress: string;
}

export interface User {
    id: string;
    bio: string
    email: string
    name: string
    createdAt:string
    updatedAt:string
    emailVerified:boolean;
    photo_1: string
    photo_2: string
    photo_3: string
    token:string
    photo_4: string
    type: string    
    latitud:number
    longitud:number
    plan:string
    Post:Post[]
    Favorite:Favorite[]
}


export interface Burn {
  date: string
  id: string
  number: string
  amount: string
  hash: string
}
 
export interface Post {
    content: string
    id: number
    photo_1: string
    photo_2: string
    photo_3: string
    photo_4: string
    quantity:number
    price: number
    published: boolean
    title: string
    authorId:  number
  }
   
export interface  Favorite {
    id       : number
    photo_1  : string
    name     : string
    follower : string
    bio      : string
    userId   : number
  }
  
export interface  Guardado {
  id       : number
  photo_1  : string
  title     : string
  follower : string
  content      : string
  userId   : number
}
export interface  Message {
  id:string,
  authorId: number,
  message: string,
  createdOn: Date,
  isSend: boolean,
}
export interface  Chat {
  id       : string
  receiver: string
  sender  : string
  senderId:number
  receiverId:number
  messages : any[]
}
