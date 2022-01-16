/**
* CurrentUserStore.tsx
* Copyright: Microsoft 2018
*
* Singleton store that maintains information about the currently-signed-in user.
*/

import {  Message } from 'react-bell-chat'

import { autoSubscribe, AutoSubscribeStore, StoreBase } from 'resub';
interface Autor{
    id: number,
    name: string,
    isTyping: boolean,
    lastSeenMessageId: number,
    bgImageUrl: string
  }
interface Item{
    id:string;
    description:string;
    name:string;
    owner:string;
    ownerEmail:string;
    ownerId:number;
    uri:string;
    price:number;
    type:string;
    forSale:boolean;
}

const stripe = require("stripe")("pk_test_51JXtokLfVewAaHPMDAbIYdoYIhfxdG8M6FWB4pmVUxN7j5MkXPrztUSK17eSroZGR2OApvpUh9WB1kI63OnaWw5600oXOayr8a");

@AutoSubscribeStore
export class CurrentUserStore extends StoreBase {
    // TODO - properly initialize
    private _sideMenu = false

    private _error = ''
    private _username = ''
    private _isConnect = false
    private _isRegister = false
    private _users: IdentityModels.User[] = []  
    private _userMoralis: IdentityModels.userMoralis = {
        createdAt: '',
        updatedAt: '',
        zatcoin:0,
        emailVerified: false,
        email: '',
        username: '',
        balance: 0,
        ethAddress:'',
        avatar:'',
    }
    private _userAllItems:Item[]=[]
    private _userItems:Item[]=[]
    private _burns:IdentityModels.Burn[]=[{
        date:'2022-1-2',
        id:'1',
        number:'4,103,981',
        amount:'$473.97',
        hash:'0xfbd59ebec179a0b244bd45772a5ee731ab424ba27f7f04ed9b698183b7d7f9d9',
    },
    {
        date:'2022-4-2',
        id:'2',
        number:'4,103,981',
        amount:'$2444.97',
        hash:'0xfbd59ebec179a0b244bd45772a5ee731ab424ba27f7f04ed9b698183b7d7f9d9',
    },{
        date:'2022-3-3',
        id:'3',
        number:'46,103,981',
        amount:'$334.97',
        hash:'0xfbd59ebec179a0b244bd45772a5ee731ab424ba27f7f04ed9b698183b7d7f9d9',
    },{
        date:'2022-4-3',
        id:'4',
        number:'45,103,981',
        amount:'$334.97',
        hash:'0xfbd59ebec179a0b244bd45772a5ee731ab424ba27f7f04ed9b698183b7d7f9d9',
    },{
        date:'2022-5-3',
        id:'5',
        number:'43,103,981',
        amount:'$5345.97',
        hash:'0xfbd59ebec179a0b244bd45772a5ee731ab424ba27f7f04ed9b698183b7d7f9d9',
    },{
        date:'2022-6-3',
        id:'6',
        number:'43,1043,981',
        amount:'$2334.97',
        hash:'0xfbd59ebec179a0b244bd45772a5ee731ab424ba27f7f04ed9b698183b7d7f9d9',
    },{
        date:'2022-7-3',
        id:'7',
        number:'4,1033,981',
        amount:'$3134.97',
        hash:'0xfbd59ebec179a0b244bd45772a5ee731ab424ba27f7f04ed9b698183b7d7f9d9',
    },{
        date:'2022-8-3',
        id:'8',
        number:'4,103,981',
        amount:'$4334.97',
        hash:'0xfbd59ebec179a0b244bd45772a5ee731ab424ba27f7f04ed9b698183b7d7f9d9',
    }]
    private autores:Autor[]=[]
    private _itemId: number = 0
    private _cart: IdentityModels.Post[] = []

private mensajes:Message[]=[]
  
  private chats:IdentityModels.Chat[]=[];
    

  private _isAdmin: boolean = false

  private price: number = 0
  @autoSubscribe
  getPrice(): number {
      return this.price
  }
  @autoSubscribe
  getisAdmin(): boolean {
      return this._isAdmin
  }
  setIsAdmin(user: boolean) {
      this._isAdmin = user
      this.trigger();

  }
  
  private supply: number = 0
  private holders: number = 0
  @autoSubscribe
  getHolders(): number {
      return this.holders
  }
  setHolders(price: number) {
      
   

    this.holders = price

  this.trigger()
  }
  private totalsupply: number = 0
  @autoSubscribe
  getTotalSupply(): number {
      return this.totalsupply
  }
  setTotalSupply(price: number) {
      
   

    this.totalsupply = price

  this.trigger()
  }
  private burn: number = 0
  @autoSubscribe
  getSupply(): number {
      return this.supply
  }
  setSupply(price: number) {
      
   

    this.supply = price

  this.trigger()
  }
  @autoSubscribe
  getBurn(): number {
      return this.burn
  }
  setBurn(price: number) {
      
   

    this.burn = price

  this.trigger()
  }
  setPrice(price: number) {
      
   

        this.price = price
    
      this.trigger()
      }
  setChats(chats: IdentityModels.Chat[],chat?:IdentityModels.Chat ) {
      
    if(chat){
        this.chats.push(chat)
    } else {

        this.chats = chats
    }
      this.trigger()
      }

  @autoSubscribe
  getUserChat() {
      
      return this.chats
  } 
  
private ownerId:number=0
setOwnerId(sender:number) {
  this.ownerId=sender
  this.trigger()
}

@autoSubscribe
getOwnerId() {

    return this.ownerId
}
private owner:string=''
setOwner(sender:string) {
  this.owner=sender
  this.trigger()
}

@autoSubscribe
getOwner() {

    return this.owner
}

private username:string=''
  setUsername(receiver:string) {
    this.username=receiver
    this.trigger()
}

  @autoSubscribe
  getReceiver() {

      return this.username
  }

  setMensajes(len: Message[],item?:Message) {
    if(item){
        this.mensajes.push(item)
    } else {

        this.mensajes = len
    }
    this.trigger()
}

setAutores(autor:Autor[]) {
    this.autores=autor
    this.trigger()
}
  @autoSubscribe
  getMensajes() {

      return this.mensajes
  }
 async paymentIntent(){

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1200, // Specify amount here
        currency: "usd" // Specify currency here
      });
        return  paymentIntent  
  }
  @autoSubscribe
  getAutores() {

      return this.autores
  }
    private activeId: string = 'all'
    @autoSubscribe
    getActive() {

        return this.activeId
    }

    setActive(password: string) {
        this.activeId = password
        this.trigger()
    }
    private navId: string = '1'
    @autoSubscribe
    getNavId() {

        return this.navId
    }

    setNavId(password: string) {
        this.navId = password
        this.trigger()
    }
    private _extension: string = ''
    @autoSubscribe
    getExtension() {

        return this._extension
    }
    

    setAllItems(len: [],item?:Item) {
        if(item){
            this._userAllItems.push(item)
        } else {

            this._userAllItems = len
        }
        this.trigger()
    }
    @autoSubscribe
    getAllItems(): Item[] {
        return this._userAllItems
    }
    setUserItems(len: [],item?:Item) { 
        if(item){
        this._userItems.push(item)
        } else {

            this._userItems = len
        }
        
        this.trigger()
    }
    setBurns(len: [],item?:IdentityModels.Burn) { 
        if(item){
        this._burns.push(item)
        } else {

            this._burns = len
        }
        
        this.trigger()
    }
    @autoSubscribe
    getBurns(): IdentityModels.Burn[] {
        return this._burns
    }
    @autoSubscribe
    getUserItems(): Item[] {
        return this._userItems
    }

    private _lenguage: string = 'en'

    setLenguage(len: string) {
        this._lenguage = len
        this.trigger()
    }
    @autoSubscribe
    getLenguage(): string {
        return this._lenguage
    }

    @autoSubscribe
    getTodoById(todoId: string){ 
         return _.find(this._userItems, todo => todo.id === todoId);
    }
    @autoSubscribe
    getTodoById2(todoId: string) {
        return _.find(this._userAllItems, todo => todo.id === todoId);
    }

    setExtension(password: string) {
        this._extension = password
        this.trigger()
    }
    @autoSubscribe
    getIsConnect(): boolean {
        return this._isConnect
    }

    setIsConnect(side: boolean) {
        this._isConnect = side
        this.trigger();

    }
    @autoSubscribe
    getSideMenu(): boolean {
        return this._sideMenu
    }


    setRegister(side: boolean) {
        this._isRegister = side
        this.trigger();
    }

    private messages:any[]=[]
    setMessage(messages: any[] ) {
        this.messages=messages
        this.trigger()
        }
        @autoSubscribe
        getMessages() {
        
        return this.messages
        }  
    private chatId:string=''
    setChatId(chat:string){
        this.chatId=chat
        this.trigger()
    }
    @autoSubscribe
    getChatId() {

    return this.chatId
    }  
    @autoSubscribe
    getRegister(): boolean {
        return this._isRegister
    }

    setSideMenu(side: boolean) {
        this._sideMenu = side
        this.trigger();

    }
    setConnect(is: boolean) {
        this._isConnect = is
        this.trigger()
    }

    setError(side: string) {
        this._error = side
        this.trigger();

    }

    @autoSubscribe
    getUser(): IdentityModels.userMoralis {
        return this._userMoralis
    }
    setUser(username:string,email:string,createdAt:string,sessionToken:string,updatedAt:string,avatar:string,ethAddress:string,balance:any,zatcoin:any,) {
       this._userMoralis = {
            createdAt,
            updatedAt,
            emailVerified: false,
            ethAddress,
            email,
            balance,
            username,
            avatar ,
            zatcoin
        };
        console.log(this._userMoralis)
        this.trigger();

    }
    private _isLogin: boolean = false
    @autoSubscribe
    getLogin(): boolean {
        return this._isLogin
    }
    setLogin(user: boolean) {
        this._isLogin = user
        this.trigger();

    }
    @autoSubscribe
    getError(): string {
        return this._error
    }
    setUserName(user: string) {
        this._username = user
        this.trigger();

    }
    @autoSubscribe
    getUserName(): string {
        return this._username
    }

    @autoSubscribe
    getUsers() {

        return this._users
    }


    @autoSubscribe
    getCart() {

        return this._cart
    }
    @autoSubscribe
    getItemId() {
        return this._itemId
    }
}

export default new CurrentUserStore();
/**
* CurrentUserStore.tsx
* Copyright: Microsoft 2018
*
* Singleton store that maintains information about the currently-signed-in user.
*/


import * as _ from 'lodash';
import * as IdentityModels from '../models/IdentityModels';
