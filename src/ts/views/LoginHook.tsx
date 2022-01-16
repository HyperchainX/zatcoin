

import { Colors, Fonts, } from '../app/Styles';

import * as EmailValidator from 'email-validator';

import { Chat } from '../models/IdentityModels';

const Moralis = require('moralis');
const serverUrl = "https://ua5tcnx9qd3m.usemoralis.com:2053/server";
const appId = "NWvZjcWdUyCimboRDaguhLkaBI6xGD68vxIR0fpm";

Moralis.start({ serverUrl, appId });
interface Item {
  id: string;
  description: string;
  name: string;
  owner: string;
  ownerEmail: string;
  uri: string;
  forSale: boolean;
  ownerId: number;
  price: number;
  type: string;
}
const _styles = {
  slider: RX.Styles.createViewStyle({
    overflow: 'hidden' // for custom animations
  }),
  sliderContentContainer: RX.Styles.createViewStyle({
    alignSelf: 'center'
  }),
  titleStyle55: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 14,
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
  titleStyle: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 36,
    textAlign: 'center',
    color: '#0DCAF0',
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
    font: Fonts.displayBold,
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center'
  }),
  titleStyle33: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 40,
    textAlign: 'left',
    color: 'black',
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
  contentContainer: RX.Styles.createViewStyle({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderWidth:0,
  }),
  container: RX.Styles.createViewStyle({
    flex: 1,
    borderWidth:0,
    backgroundColor: "#343A40",
  }),
  contentStyle3: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center'
  }),
  input: RX.Styles.createTextInputStyle({
    font: Fonts.displayBold,
    fontSize: 14,
    color: 'white',
    paddingLeft: 20,
    textAlign: 'left',
    width: 250, marginTop: 10, backgroundColor: '#495057', borderRadius: 7, height: 47
  }),
  label: RX.Styles.createTextStyle({
    font: Fonts.displayBold,
    fontSize: 14,
    color: 'white',
  }),
  Text: RX.Styles.createTextStyle({
    fontSize: 16,
    font: Fonts.displayBold,
    color: 'black',
  }),
  Text3: RX.Styles.createTextStyle({
    fontSize: 12,
    font: Fonts.displayRegular,
    color: 'white',
  }),
  Text33: RX.Styles.createTextStyle({
    fontSize: 12,
    font: Fonts.displayBold,
    color: 'white',
  }),
  Text4: RX.Styles.createTextStyle({
    fontSize: 16,
    font: Fonts.displayBold,
    color: 'black',
  }),
}


import Dropzone from 'react-dropzone';

const _confirmDeleteDialogId = 'delete';
import * as UI from '@sproutch/ui';
import CurrentUserStore from '../stores/CurrentUserStore';

import ImageSource from 'modules/images';

import { FaUpload } from "@react-icons/all-files/fa/FaUpload";

export const LoginHook = ({
  user
}: {
  user: any
}) => {

  var [file, setFile] = useState<any>()


  function setFileUpload(file: any) {


    setFile(URL.createObjectURL(file))
  }


  async function _onDropFile2(files: File[]) {
    let blob = new Blob(files);
    setFileUpload(blob)
    var reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onloadend = _loaded


  }
  async function _onPressSave() {
    setCargando(true)
    const currentUser = await Moralis.User.current();
    if (currentUser) {
      // sendEmailVerification = async () => {
      //   let user = Moralis.User.current(); // delete this if setted globaly
      //   let userEmail = user.attributes.email;
      //   await Moralis.User.requestEmailVerification(email)
      //     .then(() => {
      //       //user will get an email with a link. If the user clicks on the link his user get authenticated.
      //       console.log("Successfully sent email verification email");
      //     })
      //     .catch((error) => {
      //       // Show the error message somewhere
      //       alert("Error: " + error.code + " " + error.message);
      //     });
      // };
      const file = new Moralis.File("avatar.jpg", { base64: data });
      await file.saveIPFS()
      currentUser.set("avatar", file.ipfs())
      await currentUser.save()

      let username = currentUser.get('username')
      let email = currentUser.get('email')
      let createdAt = currentUser.get('createdAt')
      let updatedAt = currentUser.get('updatedAt')
      let avatar = currentUser.get('avatar')
      setCargando(false)
      console.log('aasdasd ' + avatar)

      SimpleDialog.dismissAnimated('delete')
    } else {
      // show the signup or login page
    }

  }
  const _loaded = async (evt: ProgressEvent | any) => {

    await setFile64(evt.target.result)
  }
  const [onPassWordError, setOnPassWordError] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [register, setIsRegister] = useState(false)

  const [cargando, setCargando] = useState(false)
  const [selectAvatar, setAvatar] = useState(false)
  const [disable, setDisabled] = useState(true)

  useEffect(() => {
    if (!EmailValidator.validate(email) || email === undefined ? true : false || email === '' ? true : false || password === undefined ? true : false || password === '' ? true : false || password.length < 6 ? true : false) {

    } else {
    }
  }, [email, password])

  var [data, setData] = useState('')
  var [,] = useState('')
  function setFile64(file: any) {
    setData(file)


  }
  useEffect(() => {
    if (username === undefined ? true : false || username === '' ? true : false || password === undefined ? true : false || password === '' ? true : false || password.length < 6 ? true : false) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [email, password])

  return (<RX.View style={_styles.container} >
   
    <RX.View style={_styles.contentContainer}>
      <RX.View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>

   <RX.View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <RX.Text style={_styles.titleStyle}>{'Register'}
          </RX.Text>
          <RX.View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <RX.Text style={[_styles.Text3, { width: 225, marginTop:10,marginBottom: 5, textAlign: 'center', alignSelf: 'center', }]}>
              {'Create your account at Zatcoin.'}
            </RX.Text>

          </RX.View>
         
          <RX.View>
         <RX.Text style={[_styles.Text33, { width: 200, marginTop: 30, textAlign: 'left', alignSelf: 'flex-start', }]}>
        {'Username*'}
      </RX.Text>

              <RX.TextInput spellCheck={false} autoCorrect={false} placeholderTextColor={'white'} style={_styles.input} value={username} onChangeText={setUsername} placeholder="Enter your user name" />
              
         <RX.Text style={[_styles.Text33, { width: 200, marginTop: 20, textAlign: 'left', alignSelf: 'flex-start', }]}>
         {'E-mail Address*'}
      </RX.Text>

              <RX.TextInput spellCheck={false} autoCorrect={false} placeholderTextColor={'white'} style={_styles.input} value={email} onChangeText={setEmail} placeholder="Enter your E-mail" />
            
                    
         <RX.Text style={[_styles.Text33, { width: 200, marginTop: 20, textAlign: 'left', alignSelf: 'flex-start', }]}>
         {'Password*'}
      </RX.Text>
      <RX.TextInput spellCheck={false} autoCorrect={false} placeholderTextColor={'white'} style={_styles.input} value={password} secureTextEntry={true} onChangeText={setPassword} placeholder="Password" />
             
   <RX.Text style={[_styles.Text33, { width: 200, marginTop: 20, textAlign: 'left', alignSelf: 'flex-start', }]}>
         {'Repeat Password*'}
      </RX.Text>
      <RX.TextInput spellCheck={false} autoCorrect={false} placeholderTextColor={'white'} style={_styles.input} value={password2} secureTextEntry={true} onChangeText={setPassword2} placeholder="Repeat Password" />
 
             {!onPassWordError ? <RX.View style={{ height: 50, width: 200 }}>{''}</RX.View> : <RX.View style={{ height: 50, width: 200 }}> <RX.Text style={[_styles.Text3, { width: 200, marginTop: 50, textAlign: 'center', alignSelf: 'center', }]}>
                {'Password not Math'}
              </RX.Text></RX.View>}
            </RX.View>
           </RX.View> 

      </RX.View>
    </RX.View>
    <RX.View>
      {cargando ? <RX.View> <RX.Text style={[_styles.Text3, { width: 200, marginTop: 50, textAlign: 'center', alignSelf: 'center', }]}>
        {'Loading...'}
      </RX.Text></RX.View> :
        <RX.View>

        <RX.View style={{ paddingBottom: 20,justifyContent: 'center', alignItems: 'center' }}>
           
         
           
            <UI.Button onPress={onRegister}  style={{ content: [{ marginTop:20,marginBottom:10,width: 160, marginRight:0,borderWidth:0,borderRadius: 11,backgroundColor:'#0DCAF0', }], label: _styles.label }
                            } elevation={4} variant={"outlined"} label="Register" />
                              <UI.Button onPress={() => SimpleDialog.dismissAnimated('delete')}   style={{ content: [{ marginTop:0,marginLeft:0,marginBottom:20,width: 160, borderWidth:0,borderRadius: 11,backgroundColor:'#DC3545', }], label: _styles.label }
                                            } elevation={4} variant={"outlined"} label="Cancel" />
                       
          </RX.View>
        </RX.View>
      }

    </RX.View>

  </RX.View>



  );



  function onTerms() {
    SimpleDialog.dismissAnimated(_confirmDeleteDialogId)
    NavContextStore.navigateToTodoList(undefined, false, false, false, false, false, false, false, false, true)
  }
  async function onLogin() {

    if (username !== '' && password !== '' && disable != true) {

      const user = await Moralis.User.logIn(username, password);
      if (user) {
        CurrentUserStore.setLogin(true)
        let username = user.get('username')
        let email = user.get('email')
        let createdAt = user.get('createdAt')
        let updatedAt = user.get('updatedAt')
        let avatar = user.get('avatar')

        setCargando(false)
        CurrentUserStore.setLogin(true)
        CurrentUserStore.setConnect(true)
        SimpleDialog.dismissAnimated(_confirmDeleteDialogId)
      }

    } else {
      await setOnPassWordError(true)
    }

  }


  async function skip() {
    SimpleDialog.dismissAnimated(_confirmDeleteDialogId)
  }

  async function _onPressTodo() {
    setCargando(true)
    await Moralis.enableWeb3()
    try {



      await Moralis.authenticate().then(async (user: any) => {
      


        CurrentUserStore.setConnect(true)

        setCargando(false)
        CurrentUserStore.setLogin(true)
        SimpleDialog.dismissAnimated(_confirmDeleteDialogId)
        return
      })

      setCargando(false)
    } catch (error) {
      CurrentUserStore.setLogin(false)

      setCargando(false)
      return
    }

  };
  async function onRegister() {

    setCargando(true)
    if (password !== password2) {
      if (password.length <= 6) {

        CurrentUserStore.setError('Password too short')
        await setOnPassWordError(true)
      } else {
        await setOnPassWordError(true)

        CurrentUserStore.setError('Password dont Match')
      }
    } else {
      const Moralis = require('moralis');
      // Hooray! Let them use the app now.
      const now = Date.now().valueOf();
      const user = Moralis.User.current();
      console.log(user)
      const result = await Moralis.Cloud.run("setCredentials", { address:user.get('ethAddress'),email:email,username:username,password:password });
console.log(result)
      try {

        let username = user.get('name')
        let email = user.get('correo')
        let createdAt = user.get('createdAt')
        let updatedAt = user.get('updatedAt')
        let avatar = user.get('avatar')
        let eth = user.get('ethAddress')
        setCargando(false)
        setAvatar(true)
        CurrentUserStore.setConnect(true)

        SimpleDialog.dismissAnimated(_confirmDeleteDialogId)
        // Hooray! Let them use the app now.
      } catch (error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);

        CurrentUserStore.setError(error.message)
      }
    }

    setCargando(false)
  }
  async function loadChats(username: string) {

    const chats = await Moralis.Cloud.run('getAllChatsForUser', { username })
    CurrentUserStore.setChats(chats)

  }
  async function loadtems() {
    const ownedItems = await Moralis.Cloud.run('getAllItems')
    CurrentUserStore.setAllItems(ownedItems)
  }



  async function subscriptionItem() {
    const query = new Moralis.Query('Item');
    let subscription = await query.subscribe()
    subscription.on('create', onItemCreated)
  }
  async function onItemCreated(item: any) {

    var newItem: Item = {
      id: item.id,
      description: item.attributes.description,
      name: item.attributes.name,
      owner: item.attributes.owner,
      ownerEmail: item.attributes.ownerEmail,
      uri: item.attributes.uri,
      price: item.attributes.price,
      type: item.attributes.type,
      forSale: item.attributes.forSale,
      ownerId: item.attributes.ownerId,
    }
    let user = Moralis.User.current()
    if (user) {

      if (item.attributes.forSale === true) {

        CurrentUserStore.setAllItems([], newItem);

        if (user.get('username') === newItem.owner) {

          CurrentUserStore.setUserItems([], newItem);
        }
      } else {

        if (user.get('username') === newItem.owner) {

          CurrentUserStore.setUserItems([], newItem);
        }
      }

    }

  }
  async function subscriptionChat() {
    const query = new Moralis.Query('Chat');
    let subscription = await query.subscribe()
    subscription.on('create', onChatCreated2)
    subscription.on('update', onChatCreated)
  }

  async function onChatCreated2(item: any) {
    var userId1 = CurrentUserStore.getUser()
    var newChat: Chat = {
      id: item.id,
      sender: item.attributes.sender,
      receiver: item.attributes.receiver,
      messages: item.attributes.messages,
      senderId: item.attributes.senderId,
      receiverId: item.attributes.receiverId,

    }

    if (userId1.username == item.attributes.receiver || userId1.username == item.attributes.sender) {


      var count = newChat.messages.length

      CurrentUserStore.setChats([], newChat)
      CurrentUserStore.setMensajes([], newChat.messages[count - 1])
    }

  }
  async function onChatCreated(item: any) {
    // var userId1 = CurrentUserStore.getUser()
    var newChat: Chat = {
      id: item.id,
      sender: item.attributes.sender,
      receiver: item.attributes.receiver,
      messages: item.attributes.messages,
      senderId: item.attributes.senderId,
      receiverId: item.attributes.receiverId,

    }

    var count = newChat.messages.length
    if ((newChat.receiverId === CurrentUserStore.getAutores()[1].id && newChat.senderId === CurrentUserStore.getAutores()[0].id) || (newChat.receiverId === CurrentUserStore.getAutores()[0].id && newChat.senderId === CurrentUserStore.getAutores()[1].id)) {

      CurrentUserStore.setMensajes([], newChat.messages[count - 1])
    }


  }
  async function loadUserItems(username: string) {

    const params = { owner: username };
    const ownedItems = await Moralis.Cloud.run('getUserItems', params)
    CurrentUserStore.setUserItems(ownedItems)

  }
  function isLogin(e: RX.Types.SyntheticEvent) {

    setEmail('')
    setPassword('')
    setPassword2('')
    setUsername('')
    setIsRegister(false)
    e.stopPropagation();
  }

  function isRegister(e: RX.Types.SyntheticEvent) {

    setEmail('')
    setPassword('')
    setPassword2('')
    setUsername('')
    setIsRegister(true)
    e.stopPropagation();

  }
};

import * as RX from 'reactxp'
import { useEffect, useState } from 'react';
import SimpleDialog from '../controls/SimpleDialog';
import NavContextStore from '../stores/NavContextStore';

