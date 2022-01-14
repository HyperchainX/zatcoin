/*
* TodoListItem.tsx
* Copyright: Microsoft 2018
*
* Renders a list item that represents a todo item.
*/
import * as RX from 'reactxp';
import { ComponentBase } from 'resub';

import HoverButton from '../controls/HoverButton';
import { Colors, Fonts, FontSizes } from '../app/Styles';
import { Burn } from '../models/IdentityModels';
interface TodoListItemProps extends RX.CommonProps {
    height: number;
    todo: Burn;
    isSelected: boolean;
    searchString?: string;
    onPress: (todoId: string) => void;
}

interface TodoListItemState {
    image: string;
    heightStyle: RX.Types.ViewStyleRuleSet;
}

const _itemBorderWidth = 0.5;

const _styles = {
    container: RX.Styles.createButtonStyle({
        alignSelf: 'stretch',
        borderBottomWidth: _itemBorderWidth,
        borderColor: Colors.borderSeparatorLight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }),
    todoNameText: RX.Styles.createTextStyle({
        flex: -1,
        marginRight: 20, marginLeft: 20,
        fontSize: FontSizes.size14,
        font: Fonts.displayRegular,
        textAlign: 'center',
        color: "white",
        margin: 8,
    }),
    todoNameTextSelected: RX.Styles.createTextStyle({
        flex: -1,
        fontSize: FontSizes.size14,
        font: Fonts.displayRegular,
        color: "black",
        textAlign: 'center',
        margin: 8,
    }),
    todoImage: RX.Styles.createImageStyle({
        marginRight: 4,
        height: 80,
        width: 200,
    }),
    hovering: RX.Styles.createButtonStyle({
        backgroundColor: 'transparent',
    }),
    selected: RX.Styles.createButtonStyle({
        backgroundColor: "transparent",
    }),
};


export default class TodoListItem5 extends ComponentBase<TodoListItemProps, TodoListItemState> {
    protected _buildState(props: TodoListItemProps, initState: boolean): Partial<TodoListItemState> | undefined {
        const partialState: Partial<TodoListItemState> = {
            image: '',
            heightStyle: RX.Styles.createViewStyle({
                height: props.height,
            }, false),
        };
        return partialState;
    }

    render(): JSX.Element | null {
        return (
            <HoverButton
                onRenderChild={this._onRenderItem}
                onPress={this._onPress} />
        );
    }

    private _onPress = (e: RX.Types.SyntheticEvent) => {
        // Prevent VirtualListView.onItemSelected from
        // being triggering in the web app.
        e.stopPropagation();

        this.props.onPress(this.props.todo.id);
    };

    image = ''

    private _onRenderItem = (isHovering: boolean) => {

        const buttonStyles = [_styles.container, this.state.heightStyle];
        if (this.props.isSelected) {
            buttonStyles.push(_styles.selected);
        } else if (isHovering) {
            buttonStyles.push(_styles.hovering);
        }

        let nameText: JSX.Element;
        const searchString = this.props.searchString ? this.props.searchString.trim().toLowerCase() : '';
        let searchSubstrIndex = -1;
        if (searchString) {
            searchSubstrIndex = this.props.todo.id.toLowerCase().indexOf(searchString);
        }

        if (searchSubstrIndex >= 0) {
            nameText = (
                <RX.Text style={_styles.todoNameText} numberOfLines={1}>
                    <RX.Text numberOfLines={1}>
                        {this.props.todo.id.substr(0, searchSubstrIndex)}
                    </RX.Text>
                    <RX.Text style={_styles.todoNameTextSelected} numberOfLines={1}>
                        {this.props.todo.id.substr(searchSubstrIndex, searchString.length)}
                    </RX.Text>
                    <RX.Text numberOfLines={1}>
                        {this.props.todo.id.substr(searchSubstrIndex + searchString.length)}
                    </RX.Text>
                </RX.Text>
            );
        } else {
            nameText = (
                <RX.Text style={_styles.todoNameText} numberOfLines={1}>
                    {this.props.todo.date}
                </RX.Text>
            );
        }

        return (
            <RX.View style={buttonStyles}>


                {nameText}
                <RX.Text style={_styles.todoNameText} numberOfLines={1}>
                    {this.props.todo.number}
                </RX.Text>
                <RX.Text style={_styles.todoNameText} numberOfLines={1}>
                    {this.props.todo.amount}
                </RX.Text>
                <RX.Text style={_styles.todoNameText} numberOfLines={1}>
                    {this.props.todo.hash}
                </RX.Text>
            </RX.View>
        );
    };

}
