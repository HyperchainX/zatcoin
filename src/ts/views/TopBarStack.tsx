/*
* TopBarStack.tsx
* Copyright: Microsoft 2018
*
* Horizontal bar that appears on the top of every view within the app
* when it's using stack-based layout.
*/

import * as RX from 'reactxp';
import { ComponentBase } from 'resub';

import { Colors, Fonts, FontSizes, Styles } from '../app/Styles';
import AccountMenuButton from './AccountMenuButton';

const _styles = {
    background: RX.Styles.createViewStyle({
        alignSelf: 'stretch',
        height: 66,
        borderBottomWidth: 1,
        backgroundColor:"#212529",
        borderColor: Colors.gray66,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    leftRightContainer: RX.Styles.createViewStyle({
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    }),
    titleContainer: RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
    }),
    titleText: RX.Styles.createTextStyle({
        flex: -1,
        font: Fonts.displaySemibold,
        fontSize: FontSizes.size16,
        color: Colors.menuText,
        textAlign: 'center',
    }),
    backText: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size16,
        color: Colors.menuText,
        margin: 8,
    }),
    backTextHover: RX.Styles.createTextStyle({
        color: Colors.menuTextHover,
    }),
    label: RX.Styles.createTextStyle({
        font: Fonts.displayBold,
        fontSize: FontSizes.size14,
        color: Colors.menuText,
    }),
    logoText: RX.Styles.createTextStyle({
        font: Fonts.displayBold,
        fontSize: FontSizes.size20,
        marginLeft: 10,
        color: "#0DCAF0",
    }),
};

interface userMoralis {
    username: string;
    email: string;
    createdAt: string;
    sessionToken: string;
    emailVerified: boolean;
    updatedAt: string;
    avatar: string;
    csbBalance: number;
    objectId: string;
}

export interface TopBarStackProps extends RX.CommonProps {
    title: string;
    onSelect: (selectedId: string) => void;
    showBackButton: boolean;
    user: userMoralis;
    width: number;
    len: string;
    onBack?: () => void;
}
const _confirmDeleteDialogId = 'delete';


export interface TopBarCompositeProps extends RX.CommonProps {

}

interface TopBarCompositeState {
    isLogin: boolean;
    isRegister: boolean
}

import SimpleDialog from '../controls/SimpleDialog';
import { SiOpenaccess } from "@react-icons/all-files/si/SiOpenaccess";
import * as UI from '@sproutch/ui';
import CurrentUserStore from '../stores/CurrentUserStore';
import AccountMenuButton4 from './AccountMenuButton4';
import AccountMenuButton5 from './AccountMenuButton5';
import AccountMenuButton2 from './AccountMenuButton2';
import AccountMenuButton3 from './AccountMenuButton3';
import NavContextStore from '../stores/NavContextStore';
export default class TopBarStack extends ComponentBase<TopBarStackProps, TopBarCompositeState> {


    protected _buildState(props: TopBarStackProps, initState: boolean): Partial<TopBarCompositeState> | undefined {
        const partialState: Partial<TopBarCompositeState> = {
            isRegister: CurrentUserStore.getRegister(),
            isLogin: CurrentUserStore.getLogin(),
        };
        return partialState;
    }
    render(): JSX.Element | null {
        let leftContents: JSX.Element | undefined;
        let rightContents: JSX.Element | undefined;

        leftContents = (<AccountMenuButton onPress={this._onPressTodo} />);
        rightContents = (

            <UI.Button onPress={this._onPressModal} iconSlot={iconStyle => (
                <SiOpenaccess color={'#FF296D'} style={{ marginTop: 0, marginRight: 5, width: 16, height: 16 }} />
            )} style={{ content: [{ width: 120, marginHorizontal: 5, borderRadius: 11, }], label: _styles.label }
            } elevation={4} variant={"outlined"} label="Access" />

        );

        return (
            <RX.View style={[_styles.background, Styles.statusBarTopMargin, { width: this.props.width }]}>


                <RX.View style={{ flex: 14, height: 56, paddingVertical: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }} >
                    {leftContents}
                </RX.View>

                <RX.View style={{ flex: 15, height: 56, paddingVertical: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }} >
                     <RX.View onPress={() => NavContextStore.navigateToTodoList(undefined, false, true)} style={{ width: 350, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <RX.Text style={_styles.logoText}>

                            {'ZATCOIN'}
                        </RX.Text>
                    </RX.View>

                </RX.View>

                <RX.View style={{ flex: 13, height: 56, paddingVertical: 10, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }} >
                    {this.state.isLogin === true ?
                        <AccountMenuButton5 isStackNav={true} onPress={this._onPressTodo} />
                        :
                        null
                    }
                </RX.View>
            </RX.View>
        );
    }

    private _onPressModal = (e: RX.Types.SyntheticEvent) => {
        e.stopPropagation();

        const dialog = (
            <SimpleDialog
                dialogId={_confirmDeleteDialogId}
                text={''}
                containerStyle={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}
                maxHeight={600}
                maxWidth={400}
                isRegister={this.state.isRegister}

                buttons={[{
                    text: 'Login',
                    onPress: () => {
                        SimpleDialog.dismissAnimated(_confirmDeleteDialogId);

                    },
                }, {
                    text: 'Register',
                    isCancel: false,
                    onPress: () => {

                        CurrentUserStore.setRegister(true)
                    },
                }]}
            />
        );

        RX.Modal.show(dialog, _confirmDeleteDialogId);
    };
    private _onPressTodo = (todoId: string) => {
        this.props.onSelect(todoId);
    };
}
