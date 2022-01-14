/**
* SimpleDialog.tsx
* Copyright: Microsoft 2018
*
* Defines the contents (including a title and buttons) for
* a dialog box. Typically embedded within an RX.Modal component.
*/

import * as _ from 'lodash';
import * as RX from 'reactxp';
import { ComponentBase } from 'resub';

import KeyCodes from '../utilities/KeyCodes';

import { Colors, Fonts, FontSizes } from '../app/Styles';

import Modal from './Modal';
import SimpleButton from './SimpleButton';

export interface SimpleDialogButton {
    text?: string;
    onPress?: () => void;
    buttonStyle?: RX.Types.ButtonStyleRuleSet;
    textStyle?: RX.Types.TextStyleRuleSet;
    isCancel?: boolean;
    isSubmit?: boolean;
    isDisabled?: boolean;
}


import * as NumericInput from "react-numeric-input";
// Note: This class is meant to handle only simple dialogs. If you need somewhat more
// complicated behavior, you may be tempted to extend this class. Please don't do this
// because it will no longer be "simple" if everyone adds these tweaks to it. Instead,
// implement your custom logic within your own dialog class.
export interface SimpleDialogProps {
    dialogId: string;
    setPrice: (e: any) => void;
    price: number;
    maxWidth?: number;
    maxHeight?: number;
    network: string;

    containerStyle?: RX.Types.ViewStyleRuleSet;
    onPressCancel: () => void;
    onPressMarket: () => void;

    title?: string;
    text?: string;
    children?: RX.Types.ReactNode;
    buttons?: SimpleDialogButton[];
}

const _modalPadding = 16;
const _styles = {
    container: RX.Styles.createViewStyle({
        flex: 1,
        backgroundColor: Colors.simpleDialogBackground,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.simpleDialogBorder,
    }),
    titleText: RX.Styles.createTextStyle({
        font: Fonts.displaySemibold,
        fontSize: FontSizes.size16,
        color: Colors.simpleDialogText,
        textAlign: 'center',
        paddingVertical: _modalPadding,
    }),
    contentText: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size16,
        color: Colors.simpleDialogText,
        textAlign: 'left',
        paddingVertical: _modalPadding,
    }),
    contentContainer: RX.Styles.createViewStyle({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: _modalPadding,
    }),
    buttonContainer: RX.Styles.createViewStyle({
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: _modalPadding,
    }),
    button: RX.Styles.createViewStyle({
        marginLeft: 12,
    }),
    panelHeader: RX.Styles.createTextStyle({
        font: Fonts.displayBold,
        fontSize: FontSizes.size16,
        color: Colors.gray66,
    }),
    label: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size12,
        color: 'white',
    }),
    displayText: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size16,
        color: Colors.gray66,
    }),
};
import ImageSource from 'modules/images';

import * as UI from '@sproutch/ui';
export default class SimpleDialog3 extends ComponentBase<SimpleDialogProps, RX.Stateless> {
    componentDidMount() {
        super.componentDidMount();

        RX.Input.backButtonEvent.subscribe(this._onBack);
        RX.Input.keyUpEvent.subscribe(this._onKeyUp);
    }

    componentWillUnmount() {
        super.componentWillUnmount();

        RX.Input.backButtonEvent.unsubscribe(this._onBack);
        RX.Input.keyUpEvent.unsubscribe(this._onKeyUp);
    }

    render() {
        // Title Text
        let optionalTitleText: JSX.Element | undefined;
        if (this.props.title) {
            optionalTitleText = (
                <RX.View importantForAccessibility={RX.Types.ImportantForAccessibility.Yes}>
                    <RX.Text
                        style={[_styles.panelHeader, _styles.titleText]}
                        importantForAccessibility={RX.Types.ImportantForAccessibility.NoHideDescendants}
                    >
                        {this.props.title}
                    </RX.Text>
                </RX.View>
            );
        }

        // Content (children)
        let optionalContent: RX.Types.ReactNode | undefined;
        if (this.props.children) {
            optionalContent = this.props.children;
        } else if (this.props.text) {
            optionalContent = (
                <RX.Text style={[_styles.displayText, _styles.contentText]}>
                    {this.props.text}
                </RX.Text>
            );
        }

        // Buttons
        let optionalButtonsContainer: JSX.Element | undefined;
        if (this.props.buttons && this.props.buttons.length > 0) {
            const optionalButtons = _.map(this.props.buttons);

            optionalButtonsContainer = (
                <RX.View style={_styles.buttonContainer}>
                    {optionalButtons}
                </RX.View>
            );
        }

        return (
            <Modal
                modalId={this.props.dialogId}
                modalWidth={this.props.maxWidth || 450}
                modalHeight={this.props.maxHeight}
            >
                <RX.View style={[_styles.container, this.props.containerStyle]} >
                    {optionalTitleText}
                    <RX.View style={_styles.contentContainer}>
                        {optionalContent}
                        <RX.View style={{ flexDirection: 'row' }}>
                            <NumericInput height={34} size={5} snap step={0.05} min={0.01} max={9999999} onChange={this.props.setPrice} value={this.props.price} />
                            <RX.Image style={{ width: 27, marginRight: 10, marginLeft: 10, height: 27 }} source={this.props.network === "Polygon" ? ImageSource.matic : this.props.network === "Fantom" ? ImageSource.fantom : this.props.network === "Binance" ? ImageSource.bnb : this.props.network === "Avalanche" ? ImageSource.avax : ""} />
                        </RX.View>

                    </RX.View>
                    <RX.View style={{ flexDirection: "row", marginTop: 20, marginBottom: 20 }}>
                        <UI.Button onPress={this.props.onPressMarket} style={{ root: [{ marginRight: 10, alignSelf: 'center' }], content: [{ width: 140, borderWidth: 0, backgroundColor: "#FF499C", borderRadius: 11, }], label: _styles.label }
                        } elevation={4} variant={"outlined"} label="Put On Market" />
                        <UI.Button onPress={this.props.onPressCancel} style={{ root: [{ marginLeft: 10, alignSelf: 'center' }], content: [{ width: 140, borderWidth: 0, backgroundColor: "#FF499C", borderRadius: 11, }], label: _styles.label }
                        } elevation={4} variant={"outlined"} label="Close" />
                    </RX.View >

                </RX.View>
            </Modal>
        );
    }


    private _onButtonPress(e: RX.Types.SyntheticEvent, buttonDef: SimpleDialogButton) {
        e.stopPropagation();
        this._completeButtonPress(buttonDef);
    }

    private _completeButtonPress(buttonDef: SimpleDialogButton) {
        if (buttonDef.onPress) {
            buttonDef.onPress();
        }
    }

    private _onKeyUp = (event: RX.Types.KeyboardEvent) => {
        let buttonToCall: SimpleDialogButton | undefined;

        if (event.keyCode === KeyCodes.Escape) {
            _.each(this.props.buttons, button => {
                if (button.isCancel) {
                    buttonToCall = button;
                }
            });

            if (buttonToCall) {
                this._completeButtonPress(buttonToCall);
                return true;
            }
        }

        return false;
    };

    private _onBack = () => {
        let buttonToCall: SimpleDialogButton | undefined;

        // Map the hardware back button to "cancel".
        _.each(this.props.buttons, button => {
            if (button.isCancel) {
                buttonToCall = button;
            }
        });

        if (buttonToCall) {
            this._completeButtonPress(buttonToCall);
            return true;
        }

        return false;
    };

    static dismissAnimated(dialogId: string): Promise<void> {
        return Modal.dismissAnimated(dialogId);
    }
}
