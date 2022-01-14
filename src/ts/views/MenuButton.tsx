/*
* AccountMenuButton.tsx
* Copyright: Microsoft 2018
*
* Button that displays the currently-signed-in user and provides
* a popup menu that allows the user to sign out, adjust account
* settings, etc.
*/

import * as RX from 'reactxp';
import { ComponentBase } from 'resub';

import SimpleMenu, { MenuItem } from '../controls/SimpleMenu';
import { Fonts, FontSizes, } from '../app/Styles';

interface AccountMenuButtonState {
    currentUserName: string;
    isHovering: boolean;
    menu: number;
}

interface AccountMenuButtonProps {
}
const _menuPopupId = 'accountMenu';

const _styles = {

    label: RX.Styles.createTextStyle({
        font: Fonts.displayBold,
        fontSize: FontSizes.size12,
        color: 'white',
    })
};


import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import * as UI from '@sproutch/ui';
import NavContextStore from '../stores/NavContextStore';
import CurrentUserStore from '../stores/CurrentUserStore';
export default class MenuButton extends ComponentBase<AccountMenuButtonProps, AccountMenuButtonState> {
    private _mountedButton: any;

    protected _buildState(props: AccountMenuButtonProps, initState: boolean): Partial<AccountMenuButtonState> | undefined {
        const partialState: Partial<AccountMenuButtonState> = {

        };

        return partialState;
    }

    render(): JSX.Element | null {
        return (

            <UI.Button ref={this._onMountButton} onPress={this.setSideMenu} iconSlot={iconStyle => (
                <AiOutlineMenu color={'white'} style={{ marginTop: 0, marginRight: 5, width: 20, height: 20 }} />
            )} style={{ content: [{ width: 90, backgroundColor: "#FF499C", borderRadius: 11, borderWidth: 0 }], label: _styles.label }
            } elevation={4} variant={"outlined"} label="Menu" />


        );
    }
    setSideMenu() {
        CurrentUserStore.setSideMenu(true)
    }

    private _onMountButton = (elem: any) => {
        this._mountedButton = elem;
    };

    private _onPress = (e: RX.Types.SyntheticEvent) => {
        e.stopPropagation();

        RX.Popup.show({
            getAnchor: () => this._mountedButton,
            getElementTriggeringPopup: () => this._mountedButton,
            renderPopup: (anchorPosition: RX.Types.PopupPosition, anchorOffset: number, popupWidth: number, popupHeight: number) => {
                const items: MenuItem[] = [{
                    command: 'home',
                    text: 'Home',
                }, {
                    command: '',
                    text: '-',
                }, {
                    command: 'project',
                    text: 'PROJECT',
                }, {
                    command: '',
                    text: '-',
                }, {
                    command: 'lottery',
                    text: 'LOTTERY',
                }, {
                    command: '',
                    text: '-',
                }, {
                    command: 'roadmap',
                    text: 'ROAD MAP',
                }, {
                    command: '',
                    text: '-',
                }, {
                    command: 'cic',
                    text: 'Token $CIC',
                }, {
                    command: '',
                    text: '-',
                }, {
                    command: 'faq',
                    text: 'FAQ',
                }];

                return (
                    <SimpleMenu
                        width={this.state.menu}
                        menuItems={items}
                        onSelectItem={this._onSelectMenuItem}
                    />
                );
            },
            dismissIfShown: true,
        }, _menuPopupId);
    };

    private _onSelectMenuItem = (command: string) => {
        RX.Popup.dismiss(_menuPopupId);
        switch (command) {
            case 'home':
                return NavContextStore.navigateToTodoList(undefined, false, true)
            case 'project':
                return NavContextStore.navigateToTodoList(undefined, false, false, undefined, false, true)
            case 'lottery':
                return NavContextStore.navigateToTodoList(undefined, false, false, undefined, undefined, undefined, true)
            case 'roadmap':
                return NavContextStore.navigateToTodoList(undefined, false, false, undefined, undefined, undefined, false, true)
            case 'cic':
                return NavContextStore.navigateToTodoList(undefined, false, false, undefined, undefined, undefined, false, false, true)

            case 'faq':
                return NavContextStore.navigateToTodoList(undefined, false, false, undefined, undefined, undefined, false, false, false, true)

            default:
                return NavContextStore.navigateToTodoList(undefined, false, true)
        }

        // TODO - need to implement
    };
}
