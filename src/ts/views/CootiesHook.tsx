

import { Colors, Fonts, } from '../app/Styles';



const _styles = {
  slider: RX.Styles.createViewStyle({
    overflow: 'hidden' // for custom animations
  }),
  sliderContentContainer: RX.Styles.createViewStyle({
    alignSelf: 'center'
  }),
  titleStyle55: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle0: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center'
  }),
  titleStyle: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 36,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center'
  }),
  titleStyle2s: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 32,
    textAlign: 'left',
    color: 'white',
    alignSelf: 'flex-start'
  }),
  Text5: RX.Styles.createTextStyle({
    fontSize: 10,
    font: Fonts.displayRegular,
    color: 'black',
  }),
  Text6: RX.Styles.createTextStyle({
    fontSize: 10,
    font: Fonts.displayRegular,
    color: 'black',
  }),
  titleStyle2s2: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 32,
    textAlign: 'left',
    color: '#FF296D',
    alignSelf: 'flex-start'
  }),
  titleStyle2: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center'
  }),
  titleStyle22: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 32,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle3: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 14,
    textAlign: 'left',
    color: 'gray',
    alignSelf: 'center'
  }),
  titleStyle4: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center'
  }),
  Text2: RX.Styles.createTextStyle({
    fontSize: 12,
    font: Fonts.displayRegular,
    color: 'black',
    marginTop: 10,
    alignSelf: 'center'
  }),
  titleStyle33: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 40,
    textAlign: 'left',
    color: 'black',
    alignSelf: 'flex-start'
  }),
  titleStyle33s: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 32,
    textAlign: 'left',
    color: '#FF296D',
    alignSelf: 'flex-start'
  }),
  buttomStyle: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center'
  }),
  contentStyle: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center'
  }),
  contentStyle2: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center'
  }),
  contentContainer: RX.Styles.createViewStyle({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  }),
  container: RX.Styles.createViewStyle({
    flex: 1,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: Colors.simpleDialogBorder,
  }),
  contentStyle3: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center'
  }),
  input: RX.Styles.createTextInputStyle({
    font: Fonts.displayRegular,
    fontSize: 12,
    color: 'white',
    paddingLeft: 20,
    textAlign: 'left',
    width: 250, marginTop: 5, backgroundColor: '#181818', borderRadius: 11, height: 37
  }),
  input2: RX.Styles.createTextInputStyle({
    font: Fonts.displayRegular,
    fontSize: 12,
    color: 'white',
    paddingLeft: 20,
    textAlign: 'left',
    width: 250, marginTop: 5, backgroundColor: '#181818', borderRadius: 11, height: 80
  }),
  label: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 12,
    color: 'black',
  }),
  Text: RX.Styles.createTextStyle({
    fontSize: 24,
    font: Fonts.displayRegular,
    color: 'black',
  }),
  Text3: RX.Styles.createTextStyle({
    fontSize: 16,
    font: Fonts.displayRegular,
    color: 'gray',
  }),
}


import ImageSource from 'modules/images';

export const CootiesHook = ({
  isLogin
}: {
  isLogin: boolean;
}) => {


  return (<RX.View style={_styles.container} >
    <RX.Image source={ImageSource.logo2} resizeMode={'contain'} resizeMethod={'auto'} style={{ minHeight: 150, minWidth: 280, width: 500, height: 150, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} />


  </RX.View >



  );
};

import * as RX from 'reactxp'
