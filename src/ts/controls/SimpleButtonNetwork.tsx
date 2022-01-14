/*
* SimpleButton.tsx
* Copyright: Microsoft 2018
*
* A "classic" button with text as a label.
*/

import * as RX from 'reactxp';

import { Colors, Fonts, FontSizes } from '../app/Styles';

import ImageSource from 'modules/images';
import HoverButton from './HoverButton';

export interface SimpleButtonProps {
    onPress?: (e: RX.Types.SyntheticEvent) => void;
    title?: string;
    text: string;
    disabled?: boolean;

    textStyle?: RX.Types.StyleRuleSetRecursive<RX.Types.TextStyle>;
    textHoverStyle?: RX.Types.StyleRuleSetRecursive<RX.Types.TextStyle>;
    buttonStyle?: RX.Types.StyleRuleSetRecursive<RX.Types.ViewStyle>;
    buttonHoverStyle?: RX.Types.StyleRuleSetRecursive<RX.Types.ViewStyle>;
}

const _styles = {
    button: RX.Styles.createViewStyle({
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 4,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 12,
        backgroundColor: Colors.simpleButtonBackground,
        borderColor: Colors.simpleButtonBorder,
    }),
    label2: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size16,
        color: 'white',
    }),
    buttonHover: RX.Styles.createViewStyle({
        backgroundColor: Colors.simpleButtonBackgroundHover,
    }),
    text: RX.Styles.createTextStyle({
        font: Fonts.displayRegular,
        fontSize: FontSizes.size16,
        color: Colors.simpleButtonText,
    }),
    textHover: RX.Styles.createTextStyle({
        color: "black",
    }),
};

import * as UI from '@sproutch/ui';
export default class SimpleButtonNetwork extends RX.Component<SimpleButtonProps, RX.Stateless> {
    render(): JSX.Element | null {
        return (

            <HoverButton
                title={this.props.title}
                disabled={this.props.disabled}
                onPress={this.props.onPress}
                onRenderChild={this._onRenderButton}
            />
        );
    }

    private _onRenderButton = (isHovering: boolean) => {
        const buttonStyles = [_styles.button, this.props.buttonStyle];
        const textStyles = [_styles.text, this.props.textStyle];
        if (isHovering) {
            buttonStyles.push(_styles.buttonHover);
            buttonStyles.push(this.props.buttonHoverStyle);
            textStyles.push(_styles.textHover);
            textStyles.push(this.props.textHoverStyle);
        }

        return (
            <UI.Button iconSlot={iconStyle => (
                <RX.Image style={{ width: 27, marginRight: 10, height: 27 }} source={this.props.text === "Polygon" ? ImageSource.matic : this.props.text === "Songbird" ? ImageSource.songbird : this.props.text === "Binance Smart Chain" ? ImageSource.bnb : this.props.text === "Avalanche" ? ImageSource.avax : ""} />
            )} style={{ root: [{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', height: 47 }], content: [buttonStyles], label: [textStyles] }
            } elevation={4} variant={"outlined"} label={this.props.text} />
        );
    };
}
