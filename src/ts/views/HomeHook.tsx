
import ImageSource from 'modules/images';

import { Fonts, FontSizes, } from '../app/Styles';

const _styles = {
  slider: RX.Styles.createViewStyle({
    alignSelf: 'center',
    overflow: 'hidden' // for custom animations
  }),
  sliderContentContainer: RX.Styles.createViewStyle({
    alignSelf: 'center'
  }),
  titleStyle55: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle0: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center'
  }),
  titleStyleBig: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 18,
    textAlign: 'left',
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 22,
    textAlign: 'left',
    color: '#0DCAF0',
    alignSelf: 'center'
  }),
  titleStyle5rojo: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 14,
    textAlign: "right",
    color: 'red',
    alignSelf: 'center'
  }),
  titleStyle5naranja: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 14,
    textAlign: "right",
    color: 'orange',
    alignSelf: 'center'
  }),
  titleStyle5verde: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 14,
    textAlign: "right",
    color: 'green',
    alignSelf: 'center'
  }),
  titleStyle53: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 14,
    textAlign: "right",
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle5: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 16,
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle2s: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 32,
    textAlign: 'left',
    color: 'white',
    alignSelf: 'flex-start'
  }),
  titleStyle2s2: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 32,
    textAlign: 'left',
    color: '#FF296D',
    alignSelf: 'flex-start'
  }),
  titleStyle2: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center'
  }),
  titleStyle22: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 32,
    textAlign: 'left',
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle3: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 14,
    width: 500,
    textAlign: 'center',
    color: 'white',
    marginBottom: 30,
    alignSelf: 'center'
  }),
  titleStyle4: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 46,
    textAlign: 'left',
    color: 'white',
    alignSelf: 'center'
  }),
  titleStyle33: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 40,
    textAlign: 'left',
    color: 'white',
    alignSelf: 'flex-start'
  }),
  titleStyle33s: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 32,
    textAlign: 'left',
    color: '#FF296D',
    alignSelf: 'flex-start'
  }),
  buttomStyle: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
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
    font: Fonts.displayBold,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center'
  }),
  contentStyle3: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center'
  }),
  label: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: FontSizes.size14,
    color: 'white',
  })
}

interface Entries {
  img: string;
  imgText: string;
  title: string;
  content: string;
}
import { Line } from 'react-chartjs-2';


const { Carousel } = require('reactxp-carousel')




interface Entries {
  img: string;
  imgText: string;
  title: string;
  content: string;
}
import { FaBalanceScale } from "@react-icons/all-files/fa/FaBalanceScale";
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";

import { MdAttachMoney } from "@react-icons/all-files/md/MdAttachMoney";

import { GiBurningEmbers } from "@react-icons/all-files/gi/GiBurningEmbers";

import * as UI from '@sproutch/ui';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
const faker = require('faker');

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement
);

import { ResponsiveBar } from '@nivo/bar'

export const HomeHook = ({
  entries,
  isStackNav,
  width,
  len,
  price,
}: {
  entries: Entries[];
  width: number;
  isStackNav: boolean;
  price:number;
  len: string;
}) => {

  const options2 = {

    borderRadius: 4,
    plugins: {
      title: {
        display: false,

        text: 'Chart.js Bar Chart - Stacked',
      },
      legend: {
        fontColor: "white",
        display: false,
      },

    },

  };
  const options = {
    scales: {
      x: {
        grid: {
          color: 'white',
          borderDash: [5, 5],
          borderColor: 'white',
          tickColor: 'white',
          borderWidth: 0.1
        },
        barPercentage: 0.7,
        ticks: {
          color: 'white',
          padding: 10,
        }
      },
      y: {
        grid: {
          color: 'white',
          borderDash: [5, 5],
          borderColor: 'white',
          tickColor: 'white',
          borderWidth: 0.1
        },
        ticks: {
          color: 'white',
          padding: 10,
        }
      }
    },
    plugins: {
      title: {
        display: false,

        text: 'Chart.js Bar Chart - Stacked',
      },

      legend: {
        display: false,
      },

    },

  };
  const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const data = {
    labels,
    datasets: [

      {

        barPercentage: 0.5,

        maxBarThickness: 8,
        label: 'Dataset 1',
        borderRadius: 14,
        color: 'white',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'white',
      }
    ],
  };
  return (<RX.View style={{ flex: 1, alignSelf:'stretch',justifyContent:'center',alignItems:'center',backgroundColor: '#212529' }} >
  
  <RX.Image source={ImageSource.vector19} style={{  alignSelf: 'center',  width: 250, height: 150,marginBottom:30, }} />
  <RX.View style={{ flexDirection: 'row', width:1100,marginTop:15,justifyContent: 'flex-start', alignItems: 'center',alignSelf:"center", }}>
  <RX.Image source={ImageSource.vector21} style={{     marginRight:10,width: 15, height: 15, }} />
        
    <RX.Text style={[_styles.titleStyleBig, {alignSelf: 'center', }]} >
      {"TOKEN INFO."}
    </RX.Text>
    
    </RX.View>
    <RX.View style={{ height:170, marginTop: 10, paddingBottom: 20, marginBottom: 10, alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <RX.View style={{ position:'relative',marginBottom: 30, height: 160, width: 380, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>

        <UI.Paper elevation={10} style={{ root: {margin:20,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "flex-start", borderRadius: 8, width: 350, backgroundColor: '#343A40', height: 135 } }} >

          <RX.View style={{ flexDirection: 'row', paddingLeft:15,justifyContent: 'center', alignItems: 'center', }}>

            <RX.View  style={{}}>
              <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-start', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
                {"Zatcoin Price"}
              </RX.Text>
{price==0?
              <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
                {"Loading.."}
              </RX.Text>:
              <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
                {"$ "+price}
              </RX.Text>}
              </RX.View>
          </RX.View>
         
        </UI.Paper>
        <RX.View style={{ position: 'absolute', marginRight: -260, marginBottom: 60, }}>
          <UI.Paper style={{ root: { elevation: 1, justifyContent: "center", alignItems: "center", borderRadius: 100, width: 50, backgroundColor: '#212529', marginLeft: 0, height: 50 } }} >
          <RX.Image source={ImageSource.vector2} style={{  alignSelf: 'center',  width: 18, height: 18 }} />
          </UI.Paper>

        </RX.View>

      </RX.View>
      <RX.View style={{ position:'relative',marginBottom: 30, height: 160, width: 380, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>

<UI.Paper elevation={10} style={{ root: {margin:20,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "flex-start", borderRadius: 8, width: 350, backgroundColor: '#343A40', height: 135 } }} >

  <RX.View style={{ flexDirection: 'row', paddingLeft:15,justifyContent: 'center', alignItems: 'center', }}>

    <RX.View  style={{}}>
      <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-start', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
        {"Circulating Supply"}
      </RX.Text>

      <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
        {"380,867 Zatcoin"}
      </RX.Text>
      </RX.View>
  </RX.View>
 
</UI.Paper>
<RX.View style={{ position: 'absolute', marginRight: -260, marginBottom: 60, }}>
  <UI.Paper style={{ root: { elevation: 1, justifyContent: "center", alignItems: "center", borderRadius: 100, width: 50, backgroundColor: '#212529', marginLeft: 0, height: 50 } }} >

  <RX.Image source={ImageSource.vector4} style={{  alignSelf: 'center',  width: 18, height: 18 }} />

  </UI.Paper>

</RX.View>

</RX.View>
<RX.View style={{ position:'relative',marginBottom: 30, height: 160, width: 380, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>

        <UI.Paper elevation={10} style={{ root: {margin:20,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "flex-start", borderRadius: 8, width: 350, backgroundColor: '#343A40', height: 135 } }} >

          <RX.View style={{ flexDirection: 'row', paddingLeft:15,justifyContent: 'center', alignItems: 'center', }}>

            <RX.View  style={{}}>
              <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-start', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
                {"MarketCap"}
              </RX.Text>

              <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
                {"$2,357,145"}
              </RX.Text>
              </RX.View>
          </RX.View>
         
        </UI.Paper>
        <RX.View style={{ position: 'absolute', marginRight: -260, marginBottom: 60, }}>
          <UI.Paper style={{ root: { elevation: 1, justifyContent: "center", alignItems: "center", borderRadius: 100, width: 50, backgroundColor: '#212529', marginLeft: 0, height: 50 } }} >

          <RX.Image source={ImageSource.vector5} style={{  alignSelf: 'center',  width: 18, height: 18 }} />

          </UI.Paper>

        </RX.View>

      </RX.View>

    </RX.View>
    <RX.View style={{  height:170,marginTop: 0, paddingBottom: 0, marginBottom: 10, alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <RX.View style={{ position:'relative',marginBottom: 30, height: 160, width: 380, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>

        <UI.Paper elevation={10} style={{ root: {margin:20,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "flex-start", borderRadius: 8, width: 350, backgroundColor: '#343A40', height: 135 } }} >

          <RX.View style={{ flexDirection: 'row', paddingLeft:15,justifyContent: 'center', alignItems: 'center', }}>

            <RX.View  style={{}}>
              <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-start', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
                {"Total Supply"}
              </RX.Text>

              <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
                {"2,000,000,000 Zatcoin"}
              </RX.Text>
              </RX.View>
          </RX.View>
         
        </UI.Paper>
        <RX.View style={{ position: 'absolute', marginRight: -260, marginBottom: 60, }}>
          <UI.Paper style={{ root: { elevation: 1, justifyContent: "center", alignItems: "center", borderRadius: 100, width: 50, backgroundColor: '#212529', marginLeft: 0, height: 50 } }} >

          <RX.Image source={ImageSource.vector3} style={{  alignSelf: 'center',  width: 18, height: 18 }} />

          </UI.Paper>

        </RX.View>

      </RX.View>
      <RX.View style={{ position:'relative',marginBottom: 30, height: 160, width: 380, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>

<UI.Paper elevation={10} style={{ root: {margin:20,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "flex-start", borderRadius: 8, width: 350, backgroundColor: '#343A40', height: 135 } }} >

  <RX.View style={{ flexDirection: 'row', paddingLeft:15,justifyContent: 'center', alignItems: 'center', }}>

    <RX.View  style={{}}>
      <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-start', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
        {"Holders"}
      </RX.Text>

      <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
        {"+ 50,000"}
      </RX.Text>
      </RX.View>
  </RX.View>
 
</UI.Paper>
<RX.View style={{ position: 'absolute', marginRight: -260, marginBottom: 60, }}>
  <UI.Paper style={{ root: { elevation: 1, justifyContent: "center", alignItems: "center", borderRadius: 100, width: 50, backgroundColor: '#212529', marginLeft: 0, height: 50 } }} >

  <RX.Image source={ImageSource.vector7} style={{  alignSelf: 'center',  width: 18, height: 18 }} />

  </UI.Paper>

</RX.View>

</RX.View>
<RX.View style={{ position:'relative',marginBottom: 30, height: 160, width: 380, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>

        <UI.Paper elevation={10} style={{ root: {margin:20,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "flex-start", borderRadius: 8, width: 350, backgroundColor: '#343A40', height: 135 } }} >

          <RX.View style={{ flexDirection: 'row', paddingLeft:15,justifyContent: 'center', alignItems: 'center', }}>

            <RX.View  style={{}}>
              <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-start', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
                {"Total Burned Tokens"}
              </RX.Text>

              <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
                {"100,000 Zatcoin"}
              </RX.Text>
              </RX.View>
          </RX.View>
         
        </UI.Paper>
        <RX.View style={{ position: 'absolute', marginRight: -260, marginBottom: 60, }}>
          <UI.Paper style={{ root: { elevation: 1, justifyContent: "center", alignItems: "center", borderRadius: 100, width: 50, backgroundColor: '#212529', marginLeft: 0, height: 50 } }} >

          <RX.Image source={ImageSource.vector6} style={{  alignSelf: 'center',  width: 18, height: 18 }} />

          </UI.Paper>

        </RX.View>

      </RX.View>

    </RX.View>
  </RX.View >

  );
};

import * as RX from 'reactxp'
import { useEffect } from 'react';

