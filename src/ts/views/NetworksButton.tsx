/*
* AccountMenuButton.tsx
* Copyright: Microsoft 2018
*
* Button that displays the currently-signed-in user and provides
* a popup menu that allows the user to sign out, adjust account
* settings, etc.
*/
import ImageSource from 'modules/images';

import * as RX from 'reactxp';
import { ComponentBase } from 'resub';

import SimpleMenu2, { MenuItem } from '../controls/SimpleMenu2';
import { Colors, Fonts, FontSizes, } from '../app/Styles';

const _styles = {
    background: RX.Styles.createViewStyle({
        height: 75,
        width: 300,
        borderBottomWidth: 1,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    }),
    logoContainer: RX.Styles.createViewStyle({
        flexDirection: 'row',
        marginLeft: 5,
        alignItems: 'flex-start',
    }),
    barControlsContainer: RX.Styles.createViewStyle({
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    }),
    logoImage: RX.Styles.createImageStyle({
        height: 24,
        width: 26,
    }),
    logoText: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size20,
        marginLeft: 10,
        color: Colors.logoColor,
    }),
    logoText2: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size20,
        marginLeft: 0,
        color: '#FF296D',
    }),
    linkText: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.menuItem,
        marginHorizontal: 8,
        color: Colors.menuText,
    }),
    linkTextHover: RX.Styles.createTextStyle({
        color: Colors.menuTextHover,
    }),
    backButtonContainer: RX.Styles.createViewStyle({
        flexDirection: 'row',
        alignItems: 'center',
    }),
    backText: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size16,
        color: Colors.menuText,
    }),
    label: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size14,
        color: "white",
    })
}
interface AccountMenuButtonState {
    currentUserName: string;
    isHovering: boolean;
}

interface AccountMenuButtonProps {
    onPolygon(): any;
    onBinance(): any;
    onAvalanche(): any;
    onSongbird(): any;
    network: string
}
const _menuPopupId = 'accountMenu';


const Moralis = require('moralis');
const serverUrl = "https://22ngrkoobfze.usemoralis.com:2053/server";
const appId = "2LLQ1R7nsajdw124wShzAv0LvR0HsAKxnpfHxga9";
Moralis.start({ serverUrl, appId });


import * as UI from '@sproutch/ui';
export default class NetworksButton extends ComponentBase<AccountMenuButtonProps, AccountMenuButtonState> {
    private _mountedButton: any;

    protected _buildState(props: AccountMenuButtonProps, initState: boolean): Partial<AccountMenuButtonState> | undefined {
        const partialState: Partial<AccountMenuButtonState> = {

        };

        return partialState;
    }

    render(): JSX.Element | null {
        return (
            <UI.Button ref={this._onMountButton} onPress={this._onPress} iconSlot={iconStyle => (
                <RX.Image resizeMode='cover' style={{ width: 27, marginRight: 10, height: 27 }} source={this.props.network === "Polygon" ? ImageSource.matic : this.props.network === "Songbird" ? ImageSource.songbird : this.props.network === "Binance" ? ImageSource.bnb : this.props.network === "Avalanche" ? ImageSource.avax : ""} />
            )} style={{ root: [{ marginBottom: 2 }], content: [{ width: 150, height: 37, justifyContent: 'center', alignItems: 'center', borderRadius: 11, }], label: _styles.label }
            } elevation={4} variant={"outlined"} label={this.props.network} />
        );
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
                    command: 'onPolygon',
                    text: 'Polygon',
                }, {
                    command: '',
                    text: '-',
                }, {
                    command: 'onAvalanche',
                    text: 'Avalanche',
                }, {
                    command: '',
                    text: '-',
                }, {
                    command: 'onBinance',
                    text: 'Binance',
                }, {
                    command: '',
                    text: '-',
                }, {
                    command: 'onSongbird',
                    text: 'Songbird',
                }];

                return (
                    <SimpleMenu2
                        menuItems={items}
                        onSelectItem={this._onSelectMenuItem}
                    />
                );
            },
            dismissIfShown: true,
        }, _menuPopupId);
    };

    private _onSelectMenuItem = async (command: string) => {
        RX.Popup.dismiss(_menuPopupId);
        switch (command) {
            case 'onPolygon':
                await this.props.onPolygon()
                return
            case 'onAvalanche':
                await this.props.onAvalanche()
                return
            case 'onBinance':
                await this.props.onBinance()
                return
            case 'onSongbird':
                await this.props.onSongbird()
                return


            default:
                return
        }

        // TODO - need to implement
    };
}
