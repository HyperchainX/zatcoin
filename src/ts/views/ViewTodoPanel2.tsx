/**
* ViewTodoPanel.tsx
* Copyright: Microsoft 2017
*
* The Todo item edit view.
*/

import * as RX from 'reactxp';
import { ComponentBase } from 'resub';

import { Colors, Fonts, FontSizes } from '../app/Styles';
import CurrentUserStore from '../stores/CurrentUserStore';

export interface ViewTodoPanelProps extends RX.CommonProps {
    todoId: string;
    isLoad: boolean;
}

interface userMoralis {
    username: string;
    email: string;
    createdAt: string;
    sessionToken: string;
    emailVerified: boolean;
    updatedAt: string;
    avatar: string;
    objectId: string;
    ethAddress: string;
}

interface ViewTodoPanelState {
    image: any;
    title: any;
    user: userMoralis;
    description: any;
    owner: any;
    todo: Market;
}
const _styles = {
    container: RX.Styles.createViewStyle({
        alignSelf: 'stretch',
        justifyContent: 'center',
        flex: 1,
        padding: 20,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'black',
    }),
    todoText: RX.Styles.createTextStyle({
        margin: 3,
        color: "white",
        font: Fonts.displayRegular,
        fontSize: FontSizes.size12,
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
    }),
    buttonContainer: RX.Styles.createViewStyle({
        margin: 8,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }),
    label: RX.Styles.createTextStyle({
        font: Fonts.displayLight,
        fontSize: FontSizes.size12,
        color: Colors.menuText,
    })
};



import { RiStore2Line } from "@react-icons/all-files/ri/RiStore2Line";


const Moralis = require('moralis');
const serverUrl = "https://22ngrkoobfze.usemoralis.com:2053/server";
const appId = "2LLQ1R7nsajdw124wShzAv0LvR0HsAKxnpfHxga9";

Moralis.start({ serverUrl, appId });


import * as UI from '@sproutch/ui';
import * as abi from './abi';
import { Market } from '../models/TodoModels';
import TodosStore from '../stores/TodosStore';
const MARKETPLACE_CONTRACT_ADDRESS = '0xD34049d6a64E4d2Ce04AE44240126A3C5E37e9c8'
export default class ViewTodoPanel2 extends ComponentBase<ViewTodoPanelProps, ViewTodoPanelState> {
    image = ''
    title = ''
    owner = ''
    description = ''
    protected _buildState(props: ViewTodoPanelProps, initState: boolean): Partial<ViewTodoPanelState> {



        const newState: Partial<ViewTodoPanelState> = {
            todo: CurrentUserStore.getMarketByIdPolygon(props.todoId),
            title: '',
            owner: '',
            description: '',
            user: CurrentUserStore.getUser(),
        };


        return newState;


    }
    volume = 0
    isPlaying = false

    handlePlay = () => {
        this.isPlaying = true
    };

    buyItem = async (item: Market) => {


    };

    handlePause = () => {

        this.isPlaying = true
    };

    handleVolume(value: any) {
        this.volume = value
    };

    render() {



        return (
            <RX.View style={_styles.container}>


                <RX.Image style={{ width: 428, height: 250, }} resizeMethod={'resize'} resizeMode={'contain'}
                    source={this.state.todo?.tokenImg} />


                <RX.View style={{ flex: 1, marginLeft: 20, justifyContent: 'center', alignItems: 'center', }}>

                    <RX.Text style={_styles.todoText}>
                        {this.state.todo ? "Market ID: " + this.state.todo?.uid : ''}
                    </RX.Text>
                    <RX.Text style={_styles.todoText}>
                        {this.state.todo ? "Seller Username: " + this.state.todo?.sellerUsername : ''}
                    </RX.Text>
                    <RX.Text style={_styles.todoText}>
                        {this.state.todo ? "Owner Address: " + this.state.todo?.ownerOf : ''}
                    </RX.Text>

                    <RX.Text style={_styles.todoText}>
                        {this.state.todo ? "Cootie ID: " + this.state.todo?.tokenId : ''}
                    </RX.Text>
                    <RX.Text style={_styles.todoText}>
                        {this.state.todo ? "Token Address " + this.state.todo?.tokenAddress : ''}
                    </RX.Text>

                    <RX.Text style={_styles.todoText}>
                        {this.state.todo ? "Symbol " + this.state.todo?.symbol : ''}
                    </RX.Text>


                    <RX.Text style={_styles.todoText}>
                        {this.state.todo ? "Name: " + this.state.todo.title : ''}
                    </RX.Text>

                    <RX.Text style={_styles.todoText}>
                        {this.state.todo ? "Description: " + this.state.todo.description : ''}
                    </RX.Text>



                    <RX.Text style={_styles.todoText}>
                        {this.state.todo ? "Price: " + Moralis.Units.FromWei(this.state.todo?.askingPrice) + " Matic" : ''}
                    </RX.Text>

                    {this.state.todo?.ownerOf === this.state.user.ethAddress ? null :
                        <RX.View style={_styles.buttonContainer}>
                            {this.props.isLoad === true ? <UI.Spinner color={'white'} /> :
                                this.state.todo.status === "pending" ?
                                    <RX.Text style={_styles.todoText}>
                                        {"Waiting for confirmation"}
                                    </RX.Text> : <UI.Button onPress={this._onPressTodo2} iconSlot={iconStyle => (
                                        <RiStore2Line color={'#FF296D'} style={{ marginTop: 20, alignSelf: 'center', marginRight: 5, width: 25, height: 25 }} />
                                    )} style={{ content: [{ width: 140, borderRadius: 11, }], label: _styles.label }
                                    } elevation={4} variant={"outlined"} label={"Buy For: " + Moralis.Units.FromWei(this.state.todo?.askingPrice) + " Matic"} />

                            }

                        </RX.View>
                    }
                    {this.state.todo?.ownerOf !== this.state.user.ethAddress ? null :
                        <RX.View style={_styles.buttonContainer}>
                            {this.props.isLoad === true ? <UI.Spinner color={'white'} /> :
                                <UI.Button onPress={this.removeFromMarket} iconSlot={iconStyle => (
                                    <RiStore2Line color={'#FF296D'} style={{ marginTop: 20, alignSelf: 'center', marginRight: 5, width: 25, height: 25 }} />
                                )} style={{ content: [{ width: 140, borderRadius: 11, }], label: _styles.label }
                                } elevation={4} variant={"outlined"} label={"Remove from Market"} />

                            }

                        </RX.View>
                    }
                </RX.View>
            </RX.View >
        );
    }
    removeFromMarket = async () => {

        TodosStore.setLoadingRemove(true)
        await Moralis.Web3.enableWeb3();
        const user = await Moralis.User.current();
        console.log(user)
        if (user) {
            const web3 = await Moralis.Web3.enable();

            const sender = user.get('ethAddress')
            const marketplaceContract = await new web3.eth.Contract(abi.marketplaceContractAbi, MARKETPLACE_CONTRACT_ADDRESS)

            await marketplaceContract.methods.removeItem(this.state.todo?.uid).send({ from: sender })
                .on('receipt', async (receipt: any) => {
                    console.log('receipt:', receipt)
                    // do stuff here when tx has been confirmed
                })
                .on('error', (err) => {
                    console.log('error removing nft:', err)
                    // do stuff with error
                })
        }
        TodosStore.setLoadingRemove(false)

    }

    private _onPressTodo2 = async (e: RX.Types.SyntheticEvent) => {
        e.stopPropagation();
        TodosStore.setLoadingRemove(true)
        const user = await Moralis.User.current();
        console.log(user)
        if (user) {
            const web3 = await Moralis.Web3.enable();
            const marketplaceContract = await new web3.eth.Contract(abi.marketplaceContractAbi, MARKETPLACE_CONTRACT_ADDRESS)

            try {

                await marketplaceContract.methods.buyItem(this.state.todo?.uid).send({ from: user.get('ethAddress'), value: this.state.todo?.askingPrice })
                let newItem: Market = {
                    uid: this.state.todo.uid,
                    tokenId: this.state.todo.tokenId,
                    tokenAddress: this.state.todo.tokenAddress,
                    askingPrice: this.state.todo.askingPrice,
                    symbol: this.state.todo.symbol,
                    tokenImg: this.state.todo.tokenImg,
                    title: this.state.todo.title,
                    description: this.state.todo.description,
                    tokenUri: this.state.todo.tokenUri,
                    sellerUsername: this.state.todo.sellerUsername,
                    tokenObjectId: this.state.todo.tokenObjectId,
                    ownerOf: this.state.todo.ownerOf,
                    status: "pending",
                }


                CurrentUserStore.updateCootieMarketPolygon(newItem)

            } catch {
                TodosStore.setLoadingRemove(false)
            }

        } else {
            TodosStore.setLoadingRemove(false)
            return
        }

    };

}
