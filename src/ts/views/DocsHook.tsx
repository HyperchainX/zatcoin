

import { Fonts, FontSizes, } from '../app/Styles';

import { translate } from './translate';


const _styles = {
  slider: RX.Styles.createViewStyle({
    alignSelf: 'center',
    overflow: 'hidden' // for custom animations
  }),
  titleStyle: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 36,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center'
  }),
  titleStyle2: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 16,
    width: 400,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center'
  }),
  label: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: FontSizes.size14,
    color: 'white',
  })
}
import * as UI from '@sproutch/ui';


export const DocsHook = ({
  len,
  isStackNav
}: {

  isStackNav: boolean;
  len: string;
}) => {



  return (<RX.View style={{ flex: 1, backgroundColor: '#434040', alignItems: 'center', justifyContent: 'center' }}>
    <UI.Paper elevation={10} style={{ root: { borderRadius: 18, width: isStackNav ? 400 : 700, height: isStackNav ? 500 : 600, } }} >
      <RX.Text style={[_styles.titleStyle, { marginTop: 40 }]}>{len === 'en' ? translate.docs.english.title : len === 'es' ? translate.docs.español.title : translate.docs.french.title}</RX.Text>
      <RX.Text style={_styles.titleStyle2}>{len === 'en' ? translate.docs.english.content : len === 'es' ? translate.docs.español.content : translate.docs.french.content}</RX.Text>

    </UI.Paper>
  </RX.View >


  );

};

import * as RX from 'reactxp'
