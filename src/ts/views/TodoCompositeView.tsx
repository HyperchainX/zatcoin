/*
* TodoCompositeView.tsx
* Copyright: Microsoft 2018
*
* Main view that provides a composite view of todos on the left and
* details of the selected todo on the right.
*/

import * as RX from 'reactxp';
import { ComponentBase } from 'resub';

import NavContextStore from '../stores/NavContextStore';
import * as NavModels from '../models/NavModels';
import { Colors, Fonts, FontSizes } from '../app/Styles';

import TodoListPanel2 from './TodoListPanel2';
import { HomeHook } from './HomeHook';
import { AboutHook } from './AboutHook';

import CurrentUserStore from '../stores/CurrentUserStore';

interface Entries {
    img: string;
    imgText: string;
    title: string;
    content: string;
}


interface userMoralis {
    username: string;
    email: string;
    createdAt: string;
    sessionToken: string;
    userId: number;
    emailVerified: boolean;
    updatedAt: string;
    avatar: string;
    objectId: string;
}

export interface TodoCompositeViewProps extends RX.CommonProps {
    navContext: NavModels.TodoRootNavContext;
    entries: Entries[];
    isStackNav: boolean;
    user: userMoralis;
    isLogin: boolean;
    width: number;
    ownerId: number;
    username: string;
    owner: string;
    mensajes: any;
    autores: any;
    isConnect: boolean;
    showSideMenu: boolean;
    lenguage: string;
}

interface TodoCompositeViewState {
    activeId: string;
    isConnected:boolean;
    navId: string;
    supply:number;
    isTiny:boolean;
    user:any,
    holders:number;
    totalSupply:number;
    price:number;
    burn:number;
}

const _styles = {
    label: RX.Styles.createTextStyle({
        font: Fonts.displayBold,
        fontSize: FontSizes.size14,
        color: 'white',
    }),
    viewContainer: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#1A2034',
        flexDirection: 'row',
    }),
    leftPanelContainer: RX.Styles.createViewStyle({

        flexDirection: 'column',
    }),
    leftPanelContainer2: RX.Styles.createViewStyle({
        width: 400,
        flexDirection: 'column',
    }),
    rightPanelContainer: RX.Styles.createViewStyle({
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.grayF8,
    }),
};

import ResponsiveWidthStore from '../stores/ResponsiveWidthStore';

export default class TodoCompositeView extends ComponentBase<TodoCompositeViewProps, TodoCompositeViewState> {
    protected _buildState(props: TodoCompositeViewProps, initState: boolean): Partial<TodoCompositeViewState> | undefined {
        const partialState: Partial<TodoCompositeViewState> = {
            activeId: CurrentUserStore.getActive(),
            isConnected:CurrentUserStore.getIsConnect(),
            navId: CurrentUserStore.getNavId(),
            price: CurrentUserStore.getPrice(),
            burn: CurrentUserStore.getBurn(),
            user: CurrentUserStore.getUser(),
            holders:CurrentUserStore.getHolders(),
            isTiny:ResponsiveWidthStore.isSmallOrTinyScreenSize(),
            supply:CurrentUserStore.getSupply(),
            totalSupply:CurrentUserStore.getTotalSupply(),

        };
        return partialState;
    }
    render(): JSX.Element | null {
        return (
            <RX.View style={_styles.viewContainer}>
                <RX.View style={[_styles.leftPanelContainer, { width: this.props.showSideMenu ? 260 : 80  }]}>
                    <TodoListPanel2
                        len={this.props.lenguage}
                        showSideMenu={this.props.showSideMenu}
                        selectedTodoId={this.state.navId}
                        onSelect={this._onSelectTodo}
                        onCreateNew={this._onCreateNewTodo}
                    />

                </RX.View>

                <RX.View style={_styles.rightPanelContainer}>
                    {this._renderRightPanel()}
                </RX.View>
                
            </RX.View>
        );
    }

    private _renderRightPanel() {
        if (this.props.navContext.showHomePanel) {
            return (
                <HomeHook supply={this.state.supply} isTiny={this.state.isTiny} holders={this.state.holders}  totalSupply={this.state.totalSupply}  burn={this.state.burn}  showSideMenu={this.props.showSideMenu} price={this.state.price} len={this.props.lenguage} width={this.props.width} isStackNav={this.props.isStackNav} entries={this.props.entries} />
            );
        }  else if (this.props.navContext.showAbout) {
            return (
                <AboutHook isTiny={this.state.isTiny}  user={this.state.user} showSideMenu={this.props.showSideMenu}  isConnected={this.state.isConnected} isLogin={this.props.isLogin} isStackNav={this.props.isStackNav} len={this.props.lenguage} entries={[]} width={this.props.width} />
            );
        } else {
            return <HomeHook isTiny={this.state.isTiny} totalSupply={this.state.totalSupply} holders={this.state.holders}  burn={this.state.burn} supply={this.state.supply}  showSideMenu={this.props.showSideMenu} price={this.state.price}  len={this.props.lenguage} width={this.props.width} isStackNav={this.props.isStackNav} entries={this.props.entries} />;
        }
    }

    private _onSelectTodo = (todoId: string) => {
        NavContextStore.navigateToTodoList(todoId, false);
    };


    private _onCreateNewTodo = () => {
        NavContextStore.navigateToTodoList('', true);
    };
}
