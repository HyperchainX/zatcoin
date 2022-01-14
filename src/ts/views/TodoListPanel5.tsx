/**
* TodoListPanel.tsx
* Copyright: Microsoft 2018
*
* Display first screen of the Todo application.
*/

import * as _ from 'lodash';
import * as RX from 'reactxp';
import { VirtualListView, VirtualListViewItemInfo } from 'reactxp-virtuallistview';
import { VirtualListCellRenderDetails } from 'reactxp-virtuallistview/dist/VirtualListCell';
import { ComponentBase } from 'resub';

import { Colors, Fonts, FontSizes } from '../app/Styles';
import { Burn } from '../models/IdentityModels';

import CurrentUserStore from '../stores/CurrentUserStore';
import TodosStore from '../stores/TodosStore';

import TodoListItem3 from './TodoListItem3';
import TodoListItem4 from './TodoListItem4';
import TodoListItem5 from './TodoListItem5';

interface TodoListItemInfo extends VirtualListViewItemInfo {
    todo: Burn;
}

export interface TodoListPanelProps extends RX.CommonProps {
    selectedTodoId?: string;
    onSelect: (selectedId: string) => void;
    onCreateNew: () => void;
}

interface TodoListPanelState {
    todos: TodoListItemInfo[];
    filteredTodoList: TodoListItemInfo[];
    searchString: string;
}
const _listItemHeight = 60;

const _styles = {
    listScroll: RX.Styles.createViewStyle({
        flexDirection: 'column',
        alignSelf: 'stretch',
    }),
    todoListHeader: RX.Styles.createViewStyle({
        height: 60,
        backgroundColor: '#E60929',

        borderColor: Colors.borderSeparator,

        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    }),
    searchBox: RX.Styles.createTextInputStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size14,
        borderWidth: 1,
        height: 37,
        alignSelf: "stretch",
        borderColor: Colors.borderSeparator,
        flex: 1,
        padding: 4,
        margin: 12,
    }),
    container: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch',
    }),
    addTodoButton: RX.Styles.createViewStyle({
        margin: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
    }),
    buttonText: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size32,
        lineHeight: 32,
        color: Colors.buttonTextColor,
    }),
    logoText2White: RX.Styles.createTextStyle({
        font: Fonts.displayBold,
        fontSize: 18,
        marginHorizontal: 4,
        color: "white",
        opacity: 1,
    }),
    buttonTextHover: RX.Styles.createTextStyle({
        color: Colors.buttonTextHover,
    }),
};

export default class TodoListPanel5 extends ComponentBase<TodoListPanelProps, TodoListPanelState> {
    protected _buildState(props: TodoListPanelProps, initState: boolean): Partial<TodoListPanelState> | undefined {
        const partialState: Partial<TodoListPanelState> = {
        };

        partialState.todos = CurrentUserStore.getBurns().map((todo, i) => ({
            key: i.toString(),
            height: _listItemHeight,
            template: 'todo',
            todo,
        }));

        if (initState) {
            partialState.searchString = '';
            partialState.filteredTodoList = partialState.todos;
        } else {
            const filter = _.trim(partialState.searchString);
            if (filter) {
                partialState.filteredTodoList = this._filterTodoList(partialState.todos, filter);
            } else {
                partialState.filteredTodoList = partialState.todos;
            }
        }

        return partialState;
    }

    render() {
        return (
            <RX.View useSafeInsets={true} style={_styles.container}>
                <RX.View style={_styles.todoListHeader}>

                    <RX.Text style={[_styles.logoText2White, { alignSelf: 'flex-start', marginLeft: 20, textAlign: "left", height: 27, minWidth: 250, marginTop: 0, marginBottom: 0, width: 300 }]}>
                        {"Marketing Wallet Assets"}
                    </RX.Text>

                </RX.View>

                <VirtualListView
                    itemList={this.state.filteredTodoList}
                    renderItem={this._renderItem}
                    style={_styles.listScroll}
                />
            </RX.View>
        );
    }


    private _filterTodoList(sortedTodos: TodoListItemInfo[], searchString: string): TodoListItemInfo[] {
        const lowerSearchString = searchString.toLowerCase();

        return _.filter(sortedTodos, item => {
            const todoLower = item.todo.hash.toLowerCase();
            return todoLower.search(lowerSearchString) >= 0;
        });
    }

    private _renderItem = (details: VirtualListCellRenderDetails<TodoListItemInfo>) => {
        const item = details.item;
        return (
            <TodoListItem5
                todo={item.todo}
                height={_listItemHeight}
                isSelected={item.todo.id === this.props.selectedTodoId}
                searchString={this.state.searchString}
                onPress={this._onPressTodo}
            />
        );
    };

    private _onPressTodo = (todoId: string) => {
        this.props.onSelect(todoId);
        this.setState({
            searchString: '',
            filteredTodoList: this.state.todos,
        });
    };

}
