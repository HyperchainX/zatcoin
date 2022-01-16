/**
* AppBootstrapper.tsx
* Copyright: Microsoft 2018
*
* Main entry point for the app, common to both native and web.
*/

import * as abi from './abi';
import { DbProvider } from 'nosqlprovider';
import * as RX from 'reactxp';
import * as SyncTasks from 'synctasks';

import NavContextStore from '../stores/NavContextStore';
import PageUrlService from '../services/PageUrlService';
import ResponsiveWidthStore from '../stores/ResponsiveWidthStore';
import RootView from '../views/RootView';
import ServiceManager, { Service } from '../services/ServiceManager';
import ServiceRegistrar from '../services/ServiceRegistrar';
import TodosStore from '../stores/TodosStore';

import LocalDb from './LocalDb';
import DeepLinkConverter from './DeepLinkConverter';
import AppConfig from './AppConfig';
import CurrentUserStore from '../stores/CurrentUserStore';

interface userMoralis {
    username: string;
    email: string;
    createdAt: string;
    sessionToken: string;
    emailVerified: boolean;
    updatedAt: string;
    avatar: string;
    userId: number;
    csbBalance: number;
}
import { Chat } from '../models/IdentityModels';

const Moralis = require('moralis');
const serverUrl = "https://ua5tcnx9qd3m.usemoralis.com:2053/server";
const appId = "NWvZjcWdUyCimboRDaguhLkaBI6xGD68vxIR0fpm";

Moralis.start({ serverUrl, appId });

import getUserLocale from 'get-user-locale';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51JXtokLfVewAaHPMDAbIYdoYIhfxdG8M6FWB4pmVUxN7j5MkXPrztUSK17eSroZGR2OApvpUh9WB1kI63OnaWw5600oXOayr8a');


import { Elements, } from '@stripe/react-stripe-js';
interface Item {
    id: string;
    description: string;
    name: string;
    owner: string;
    ownerEmail: string;
    uri: string;
    forSale: boolean;
    ownerId: number;
    price: number;
    type: string;
}

export default abstract class AppBootstrapper {
    constructor() {
        RX.App.initialize(__DEV__, __DEV__);

        ServiceRegistrar.init();

        // Open the DB and startup any critical services before displaying the UI.
        LocalDb.open(this._getDbProvidersToTry()).then(() => this._startCriticalServices()).then(() => {
            RX.UserInterface.setMainView(this._renderRootView());
            const userLocale = getUserLocale();

            if (userLocale.includes('en')) {
                CurrentUserStore.setLenguage('en')
            } else if (userLocale.includes("es")) {
                CurrentUserStore.setLenguage('es')
            } else if (userLocale.includes("fr")) {
                CurrentUserStore.setLenguage('fr')
            }
            // Convert the initial URL into a navigation context.
            this._getInitialUrl().then(url => {
                if (url) {
                    const context = DeepLinkConverter.getContextFromUrl(url, NavContextStore.isUsingStackNav());
                    if (context) {
                        NavContextStore.setNavContext(context);
                    }
                }
            });
        });
    }

    private _startCriticalServices(): SyncTasks.Promise<void> {
        const servicesToStart: Service[] = [TodosStore];
       
        this.load()

        if (AppConfig.getPlatformType() === 'web') {
            servicesToStart.push(PageUrlService);
        }

        return ServiceManager.ensureStarted(servicesToStart);
    }

    private _renderRootView() {
        return (
            <Elements stripe={stripePromise}>
                <RootView
                    onLayout={this._onLayoutRootView}
                />
            </Elements>



        );
    }
    load = async () => {

        const web3 = await Moralis.Web3.enable();
  //      const cootiesContract = await new web3.eth.Contract(abi.tokenContractAbi, "0x958e030e5937414b8b54e4647fb513e348ed90e5")

      //  let prices = await cootiesContract.methods.getPrice().call()
        const options = {
            address: "0x958e030e5937414b8b54e4647fb513e348ed90e5",
            chain: "bsc",
            exchange: "PancakeSwapv2"
          };

          const price = await Moralis.Web3API.token.getTokenPrice(options);
       console.log("price "+JSON.stringify(price))

  //     console.log("price "+JSON.stringify(tokenMetadata))
       CurrentUserStore.setPrice(parseFloat(price.usdPrice))

       
       const options3 = {
        contractAddress: '0x958e030e5937414b8b54e4647fb513e348ed90e5',
        functionName: "balanceOf",
        abi: abi.tokenContractAbi,
        params: {account:"0x000000000000000000000000000000000000dead"},
      };
      const balanceOf = await Moralis.executeFunction(options3);
  
      const options4 = {
        contractAddress: '0x958e030e5937414b8b54e4647fb513e348ed90e5',
        functionName: "totalSupply",
        abi: abi.tokenContractAbi,
      };
      const totalSupply = await Moralis.executeFunction(options4);
  
      console.log(balanceOf);
console.log("burn "+balanceOf)
CurrentUserStore.setBurn(parseFloat(balanceOf))
CurrentUserStore.setSupply(totalSupply-parseFloat(balanceOf))
const optionsCo = { chain: "bsc", block_number_or_hash: "0" };

// get block content on BSC
const options33 = {
          chain: "bsc",
          date: "2022-01-15T13:09:15+00:00"
};
const date = await Moralis.Web3API.native.getDateToBlock(options33);
const  holders ={
  chainId: 56,
   address: "0x958e030e5937414b8b54e4647fb513e348ed90e5",
   pageSize:10000, 
  startingBlock: "0" ,
      endingBlock:   date.block ,
    }

let covalent=await Moralis.Plugins.covalent.getChangesInTokenHolerBetweenBlockHeights(holders);
console.log("covalent"+JSON.stringify(covalent))

CurrentUserStore.setHolders(covalent.data.items.length)
CurrentUserStore.setTotalSupply(totalSupply)
    }
    loadChats = async (username: string) => {

        const chats = await Moralis.Cloud.run('getAllChatsForUser', { username })
        CurrentUserStore.setChats(chats)

    }
    loadtems = async () => {

        const ownedItems = await Moralis.Cloud.run('getAllItems')
        CurrentUserStore.setAllItems(ownedItems)
    }

    loadUsertems = async () => {

        const ownedItems = await Moralis.Cloud.run('getUserItems')
        CurrentUserStore.setUserItems(ownedItems)
    }
    async onChatCreated2(item: any) {
        var userId1 = CurrentUserStore.getUser()
        var newChat: Chat = {
            id: item.id,
            sender: item.attributes.sender,
            receiver: item.attributes.receiver,
            messages: item.attributes.messages,
            senderId: item.attributes.senderId,
            receiverId: item.attributes.receiverId,

        }
        if (userId1.username == item.attributes.receiver || userId1.username == item.attributes.sender) {

            var count = newChat.messages.length

            CurrentUserStore.setChats([], newChat)
            CurrentUserStore.setMensajes([], newChat.messages[count - 1])
        }

    }

    async onChatCreated(item: any) {
        // var userId1 = CurrentUserStore.getUser()
        var newChat: Chat = {
            id: item.id,
            sender: item.attributes.sender,
            receiver: item.attributes.receiver,
            messages: item.attributes.messages,
            senderId: item.attributes.senderId,
            receiverId: item.attributes.receiverId,

        }
        var count = newChat.messages.length
        if ((newChat.receiverId === CurrentUserStore.getAutores()[1].id && newChat.senderId === CurrentUserStore.getAutores()[0].id) || (newChat.receiverId === CurrentUserStore.getAutores()[0].id && newChat.senderId === CurrentUserStore.getAutores()[1].id)) {

            CurrentUserStore.setMensajes([], newChat.messages[count - 1])
        }


    }
    async subscriptionUser() {
        const query = new Moralis.Query('User');
        let subscription = await query.subscribe()
        subscription.on('update', this.onUserUpdated)
    }

    async onUserUpdated(item: userMoralis) {

        if (item) {
            let username = item.username
            let email = item.email
            let createdAt = item.createdAt
            let sessionToken = item.sessionToken
            let updatedAt = item.updatedAt
            let avatar = item.avatar
            let csbBalance = item.csbBalance
            let objId = item.userId

            CurrentUserStore.setUser(username, email, createdAt, sessionToken, updatedAt, avatar, "","","")
           

        }
    }
    async subscriptionChat() {
        const query = new Moralis.Query('Chat');
        let subscription = await query.subscribe()
        subscription.on('create', this.onChatCreated2)
        subscription.on('update', this.onChatCreated)
    }


    onItemCreated = async (item: any) => {

        var newItem: Item = {
            id: item.id,
            description: item.attributes.description,
            name: item.attributes.name,
            owner: item.attributes.owner,
            ownerEmail: item.attributes.ownerEmail,
            uri: item.attributes.uri,
            price: item.attributes.price,
            type: item.attributes.type,
            forSale: item.attributes.forSale,
            ownerId: item.attributes.ownerId,
        }

        let user = Moralis.User.current()
        if (item.attributes.forSale === true) {

            CurrentUserStore.setAllItems([], newItem);

        } else {
            if (user.get('username') === newItem.owner) {

                CurrentUserStore.setUserItems([], newItem);
            }
        }

    }

    subscriptionItem = async () => {
        const query = new Moralis.Query('Item');
        let subscription = await query.subscribe()
        subscription.on('create', this.onItemCreated)

    }
    loadUserItems = async (username: string) => {

        const params = { owner: username };
        const ownedItems = await Moralis.Cloud.run('getUserItems', params)
        console.log('useritems ajeasd ' + ownedItems)
        CurrentUserStore.setUserItems(ownedItems)

    }

    private _onLayoutRootView = (e: RX.Types.ViewOnLayoutEvent) => {
        const { width, height } = e;


        if (width <= 1180) {
            CurrentUserStore.setSideMenu(false)

        }
        ResponsiveWidthStore.putWindowSize(width, height);
    };

    // Subclasses must override.
    protected abstract _getDbProvidersToTry(): DbProvider[];
    protected abstract _getInitialUrl(): SyncTasks.Promise<string | undefined>;
}
