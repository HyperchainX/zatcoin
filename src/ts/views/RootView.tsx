/*
* RootView.tsx
* Copyright: Microsoft 2018
*
* Top-level UI for the TodoList sample app.
*/

import * as assert from 'assert';

import * as _ from 'lodash';
import * as RX from 'reactxp';
import Navigator, { Types as NavTypes } from 'reactxp-navigation';
import { ComponentBase } from 'resub';

import NavContextStore from '../stores/NavContextStore';
import * as NavModels from '../models/NavModels';
import { Colors, Fonts } from '../app/Styles';

import { PartnerHook } from './PartnerHook';
import CreateTodoPanel from './CreateTodoPanel';
import TodoCompositeView from './TodoCompositeView';
import TodoListPanel from './TodoListPanel';
import TopBarComposite from './TopBarComposite';
import TopBarStack from './TopBarStack';
import ViewTodoPanel from './ViewTodoPanel';
import CurrentUserStore from '../stores/CurrentUserStore';
import { HomeHook } from './HomeHook';

interface RootViewProps extends RX.CommonProps {
    onLayout?: (e: RX.Types.ViewOnLayoutEvent) => void;
}

interface RootViewState {
    entries: Entries[];
    viewTitle: string;
    isStackNav: boolean;
    isConnected:boolean;
    width: number;
    isConnect: boolean;
    lenguage: string
    isSideMenu: boolean;
    burn:any;
    totalSupply:number;
    supply:any;
    owner: string;
    showSideMenu:boolean;
    price:number;
    ownerId: number;
    username: string;
    isLogin: boolean;
    user: any;
    mensajes: any;
    autores: any;
    navContext: NavModels.RootNavContext;
}

const _styles = {
    root: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch',
    }),
    stackViewBackground: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: Colors.white,
    }),    
  titleStylefoot: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 16,
    color: '#6C757D',
    alignSelf: 'center'
  }),
};


interface Entries {
    img: string;
    imgText: string;
    title: string;
    content: string;
}

import ImageSource from 'modules/images';
import ResponsiveWidthStore from '../stores/ResponsiveWidthStore';
import { AboutHook } from './AboutHook';
import { InvolveHook } from './InvolveHook';


const Moralis = require('moralis');
const serverUrl = "https://ua5tcnx9qd3m.usemoralis.com:2053/server";
const appId = "NWvZjcWdUyCimboRDaguhLkaBI6xGD68vxIR0fpm";

Moralis.start({ serverUrl, appId });


import { ChatHook } from './ChatHook';
import { RoadHook } from './RoadHook';
import { DocsHook } from './DocsHook';
import ChatPanel from './ChatPanel';
import { RechargeHook } from './RechargeHook';
import { StripeHook } from './StripeHook';
export default class RootView extends ComponentBase<RootViewProps, RootViewState> {
    private _navigator: Navigator | null = null;

    protected _buildState(props: RootViewProps, initState: boolean): Partial<RootViewState> | undefined {
        const newNavContext = NavContextStore.getNavContext();
        const partialState: Partial<RootViewState> = {
            viewTitle: this._getViewTitle(newNavContext),
            isSideMenu: CurrentUserStore.getSideMenu(),
            navContext: newNavContext,
            user: CurrentUserStore.getUser(),
            mensajes: CurrentUserStore.getMensajes(),
            autores: CurrentUserStore.getAutores(),
            isConnected:CurrentUserStore.getIsConnect(),
            lenguage: CurrentUserStore.getLenguage(),
            owner: CurrentUserStore.getOwner(),
            ownerId: CurrentUserStore.getOwnerId(),
            showSideMenu: CurrentUserStore.getSideMenu(),
            isLogin: CurrentUserStore.getLogin(),
            username: CurrentUserStore.getUserName(),
            totalSupply: CurrentUserStore.getTotalSupply(),
            width: ResponsiveWidthStore.getWidth(),
            burn: CurrentUserStore.getBurn(),
            supply: CurrentUserStore.getSupply(),
            price: CurrentUserStore.getPrice(),
            isStackNav: newNavContext.isStackNav,
            entries: [
                {
                    img: ImageSource.caru1,
                    imgText: 'Visual Media Market',
                    title: " Llegue a ser miembro de la comunidad Cultural Spaces Booking",
                    content: 'Busca entre los negocios afiliados tu favorito'
                },
                {
                    img: ImageSource.caru2,
                    imgText: 'Este puede ser el negocio para ti',
                    title: " Apoya y sigue tu creador favorito",
                    content: 'Descubre el producto que quieras y realiza tu pedido'
                },
                {
                    img: ImageSource.caru3,
                    imgText: 'Este puede ser el negocio para ti',
                    title: "Afíliate y valoriza tu pasión",
                    content: 'La orden te sera entregada rapidamente y a disfrutar!'
                },
            ]
        };

        if (newNavContext.isStackNav) {
            if (this._navigator) {
                const newNavStack = newNavContext as NavModels.StackRootNavContext;
                let mustResetRouteStack = true;

                if (this.state.navContext && this.state.navContext.isStackNav) {
                    const prevNavStack = this.state.navContext as NavModels.StackRootNavContext;

                    if (newNavStack.stack.length === prevNavStack.stack.length + 1) {
                        if (this._compareNavStack(newNavStack.stack, prevNavStack.stack, prevNavStack.stack.length)) {
                            this._navigator.push(this._createNavigatorRoute(newNavStack.stack[newNavStack.stack.length - 1].viewId));
                            mustResetRouteStack = false;
                        }
                    } else if (newNavStack.stack.length === prevNavStack.stack.length - 1) {
                        if (this._compareNavStack(newNavStack.stack, prevNavStack.stack, newNavStack.stack.length)) {
                            this._navigator.pop();
                            mustResetRouteStack = false;
                        }
                    }
                }

                if (mustResetRouteStack) {
                    this._navigator.immediatelyResetRouteStack(this._createNavigatorRouteStack(newNavStack));
                }
            }
        }
        return partialState;
    }

load = async () => {
    await Moralis.enableWeb3()

    const options = {
        address: "0x958e030e5937414b8b54e4647fb513e348ed90e5",
        chain: "bsc",
        exchange: "PancakeSwapv2"
      };

const options2 = { chain: "bsc", addresses: "0x958e030e5937414b8b54e4647fb513e348ed90e5" };
const tokenMetadata = await Moralis.Web3API.token.getTokenMetadata(options2);
      const price = await Moralis.Web3API.token.getTokenPrice(options);
         CurrentUserStore.setPrice(parseFloat(price.usdPrice))
}
    render(): JSX.Element | null {
        if (this.state.navContext.isStackNav) {
            return (
                <RX.View style={_styles.root} onLayout={this.props.onLayout}>
                    
                    <Navigator
                        ref={this._onMountNavigator}
                        renderScene={this._onRenderScene}
                    />

                </RX.View>
            );
        } else {
            const compositeContext = this.state.navContext as NavModels.CompositeRootNavContext;
            const showBackButton = this._showBackButton(compositeContext.viewId);
            const showSideMenu = this._showSideMenu();
            return (
                <RX.View style={_styles.root} onLayout={this.props.onLayout}>
                     
                        <TopBarComposite showSideMenu={showSideMenu} showBackButton={showBackButton} onBack={this._onBack} width={this.state.width} user={this.state.user} />
                   
                    {this._renderMainView()}
                    <RX.View style={{flexDirection:'row'}}>
                    <RX.View style={{alignSelf:'flex-end',width:this.state.showSideMenu?260:80,height:50,backgroundColor:'#23272B'}}/>
                
                    <RX.View style={{alignSelf:'flex-end',paddingLeft:40,flexDirection:'row',width:this.state.showSideMenu?this.state.width-260:this.state.width-80,height:50,backgroundColor:'#343A40'}}>
                    <RX.View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <RX.Image source={ImageSource.vector15} style={{     marginRight:10,width: 15, height: 15, }} />
             
                   
                    <RX.Text style={[_styles.titleStylefoot, { marginRight: 20,  }]} >
                {"Website"}
              </RX.Text>

              </RX.View>

              <RX.View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <RX.Image source={ImageSource.vector14} style={{     marginRight:10,width: 15, height: 15, }} />
             
               
              <RX.Text style={[_styles.titleStylefoot, { marginRight: 20, }]} >
                {"Telegram"}
              </RX.Text>

              </RX.View>
              
              <RX.View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                    <RX.Image source={ImageSource.vector16} style={{     marginRight:10,width: 15, height: 15, }} />
             
               
         
              <RX.Text style={[_styles.titleStylefoot, {  marginRight: 20, }]} >
                {"Twitter"}
              </RX.Text>
              </RX.View>
                    </RX.View>
                </RX.View>
                </RX.View>
            );
        }
    }
    private _showSideMenu(): boolean {
        return this.state.isSideMenu
    }


    private _showBackButton(viewId: NavModels.NavViewId): boolean {
        return viewId !== NavModels.NavViewId.TodoComposite &&
            viewId !== NavModels.NavViewId.TodoList;
    }
    private _getViewTitle(navContext: NavModels.RootNavContext): string {
        if (navContext.isStackNav) {
            const stackContext = navContext as NavModels.StackRootNavContext;
            const topViewId = stackContext.stack[stackContext.stack.length - 1].viewId;

            switch (topViewId) {
                case NavModels.NavViewId.TodoList:
                    return 'Todo List';

                case NavModels.NavViewId.Home:
                    return 'Home';

                case NavModels.NavViewId.About:
                    return 'About';
                case NavModels.NavViewId.Involve:
                    return 'Get Involved';

                case NavModels.NavViewId.Road:
                    return 'Road Map';
                case NavModels.NavViewId.Partner:
                    return 'Partners';
                case NavModels.NavViewId.NewTodo:
                    return 'New Todo';

                case NavModels.NavViewId.Docs:
                    return 'Documentacion';
                case NavModels.NavViewId.ViewTodo:
                    return 'Todo Details';
                case NavModels.NavViewId.Recharge:
                    return 'Recharge';

                case NavModels.NavViewId.Stripe:
                    return 'Stripe';
                case NavModels.NavViewId.Terms:
                    return 'Terms';
                case NavModels.NavViewId.Chat:
                    return 'Chat';
                case NavModels.NavViewId.Chats:
                    return 'Chats';
                default:
                    assert.fail('Unknown view');
                    return '';
            }
        } else {
            return '';
        }
    }

    private _onMountNavigator = (elem: any) => {
        this._navigator = elem;

        if (this._navigator) {
            this._navigator.immediatelyResetRouteStack(this._createNavigatorRouteStack(
                this.state.navContext as NavModels.StackRootNavContext));
        }
    };

    private _onRenderScene = (navigatorRoute: NavTypes.NavigatorRoute): JSX.Element | null => {
        const viewId = navigatorRoute.routeId as NavModels.NavViewId;
        const showBackButton = this._showBackButton(viewId);

        return (
            <RX.View style={_styles.stackViewBackground}>
                <TopBarStack
                    len={this.state.lenguage} user={this.state.user}
                    title={this.state.viewTitle}
                    showBackButton={showBackButton}
                    onBack={this._onBack}
                    width={this.state.width}
                    onSelect={this._onSelectTodoFromList}
                />
                {this._renderSceneContents(viewId)}
            </RX.View>
        );
    };

    private _renderSceneContents(viewId: NavModels.NavViewId) {
        switch (viewId) {
            case NavModels.NavViewId.TodoList:
                return (
                    <TodoListPanel
                        len={this.state.lenguage}
                        user={this.state.user}
                        onSelect={this._onSelectTodoFromList}
                        onCreateNew={this._onCreateNewTodo}
                    />
                );
            case NavModels.NavViewId.Docs:
                return <DocsHook isStackNav={this.state.isStackNav} len={this.state.lenguage} />;
            case NavModels.NavViewId.NewTodo:
                return <CreateTodoPanel len={this.state.lenguage} user={this.state.user} />;
            case NavModels.NavViewId.Partner:
                return <PartnerHook isStackNav={this.state.isStackNav} len={this.state.lenguage} />;
            case NavModels.NavViewId.About:
                return <AboutHook user={this.state.user} showSideMenu={this.state.showSideMenu} isConnected={this.state.isConnected}  isLogin={this.state.isLogin}  isStackNav={this.state.isStackNav} len={this.state.lenguage} entries={[]} width={this.state.width} />;
            case NavModels.NavViewId.Involve:
                return <InvolveHook isStackNav={this.state.isStackNav} len={this.state.lenguage} entries={[]} width={this.state.width} />;
            case NavModels.NavViewId.Road:
                return <RoadHook isStackNav={this.state.isStackNav} len={this.state.lenguage} />;
            case NavModels.NavViewId.Partner:
                return <PartnerHook isStackNav={this.state.isStackNav} len={this.state.lenguage} />;
            case NavModels.NavViewId.Chat:
                return <ChatHook isLogin={this.state.isLogin} isStackNav={this.state.isStackNav} ownerId={this.state.ownerId} userId={this.state.user.userId} username={this.state.username} owner={this.state.owner} autores={this.state.autores} mensajes={this.state.mensajes} len={this.state.lenguage} />;
            case NavModels.NavViewId.Recharge:
                return <RechargeHook isStackNav={this.state.isStackNav} len={this.state.lenguage} />;
            case NavModels.NavViewId.Stripe:
                return <StripeHook isLogin={this.state.isLogin} isStackNav={this.state.isStackNav} len={this.state.lenguage} />;
            case NavModels.NavViewId.Chats:
                return <ChatPanel isLogin={this.state.isLogin} ownerId={this.state.ownerId} userId={this.state.user.userId} />;
            case NavModels.NavViewId.Home:
                return <HomeHook  totalSupply={this.state.totalSupply}  burn={this.state.burn}  supply={this.state.supply}  showSideMenu={this.state.showSideMenu} price={this.state.price}  len={this.state.lenguage} width={this.state.width} isStackNav={this.state.isStackNav} entries={this.state.entries} />;
            case NavModels.NavViewId.ViewTodo:
                const viewContext = this._findNavContextForRoute(viewId) as NavModels.ViewTodoViewNavContext;
                if (!viewContext) {
                    return null;
                }
                return <ViewTodoPanel todoId={viewContext.todoId} />;
            default:
                return <HomeHook burn={this.state.burn} totalSupply={this.state.totalSupply}    supply={this.state.supply}  showSideMenu={this.state.showSideMenu} price={this.state.price}  len={this.state.lenguage} width={this.state.width} isStackNav={this.state.isStackNav} entries={this.state.entries} />;
        }
    }

    private _onSelectTodoFromList = (selectedId: string) => {
        NavContextStore.navigateToTodoList(selectedId, false);
    };

    private _onCreateNewTodo = () => {
        NavContextStore.navigateToTodoList(undefined, true);
    };

    private _onBack = () => {
        if (this.state.navContext.isStackNav) {
            NavContextStore.popNavigationStack();
        }
    };

    private _renderMainView(): JSX.Element | null {
        if (this.state.navContext instanceof NavModels.TodoRootNavContext) {
      
            return <TodoCompositeView isLogin={this.state.isLogin} ownerId={this.state.ownerId} owner={this.state.owner} username={this.state.username} autores={this.state.autores} mensajes={this.state.mensajes} lenguage={this.state.lenguage} user={this.state.user} width={this.state.width} isStackNav={this.state.isStackNav} isConnect={this.state.isConnect} entries={this.state.entries} showSideMenu={this.state.isSideMenu} navContext={this.state.navContext} />;
   
        } else {
            assert.fail('Unexpected main view type');
            return null;
        }
    }

    private _createNavigatorRouteStack(stackContext: NavModels.StackRootNavContext): NavTypes.NavigatorRoute[] {
        return _.map(stackContext.stack, (viewContext, index) => this._createNavigatorRoute(viewContext.viewId));
    }

    private _createNavigatorRoute(viewId: NavModels.NavViewId): NavTypes.NavigatorRoute {
        return {
            routeId: viewId,
            sceneConfigType: NavTypes.NavigatorSceneConfigType.FloatFromRight,
        };
    }

    private _findNavContextForRoute(routeId: number) {
        assert.ok(this.state.navContext.isStackNav);

        const stackContext = this.state.navContext as NavModels.StackRootNavContext;
        return _.find(stackContext.stack, (viewContext: NavModels.ViewNavContext) => viewContext.viewId === routeId);
    }

    private _compareNavStack(stackA: NavModels.ViewNavContext[], stackB: NavModels.ViewNavContext[], count: number): boolean {
        for (let i = 0; i < count; i++) {
            if (stackA[i].viewId !== stackB[i].viewId) {
                return false;
            }
        }

        return true;
    }
}
