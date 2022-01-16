
import ImageSource from 'modules/images';

import { Fonts, FontSizes, } from '../app/Styles';

import VideoPlayer from 'react-video-player-extended';
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
  titleStyleTiny: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 16,
    textAlign: 'left',
    color: '#0DCAF0',
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
  titleStyle5Tiny: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 12,
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

import RXVideo from 'reactxp-video';

var _mountedVideo: RXVideo | undefined;

import { ResponsiveBar } from '@nivo/bar'

export const HomeHook = ({
  entries,
  isStackNav,
  width,
  showSideMenu,
  len,
  isTiny,
  holders,
  price,
  burn,
  supply,
  totalSupply,
}: {
  entries: Entries[];
  width: number;
  isTiny:boolean;
  holders: number;
  showSideMenu: boolean;
  isStackNav: boolean;
  supply:number;
  price:number;
  burn:number;
  totalSupply:number;
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
  
  function handleVolume(value: any) {
    setVolumen(value)
  };

  const handlePause = () => {

    setPlaying(false)
  };

  const handlePlay = () => {
    setPlaying(true)
  };
  const [volume, setVolumen] = useState(0.7)

  const _onMountVideo = (component: RXVideo) => {
    _mountedVideo = component;
  }
  const _playVideo = () => {
    if (_mountedVideo) {
      _mountedVideo.mute(true);
      _mountedVideo.play();
    }
  }

  const [isPlaying, setPlaying] = useState(false)
  return (<RX.View style={{ flex: 1, alignSelf:'stretch',justifyContent:'center',alignItems:'center',backgroundColor: '#212529' }} >
                   
                   { isTiny?  <RX.View style={{width: width*0.8, height: 180,borderRadius:12,marginTop:20,marginBottom:0}}>
                      <RXVideo
                            source={'https://res.cloudinary.com/indexcoorp/video/upload/v1642202319/FINAL_RENDER_001_1_tnklob.mp4'}
                            style={{ width: width*0.8, height: 180,borderRadius:12, }}
                            loop={true}        
                            onCanPlay={_playVideo}
                            showControls={false}
                            ref={_onMountVideo}
                          />  
                    
                      </RX.View> : <RX.View style={{width: 320, height: 180,borderRadius:12,marginTop:100,marginBottom:0}}>
                              
                          <RXVideo
                            source={'https://res.cloudinary.com/indexcoorp/video/upload/v1642202319/FINAL_RENDER_001_1_tnklob.mp4'}
                            style={{ width: 320, height: 180,borderRadius:12, }}
                            loop={true}        
                            onCanPlay={_playVideo}
                            showControls={false}
                            ref={_onMountVideo}
                          />
                    
                      </RX.View>}

                  {   isTiny? <RX.View style={{ flexDirection: 'row', width,marginTop:20,justifyContent: 'center', alignItems: 'center',alignSelf:"center", }}>
                       <RX.Image source={ImageSource.vector8} style={{     marginRight:10,width: 15, height: 15, }} />
            
      <RX.Text style={[_styles.titleStyleBig, {alignSelf: 'center', }]} >
      {"TOKEN INFO."}
    </RX.Text>
    
    </RX.View>: <RX.View style={{ flexDirection: 'row', paddingLeft:100,width:width,marginTop:0,justifyContent: 'flex-start', alignItems: 'center',alignSelf:"center", }}>
                       <RX.Image source={ImageSource.vector8} style={{     marginRight:10,width: 15, height: 15, }} />
            
      <RX.Text style={[_styles.titleStyleBig, {alignSelf: 'center',}]} >
      {"TOKEN INFO."}
    </RX.Text>
    
    </RX.View>} 
{isTiny? <RX.ScrollView style={{ 
   alignSelf: 'stretch', flex:1 }}>
  <RX.View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
  <RX.View  style={{justifyContent:'center',alignItems:'center',alignSelf:'center',height: 80,marginTop:20,width: width*0.9,}}>
<UI.Paper elevation={10} style={{ root: {margin:5,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "center", borderRadius: 8, backgroundColor: '#343A40', height: 70,width: width*0.8,  } }} >

<RX.View style={{  justifyContent: 'center', alignItems: 'center', }}>

    <RX.Text style={[_styles.titleStyle5Tiny, { alignSelf: 'center',  marginTop: 5, marginBottom: 5 }]} >
      {"Zatcoin Price"}
    </RX.Text>
    {price==0?
    <RX.Text style={[_styles.titleStyleTiny, { alignSelf: 'center',  marginBottom: 5 }]} >
      {"Loading.."}
    </RX.Text>:
    <RX.Text style={[_styles.titleStyleTiny, { alignSelf: 'center',  marginBottom: 5 }]} >
      {"$ "+price.toString().substring(0, 10).toUpperCase() }
    </RX.Text>}
</RX.View>

</UI.Paper>

</RX.View>

<RX.View  style={{justifyContent:'center',alignItems:'center',height: 80,width: width*0.9,marginTop:1}}>
<UI.Paper elevation={10} style={{ root: {margin:5,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "center", borderRadius: 8, backgroundColor: '#343A40', height: 70,width: width*0.8,  } }} >

<RX.View style={{ justifyContent: 'center', alignItems: 'center', }}>

    <RX.Text style={[_styles.titleStyle5Tiny, { alignSelf: 'center',  marginTop: 5, marginBottom: 5 }]} >
    {"Circulating Supply"}
    </RX.Text>
    {supply==0?
              <RX.Text style={[_styles.titleStyleTiny, {alignSelf: 'center',  }]} >
                {"Loading.."}
              </RX.Text>:
             
      <RX.Text style={[_styles.titleStyleTiny, { alignSelf: 'center', }]} >
      {supply+" Zatcoins"}
    </RX.Text>
    }
</RX.View>

</UI.Paper>

</RX.View>

<RX.View  style={{justifyContent:'center',alignItems:'center',height: 80,width: width*0.9,}}>
<UI.Paper elevation={10} style={{ root: {margin:5,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "center", borderRadius: 8, backgroundColor: '#343A40', height: 70,width: width*0.8,  } }} >

<RX.View style={{ justifyContent: 'center', alignItems: 'center', }}>

    <RX.Text style={[_styles.titleStyle5Tiny, { alignSelf: 'center', marginTop: 5, marginBottom: 5 }]} >
    {"MarketCap"}
    </RX.Text>
    {totalSupply==0?
              <RX.Text style={[_styles.titleStyleTiny, { alignSelf: 'center', }]} >
                {"Loading.."}
              </RX.Text>:
              
              <RX.Text style={[_styles.titleStyleTiny, { alignSelf: 'center',  }]} >
                {"$ "+((totalSupply-burn)*price)}
              </RX.Text>}
</RX.View>

</UI.Paper>

</RX.View>


<RX.View  style={{justifyContent:'center',alignItems:'center',height: 80,width: width*0.9,}}>
<UI.Paper elevation={10} style={{ root: {margin:5,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "center", borderRadius: 8, backgroundColor: '#343A40', height: 70,width: width*0.8,  } }} >

<RX.View style={{ justifyContent: 'center', alignItems: 'center', }}>

    <RX.Text style={[_styles.titleStyle5Tiny, { alignSelf: 'center', marginTop: 5, marginBottom: 5 }]} >
    {"Total Supply"}
    </RX.Text>
    {totalSupply==0?
              <RX.Text style={[_styles.titleStyleTiny, { alignSelf: 'center', }]} >
                {"Loading.."}
              </RX.Text>:
              <RX.Text style={[_styles.titleStyleTiny, { alignSelf: 'center', }]} >
                {totalSupply+ " Zatcoin" }
              </RX.Text>}
</RX.View>

</UI.Paper>

</RX.View>

<RX.View  style={{justifyContent:'center',alignItems:'center',height: 80,width: width*0.9,}}>
<UI.Paper elevation={10} style={{ root: {margin:5,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "center", borderRadius: 8, backgroundColor: '#343A40', height: 70,width: width*0.8,  } }} >

<RX.View style={{ justifyContent: 'center', alignItems: 'center', }}>

    <RX.Text style={[_styles.titleStyle5Tiny, { alignSelf: 'center',  }]} >
    {"Holders"}
    </RX.Text>
    {holders==0?
              <RX.Text style={[_styles.titleStyleTiny, { alignSelf: 'center', }]} >
                {"Loading.."}
              </RX.Text>:
             
      <RX.Text style={[_styles.titleStyleTiny, { alignSelf: 'center',  }]} >
      {"+ "+holders}
    </RX.Text>}
</RX.View>

</UI.Paper>

</RX.View>

<RX.View  style={{justifyContent:'center',alignItems:'center',height: 80,width: width*0.9,}}>
<UI.Paper elevation={10} style={{ root: {margin:5,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "center", borderRadius: 8, backgroundColor: '#343A40', height: 70,width: width*0.8,  } }} >

<RX.View style={{ justifyContent: 'center', alignItems: 'center', }}>

    <RX.Text style={[_styles.titleStyle5Tiny, { alignSelf: 'center', marginTop: 5, marginBottom: 5 }]} >
      {"Zatcoin Price"}
    </RX.Text>
    {price==0?
    <RX.Text style={[_styles.titleStyleTiny, { alignSelf: 'center',  marginBottom: 5 }]} >
      {"Loading.."}
    </RX.Text>:
    <RX.Text style={[_styles.titleStyleTiny, { alignSelf: 'center',  marginBottom: 5 }]} >
      {"$ "+price.toString().substring(0, 10).toUpperCase() }
    </RX.Text>}
</RX.View>

</UI.Paper>

</RX.View></RX.View>
   </RX.ScrollView>:
      <RX.View style={{  height:180,marginTop: 0, paddingBottom: 0, marginBottom: 15, alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <RX.View style={{ position:'relative',marginBottom: 30, height: 160, width: showSideMenu?380: 460, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>

        <UI.Paper elevation={10} style={{ root: {margin:20,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "flex-start", borderRadius: 8, width: showSideMenu?350: 440, backgroundColor: '#343A40', height: 135 } }} >

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
        {"$ "+price.toString().substring(0, 10).toUpperCase() }
      </RX.Text>}
      </RX.View>
  </RX.View>
 
</UI.Paper>
<RX.View style={{ position: 'absolute', marginRight: showSideMenu?-260:-360, marginBottom: 60, }}>
  <UI.Paper style={{ root: { elevation: 1, justifyContent: "center", alignItems: "center", borderRadius: 100, width: 50, backgroundColor: '#212529', marginLeft: 0, height: 50 } }} >
  <RX.Image source={ImageSource.vector2} style={{  alignSelf: 'center',  width: 18, height: 18 }} />
  </UI.Paper>

</RX.View>

</RX.View>



      
      <RX.View style={{  height:180,marginTop: 0, paddingBottom: 0, marginBottom: 15, alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <RX.View style={{ position:'relative',marginBottom: 30, height: 160, width: showSideMenu?380: 460, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>

        <UI.Paper elevation={10} style={{ root: {margin:20,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "flex-start", borderRadius: 8, width: showSideMenu?350: 440, backgroundColor: '#343A40', height: 135 } }} >

  <RX.View style={{ flexDirection: 'row', paddingLeft:15,justifyContent: 'center', alignItems: 'center', }}>

    <RX.View  style={{}}>
      <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-start', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
        {"Circulating Supply"}
      </RX.Text>
      {supply==0?
              <RX.Text style={[_styles.titleStyle, {alignSelf: 'flex-end', marginRight: 60, marginBottom: 10 }]} >
                {"Loading.."}
              </RX.Text>:
             
      <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
      {supply+" Zatcoins"}
    </RX.Text>
    }
      </RX.View>
  </RX.View>
 
</UI.Paper>
<RX.View style={{ position: 'absolute', marginRight: showSideMenu?-260:-360, marginBottom: 60, }}>
  <UI.Paper style={{ root: { elevation: 1, justifyContent: "center", alignItems: "center", borderRadius: 100, width: 50, backgroundColor: '#212529', marginLeft: 0, height: 50 } }} >

  <RX.Image source={ImageSource.vector4} style={{  alignSelf: 'center',  width: 18, height: 18 }} />

  </UI.Paper>

</RX.View>

</RX.View>
  </RX.View>
<RX.View style={{ position:'relative',marginBottom: 15, height: 160, width: showSideMenu?380: 460, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>

        <UI.Paper elevation={10} style={{ root: {margin:20,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "flex-start", borderRadius: 8, width: showSideMenu?350: 440, backgroundColor: '#343A40', height: 135 } }} >

          <RX.View style={{ flexDirection: 'row', paddingLeft:15,justifyContent: 'center', alignItems: 'center', }}>

            <RX.View  style={{}}>
              <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-start', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
                {"MarketCap"}
              </RX.Text>
              {totalSupply==0?
              <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
                {"Loading.."}
              </RX.Text>:
              
              <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
                {"$ "+((totalSupply-burn)*price)}
              </RX.Text>}
              </RX.View>
          </RX.View>
         
        </UI.Paper>
        <RX.View style={{ position: 'absolute', marginRight: showSideMenu?-260:-360, marginBottom: 60, }}>
          <UI.Paper style={{ root: { elevation: 1, justifyContent: "center", alignItems: "center", borderRadius: 100, width: 50, backgroundColor: '#212529', marginLeft: 0, height: 50 } }} >

          <RX.Image source={ImageSource.vector5} style={{  alignSelf: 'center',  width: 18, height: 18 }} />

          </UI.Paper>

        </RX.View>

      </RX.View>

    </RX.View>}

    {isTiny?<RX.View></RX.View>:
    <RX.View style={{  height:180,marginTop: 0, paddingBottom: 0, marginBottom: 130, alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <RX.View style={{ position:'relative',marginBottom: 30, height: 160, width: showSideMenu?380: 460, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>

        <UI.Paper elevation={10} style={{ root: {margin:20,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "flex-start", borderRadius: 8, width: showSideMenu?350: 440, backgroundColor: '#343A40', height: 135 } }} >

          <RX.View style={{ flexDirection: 'row', paddingLeft:15,justifyContent: 'center', alignItems: 'center', }}>

            <RX.View  style={{}}>
              <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-start', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
                {"Total Supply"}
              </RX.Text>
              {totalSupply==0?
              <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
                {"Loading.."}
              </RX.Text>:
              <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
                {totalSupply+ " Zatcoin" }
              </RX.Text>}
              </RX.View>
          </RX.View>
         
        </UI.Paper>
        <RX.View style={{ position: 'absolute', marginRight: showSideMenu?-260:-360, marginBottom: 60, }}>
          <UI.Paper style={{ root: { elevation: 1, justifyContent: "center", alignItems: "center", borderRadius: 100, width: 50, backgroundColor: '#212529', marginLeft: 0, height: 50 } }} >

          <RX.Image source={ImageSource.vector3} style={{  alignSelf: 'center',  width: 18, height: 18 }} />

          </UI.Paper>

        </RX.View>

      </RX.View>
      <RX.View style={{ position:'relative',marginBottom: 30, height: 160, width: showSideMenu?380: 460, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>

<UI.Paper elevation={10} style={{ root: {margin:20,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "flex-start", borderRadius: 8, width: showSideMenu?350: 440, backgroundColor: '#343A40', height: 135 } }} >

  <RX.View style={{ flexDirection: 'row', paddingLeft:15,justifyContent: 'center', alignItems: 'center', }}>

    <RX.View  style={{}}>
      <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-start', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
        {"Holders"}
      </RX.Text>
      {holders==0?
              <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
                {"Loading.."}
              </RX.Text>:
             
      <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }]} >
      {"+ "+holders}
    </RX.Text>}
      </RX.View>
  </RX.View>
 
</UI.Paper>
<RX.View style={{ position: 'absolute', marginRight: showSideMenu?-260:-360, marginBottom: 60, }}>
  <UI.Paper style={{ root: { elevation: 1, justifyContent: "center", alignItems: "center", borderRadius: 100, width: 50, backgroundColor: '#212529', marginLeft: 0, height: 50 } }} >

  <RX.Image source={ImageSource.vector7} style={{  alignSelf: 'center',  width: 18, height: 18 }} />

  </UI.Paper>

</RX.View>

</RX.View>
<RX.View style={{ position:'relative',marginBottom: 15, height: 160, width: showSideMenu?380: 460, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>

        <UI.Paper elevation={10} style={{ root: {margin:20,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "flex-start", borderRadius: 8, width: showSideMenu?350: 440, backgroundColor: '#343A40', height: 135 } }} >

        
          <RX.View style={{ flexDirection: 'row', paddingLeft:15,justifyContent: 'center', alignItems: 'center', }}>

            <RX.View  style={{}}>
              <RX.Text style={[_styles.titleStyle5, { alignSelf: 'flex-start', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
                {"Total Burned Tokens"}
              </RX.Text>
              {burn==0?
              <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-end', marginRight: 80, marginBottom: 10 }]} >
                {"Loading.."}
              </RX.Text>:
               <RX.Text style={[_styles.titleStyle, { alignSelf: 'flex-start', marginRight: 20, marginBottom: 10 }]} >
               {burn+" Zatcoins"}
              </RX.Text>}
              </RX.View>
          </RX.View>
         
        </UI.Paper>
        <RX.View style={{ position: 'absolute', marginRight: showSideMenu?-260:-360, marginBottom: 60, }}>
          <UI.Paper style={{ root: { elevation: 1, justifyContent: "center", alignItems: "center", borderRadius: 100, width: 50, backgroundColor: '#212529', marginLeft: 0, height: 50 } }} >

          <RX.Image source={ImageSource.vector6} style={{  alignSelf: 'center',  width: 18, height: 18 }} />

          </UI.Paper>

        </RX.View>

      </RX.View>

    </RX.View>}
  </RX.View >

  );
};

import * as RX from 'reactxp'
import { useEffect, useState } from 'react';
import { userInfo } from 'os';

