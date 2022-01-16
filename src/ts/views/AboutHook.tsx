

import { Fonts, FontSizes, } from '../app/Styles';

const Moralis = require('moralis');
const serverUrl = "https://ua5tcnx9qd3m.usemoralis.com:2053/server";
const appId = "NWvZjcWdUyCimboRDaguhLkaBI6xGD68vxIR0fpm";

import * as _ from 'lodash';
import ImageSource from 'modules/images';
Moralis.start({ serverUrl, appId });

const _styles = {
  slider: RX.Styles.createViewStyle({
    alignSelf: 'center',
    overflow: 'hidden', // for custom animations
  }),
  sliderContentContainer: RX.Styles.createViewStyle({
    alignSelf: 'center',
  }),
  titleStyle55: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center',
  }),
  titleStyle0: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center',
  }),
  titleStyleBig: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 18,
    textAlign: 'right',
    color: 'white',
    alignSelf: 'center',
  }),
  titleStyle5: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
  }),  
  titleStylewww: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 18,
    textAlign: 'center',
    color: '#0D6EFD',
    alignSelf: 'center',
  }),
  titleStyleww: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 18,
    textAlign: 'center',
    color: '#343A40',
    alignSelf: 'center',
  }),
  titleStylew: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 42,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center',
  }),
  titleStylewa: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 16,
    textAlign: 'left',
    color: '#0DCAF0',
    alignSelf: 'center',
  }),
  titleStyle: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 22,
    textAlign: 'left',
    color: '#0DCAF0',
    alignSelf: 'center',
  }),
  titleStyleN: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 22,
    textAlign: 'left',
    color: 'white',
    alignSelf: 'center',
  }),
  titleStyle223: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 22,
    textAlign: 'center',
    color: '#6C757D',
    alignSelf: 'center',
  }),
  titleStyle5rojo: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 16,
    textAlign: "right",
    color: 'red',
    alignSelf: 'center',
  }),
  titleStyle5naranja: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 16,
    textAlign: "right",
    color: 'orange',
    alignSelf: 'center'
  }),
  titleStyle5verde: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
    fontSize: 16,
    textAlign: "right",
    color: 'green',
    alignSelf: 'center'
  }),
  titleStyle53: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 16,
    textAlign: "right",
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
    font: Fonts.displayBold,
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


const { Carousel } = require('reactxp-carousel')




interface Entries {
  img: string;
  imgText: string;
  title: string;
  content: string;
}
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
const faker = require('faker');

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement
);


export const AboutHook = ({
  entries,isLogin,
  isStackNav,
  width,
  user,
  isConnected,
  showSideMenu,
  len,
}: {
  entries: Entries[];
  width: number;
  showSideMenu:boolean,
  user:any,
  isConnected:boolean;
  isStackNav: boolean;
  len: string;
  isLogin:boolean;
}) => {

  
  async function onLogOut() {
    CurrentUserStore.setLogin(false)
    CurrentUserStore.setUser('', '', '', '', '', '', '',"",'')

    NavContextStore.navigateToTodoList(undefined, false, false,false,true)
    await Moralis.User.logOut();
}
  async function _onPressTodo() {
    setCargando(true)
    await Moralis.enableWeb3()
    try {
  
  
  
      await Moralis.authenticate().then(async (user: any) => {
        let username = user.get('name')
        let createdAt = user.get('createdAt')
        let updatedAt = user.get('updatedAt')
        let address = user.get('ethAddress')
        let email = user.get('correo')
        const chainId = await Moralis.getChainId();
        const balance = await Moralis.Web3API.account.getNativeBalance();
        const options = { chain: 'bsc', address: address, }
        const tokens = await Moralis.Web3API.account.getTokenBalances(options);
        console.log("zatcoin "+JSON.stringify(tokens))

let zatcoin = _.filter(tokens, todo => todo.token_address == "0x958e030e5937414b8b54e4647fb513e348ed90e5");
        console.log("zatcoin2 "+JSON.stringify(zatcoin))
        if(email!==''&&email!==undefined){

          CurrentUserStore.setConnect(true)
        }
        let avatar = user.get('avatar')
        if (avatar === undefined) {
          CurrentUserStore.setUser(username, email, createdAt, '', updatedAt, '', address,balance,zatcoin)
        } else {
          CurrentUserStore.setUser(username, email, createdAt, '', updatedAt, avatar, address,balance,zatcoin)
        }

  
        CurrentUserStore.setLogin(true)
  
        setCargando(false)
        return
      })
  
      setCargando(false)
    } catch (error) {
      CurrentUserStore.setLogin(false)
  
      setCargando(false)
      return
    }
  
  };
  const [cargando, setCargando] = useState(false)
  
  
  const options2 = {
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
  const options = {
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
  
const _confirmDeleteDialogId = 'delete';

  const _onPressModal = (e: RX.Types.SyntheticEvent) => {
    e.stopPropagation();
    const dialog = (
        <SimpleDialog
            dialogId={_confirmDeleteDialogId}
            text={''}
            containerStyle={{ alignSelf: 'center',borderWidth:0, justifyContent: 'center', alignItems: 'center' }}
            maxHeight={700}
            maxWidth={450}
            isRegister={true}

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
            }, {
                text: 'Log In with Metamask',
                isCancel: false,
                onPress: () => {

                    CurrentUserStore.setRegister(true)
                },
            }]}
        />
    );

    RX.Modal.show(dialog, _confirmDeleteDialogId);
};
  const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'white',
      }
    ],
  };

  useEffect(() => {
    console.log("storage " + JSON.stringify(RX.Storage.getItem('pay')))
  }, [])
  
  return (<RX.View style={{ flex: 1, alignSelf:'stretch',justifyContent:'center',alignItems:'center',backgroundColor: '#212529' }} >
                       <RX.View style={{ flexDirection: 'row', width:showSideMenu?1000: 1200,marginTop:30,marginBottom:10,justifyContent: 'flex-start', alignItems: 'center',alignSelf:"center", }}>
  <RX.Image source={ImageSource.vector8} style={{     marginRight:10,width: 15, height: 15, }} />
        
    <RX.Text style={[_styles.titleStyleBig, {alignSelf: 'flex-start', }]} >
      {"WALLET PROFILE."}
    </RX.Text>
    
    </RX.View>
  {isLogin === false ? 
  <RX.View style={{ flex:1,alignSelf: 'stretch',marginTop: 0, paddingBottom: 20, marginBottom: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
    <RX.View style={{ position:'relative',marginBottom: 30, height: 300, width: showSideMenu? width*0.7:  width*0.8, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', }}>
      <UI.Paper elevation={10} style={{ root: {margin:10,elevation: 0, position: 'absolute', justifyContent: "center", alignItems: "center", borderRadius: 20, width:showSideMenu? width*0.7:  width*0.75, backgroundColor: '#343A40', height: 250 } }} >
        <RX.View style={{ justifyContent: 'center', alignItems: 'center', }}>
            <RX.Text style={[_styles.titleStyleN, { textAlign:'center',alignSelf: 'center', marginRight: 20, marginBottom: 10 }]} >
              {"Connect Your wallet to get wallet profile"}
            </RX.Text>

              <UI.Button onPress={_onPressTodo}  style={{ content: [{ marginTop:20,marginBottom:20,width: 160, borderWidth:0,borderRadius: 11,backgroundColor:'#0DCAF0', }], label: _styles.label }} elevation={4} variant={"outlined"} label="Connect Now" />
                            
        </RX.View>
      </UI.Paper>
    </RX.View>
  </RX.View>  
  : 
   <RX.View style={{  flex:1,alignSelf:'stretch',justifyContent: 'center', alignItems: 'center' }}>
                         
                            <UI.Paper elevation={10} style={{ root: {margin:10, justifyContent: "center", alignItems: "center", borderRadius: 20, width: showSideMenu? width*0.7:  width*0.75, backgroundColor: '#343A40', height: 350 } }} >
                      
                              <RX.View style={{ justifyContent: 'center', alignItems: 'center', }}>
                      
                                  
                              <RX.Image source={ImageSource.vector20} style={{  alignSelf: 'center',  width: 200, height: 100,marginTop:20 }} />
    
                                  <RX.Text style={[_styles.titleStyle223, { textAlign:'center',alignSelf: 'center', marginRight: 40, marginBottom: 10 }]} >
                                    {"YOU ARE A SHRIMP INVESTOR"}
                                  </RX.Text>
                                  
                                  <RX.View style={{ flexDirection:"row",marginTop:20,justifyContent: 'center', alignItems: 'center', }}>
                                  <RX.View style={{marginRight:30,marginLeft:30,justifyContent: 'center', alignItems: 'center', }}>

                                  <RX.Text style={[_styles.titleStyle5, { alignSelf: 'center', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
                                  {"WALLET ADDRESS"}
                                </RX.Text>

                                <RX.Text style={[_styles.titleStylewa, { alignSelf: 'center', marginRight: 20, marginBottom: 10 }]} >
                                  { user.ethAddress.substring(0, 5).toUpperCase() + '...' + user.ethAddress.substring(user.ethAddress.length - 3, user.ethAddress.length).toUpperCase()}
                                </RX.Text>
                              </RX.View>  
                              <RX.View style={{marginRight:30,marginLeft:30,justifyContent: 'center', alignItems: 'center', }}>

                              <RX.Text style={[_styles.titleStyle5, { alignSelf: 'center', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
                              {"BNB BALANCE"}
                              </RX.Text>

                              <RX.Text style={[_styles.titleStyle, { alignSelf: 'center', marginRight: 20, marginBottom: 10 }]} >
                              {user.balance.balance.toString()+" BNB"}
                              </RX.Text>
                              
              </RX.View>  

                  <RX.View style={{ marginRight:30,marginLeft:30,justifyContent: 'center', alignItems: 'center', }}>

              <RX.Text style={[_styles.titleStyle5, { alignSelf: 'center', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
              {"ZATCOIN BALANCE"}
              </RX.Text>
              <RX.Text style={[_styles.titleStyle, { alignSelf: 'center', marginRight: 20, marginBottom: 10 }]} >
              {(user.zatcoin.length==0?0:user.zatcoin[0].balance)+" ZATCOINS"}
              </RX.Text>
              </RX.View>     
                  <RX.View style={{marginRight:30,marginLeft:30,justifyContent: 'center', alignItems: 'center', }}>

              <RX.Text style={[_styles.titleStyle5, { alignSelf: 'center', marginRight: 20, marginTop: 10, marginBottom: 10 }]} >
              {"ZATCOIN STATUS"}
              </RX.Text>
              <RX.Text style={[_styles.titleStyle, { alignSelf: 'center', marginRight: 20, marginBottom: 10 }]} >
              {isConnected==true?"Registered Account":"Not Registered"}
              </RX.Text>
              </RX.View>   

                              </RX.View>      
                              </RX.View>
                              <UI.Button onPress={onLogOut}  style={{ content: [{ marginTop:20,marginBottom:20,width: 160, borderWidth:0,borderRadius: 11,backgroundColor:'#DC3545', }], label: _styles.label }
                                            } elevation={4} variant={"outlined"} label="Disconnect" />
                            </UI.Paper>
                         
                            { isConnected==true ?
                            <RX.View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginBottom:20,width:showSideMenu? width*0.8:  width*0.85}}>
                          <UI.Paper elevation={10} style={{ root: {margin:10, justifyContent: "center", alignItems: "center", borderRadius: 20, width: 300, backgroundColor: '#0DCAF0', height: 200 } }} >
                

                <RX.View style={{ flexDirection: 'row', width:250,height:30,marginTop:30,marginBottom:10,justifyContent: 'center', alignItems: 'center',alignSelf:"center", }}>
                      
                       <RX.Image source={ImageSource.vector9} style={{marginRight:10,width: 20, height: 20, }} />
                                
                        <RX.Text style={[_styles.titleStyle5, {width:165 ,fontSize:20,height:30,color:'#343A40',alignSelf: 'center', marginRight: 0,}]} >
                        {"ZATCOIN TIMER"}
                        </RX.Text>

                    </RX.View>

                    <RX.View style={{ flex:1,alignSelf:'stretch',justifyContent: 'center', alignItems: 'center', height:140,marginBottom:20}}>
                            

                <RX.Text style={[_styles.titleStylew, { width:150,height:50,alignSelf: 'center', marginRight: 0, marginBottom: 10 }]} >
                {"16:00"}
                </RX.Text>

                <RX.Text style={[_styles.titleStyleww, {  width:100,height:30,alignSelf: 'center', marginRight: 0, marginBottom: 0 }]} >
                {"HOUR"}
                </RX.Text>
                <RX.Text style={[_styles.titleStylewww, { width:100,height:30,alignSelf: 'center', marginRight: 0, marginBottom: 10 }]} >
                {"UTC"}
                </RX.Text>
                </RX.View> 
               
              </UI.Paper>
              
              <UI.Paper elevation={10} style={{ root: {margin:10, justifyContent: "center", alignItems: "center", borderRadius: 20, width: 300, backgroundColor: '#0DCAF0', height: 200 } }} >
                

                <RX.View style={{ flexDirection: 'row', width:250,height:30,marginTop:30,marginBottom:10,justifyContent: 'center', alignItems: 'center',alignSelf:"center", }}>
                      
                       <RX.Image source={ImageSource.vector11} style={{marginRight:10,width: 20, height: 20, }} />
        
<RX.Text style={[_styles.titleStyle5, {width:220 ,fontSize:20,height:30,color:'#343A40',alignSelf: 'center', marginRight: 0,}]} >
{"REGISTERED BALANCE"}
</RX.Text>

    </RX.View>

    <RX.View style={{ flex:1,alignSelf:'stretch',justifyContent: 'center', alignItems: 'center', height:140,marginBottom:20}}>

<RX.Text style={[_styles.titleStylew, { width:150,height:50,alignSelf: 'center', marginRight: 0, marginBottom: 10 }]} >
{"73"}
</RX.Text>

<RX.Text style={[_styles.titleStyleww, {  width:100,height:30,alignSelf: 'center', marginRight: 0, marginBottom: 0 }]} >
{"ZATCOIN"}
</RX.Text>
<RX.Text style={[_styles.titleStylewww, { width:100,height:30,alignSelf: 'center', marginRight: 0, marginBottom: 10 }]} >
{"32 US$"}
</RX.Text>
</RX.View> 
              </UI.Paper>

              <UI.Paper elevation={10} style={{ root: {margin:10, justifyContent: "center", alignItems: "center", borderRadius: 20, width: 300, backgroundColor: '#0DCAF0', height: 200 } }} >
                

                <RX.View style={{ flexDirection: 'row', width:250,height:30,marginTop:30,marginBottom:10,justifyContent: 'center', alignItems: 'center',alignSelf:"center", }}>
                      
                       <RX.Image source={ImageSource.vector12} style={{marginRight:10,width: 20, height: 20, }} />
        
<RX.Text style={[_styles.titleStyle5, {width:180 ,fontSize:20,height:30,color:'#343A40',alignSelf: 'center', marginRight: 0,}]} >
{"TODAY´S REWARD"}
</RX.Text>

    </RX.View>

    <RX.View style={{ flex:1,alignSelf:'stretch',justifyContent: 'center', alignItems: 'center', height:140,marginBottom:20}}>
<RX.Text style={[_styles.titleStylew, { width:150,height:50,alignSelf: 'center', marginRight: 0, marginBottom: 10 }]} >
{"273"}
</RX.Text>

<RX.Text style={[_styles.titleStyleww, {  width:100,height:30,alignSelf: 'center', marginRight: 0, marginBottom: 0 }]} >
{"ZATCOIN"}
</RX.Text>
<RX.Text style={[_styles.titleStylewww, { width:100,height:30,alignSelf: 'center', marginRight: 0, marginBottom: 10 }]} >
{"^ 10%"}
</RX.Text>
</RX.View> 
                    
        
               
              </UI.Paper>

                       <UI.Paper elevation={10} style={{ root: {margin:10, justifyContent: "center", alignItems: "center", borderRadius: 20, width: 300, backgroundColor: '#0DCAF0', height: 200 } }} >
                

                <RX.View style={{ flexDirection: 'row', width:250,height:30,marginTop:30,marginBottom:10,justifyContent: 'center', alignItems: 'center',alignSelf:"center", }}>
                      
                       <RX.Image source={ImageSource.vector13} style={{marginRight:10,width: 20, height: 20, }} />
        
<RX.Text style={[_styles.titleStyle5, {width:165 ,fontSize:20,height:30,color:'#343A40',alignSelf: 'center', marginRight: 0,}]} >
{"TOTAL REWARD"}
</RX.Text>

    </RX.View>

    <RX.View style={{ flex:1,alignSelf:'stretch',justifyContent: 'center', alignItems: 'center', height:140,marginBottom:20}}>
             

<RX.Text style={[_styles.titleStylew, { width:150,height:50,alignSelf: 'center', marginRight: 0, marginBottom: 10 }]} >
{"349"}
</RX.Text>

<RX.Text style={[_styles.titleStyleww, {  width:100,height:30,alignSelf: 'center', marginRight: 0, marginBottom: 0 }]} >
{"ZATCOIN"}
</RX.Text>
<RX.Text style={[_styles.titleStylewww, { width:100,height:30,alignSelf: 'center', marginRight: 0, marginBottom: 10 }]} >
{"466 US$"}
</RX.Text>
</RX.View> 
                    
        
               
              </UI.Paper>
              </RX.View> :
 
                      <UI.Paper elevation={10} style={{ root: {margin:10, justifyContent: "center", alignItems: "center", borderRadius: 20, width: showSideMenu? width*0.6:  width*0.75, backgroundColor: '#0DCAF0', height: 160 } }} >
                
                        <RX.View style={{ justifyContent: 'center', alignItems: 'center', }}>
                
                            
                
                            <RX.Text style={[_styles.titleStyle, {textAlign:'center',alignSelf: 'center', marginRight: 0, marginTop:20,marginBottom: 10 }]} >
                              {"This wallet is not registered in Zatcoin yet."}
                            </RX.Text>
                           
<RX.Text style={[_styles.titleStyle5, { alignSelf: 'center', marginRight: 20, marginTop: 0, marginBottom: 10 }]} >
{"You have to register and accept the terms & conditions  of Zatcoin."}
</RX.Text>
                                            <UI.Button onPress={_onPressModal}  style={{ content: [{ marginTop:10,marginBottom:20,width: 160, borderWidth:0,borderRadius: 11,backgroundColor:'#0DCAF0', }], label: _styles.label }
                                            } elevation={4} variant={"outlined"} label="Register Now" />
                                          
                        </RX.View>
                       
                      </UI.Paper>}
                
                        </RX.View>
                        
                        }
</RX.View >


  );
};

import * as RX from 'reactxp'
import { useEffect, useState } from 'react';
import { SiOpenaccess } from '@react-icons/all-files/si/SiOpenaccess';
import CurrentUserStore from '../stores/CurrentUserStore';
import SimpleDialog from '../controls/SimpleDialog';
import { userInfo } from 'os';
import NavContextStore from '../stores/NavContextStore';

