

import { Fonts, FontSizes, } from '../app/Styles';


const _styles = {
  slider: RX.Styles.createViewStyle({
    alignSelf: 'center',
    overflow: 'hidden' // for custom animations
  }),
  titleStyle: RX.Styles.createTextStyle({
    font: Fonts.displayRegular,
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
    color: 'black',
  }),
  Text: RX.Styles.createTextStyle({
    fontSize: 18,
    font: Fonts.displayRegular,
    color: 'black',
  }),
  Text3: RX.Styles.createTextStyle({
    fontSize: 14,
    font: Fonts.displayRegular,
    color: 'gray',
  }),
  input: RX.Styles.createTextInputStyle({
    font: Fonts.displayBold,
    fontSize: 14,
    color: 'white',
    marginBottom: 20,
    paddingLeft: 20,
    textAlign: 'left',
    width: 250, marginTop: 10, backgroundColor: '#181818', borderRadius: 11, height: 47
  }),
}

import Dropzone from 'react-dropzone';

import * as UI from '@sproutch/ui';

const Moralis = require('moralis');
const serverUrl = "https://22ngrkoobfze.usemoralis.com:2053/server";
const appId = "2LLQ1R7nsajdw124wShzAv0LvR0HsAKxnpfHxga9";
Moralis.start({ serverUrl, appId });

import { FaUpload } from "@react-icons/all-files/fa/FaUpload";
export const EditProfile = ({
}: {

}) => {

  var [file, setFile] = useState<any>('')

  var [data, setData] = useState('')
  function setFileUpload(file: any) {


    setFile(URL.createObjectURL(file))
  }
  function setFile64(file: any) {
    setData(file)


  }

  const [username, setUsername] = useState(Moralis.User.current().get('username'))

  async function _onDropFile2(files: File[]) {
    let blob = new Blob(files);
    setFileUpload(blob)
    var reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onloadend = _loaded


  }

  const [cargando, setCargando] = useState(false)
  async function save(e: RX.Types.SyntheticEvent) {

    setCargando(true)
    var user = await Moralis.User.current()
    let avatar = ''
    if (data) {
      const file = await new Moralis.File("avatar.jpg", { base64: data });
      await file.save()
      user.set("avatar", file)

      avatar = user.get('avatar')
      console.log("avatar " + avatar)
    }


    user.set("username", username);

    await user.save()
    let createdAt = user.get('createdAt')
    let sessionToken = user.get('sessionToken')
    let updatedAt = user.get('updatedAt')
    let address = user.get('ethAddress')
    CurrentUserStore.setUser(username, '', createdAt, sessionToken, updatedAt, avatar, address)



    setCargando(false)





    e.stopPropagation();

  }
  const _loaded = async (evt: ProgressEvent | any) => {

    await setFile64(evt.target.result)
  }
  return (<RX.View style={{ flex: 1, backgroundColor: '#434040', alignItems: 'center', justifyContent: 'center' }}>
    <UI.Paper elevation={10} style={{ root: { borderRadius: 18, width: 700, height: 600, alignItems: 'center', justifyContent: 'center' } }} >
      <RX.Text style={_styles.titleStyle}>{'Edit Profile'}</RX.Text>
      <RX.Text style={[_styles.Text, { width: 300, marginTop: 20, textAlign: 'center', color: 'black', alignSelf: 'center', }]}>
        {'Username'}
      </RX.Text>
      <RX.TextInput spellCheck={false} autoCorrect={false} placeholderTextColor={'white'} style={_styles.input} value={username} onChangeText={setUsername} placeholder="Username" />
      {data !== '' ? <RX.View style={{ height: 200, width: 400 }}>
        <RX.Image style={{ height: 200, width: 400 }} source={file} />
      </RX.View> :
        <RX.View style={{
          borderStyle: 'dashed',
          justifyContent: 'center', alignItems: 'center',
          marginTop: 20, paddingRight: 10, marginLeft: 50, marginRight: 50,
          paddingTop: 10, height: 200, width: 300, borderWidth: 2, borderRadius: 10, marginBottom: 20, borderColor: 'black'
        }}>

          <Dropzone style={{ flex: 80, flexDirection: 'column', height: 200, width: 300, justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch', }}
            onDrop={_onDropFile2}>
            <RX.View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <RX.Text style={[_styles.Text, { marginTop: 20, width: 300, textAlign: 'center', color: 'black', alignSelf: 'center', }]}>
                {'Drag & drop media file.'}
              </RX.Text>

              <FaUpload style={{ width: 40, height: 40, marginTop: 20, alignSelf: 'center' }} />
              <RX.Text style={[_styles.Text3, { width: 200, marginTop: 20, textAlign: 'center', alignSelf: 'center', }]}>
                {'Max file size 60mb'}
              </RX.Text>

            </RX.View>
          </Dropzone>

        </RX.View>
      }
      {cargando ? <UI.Spinner style={{ marginTop: 20 }} size={'small'} color={'black'} /> : <UI.Button onPress={save} style={{ root: [{ marginTop: 10 }], content: [{ width: 160, borderRadius: 11, }], label: _styles.label }
      } elevation={4} variant={"outlined"} label="Save" />}

    </UI.Paper>
  </RX.View >


  );

};

import * as RX from 'reactxp'
import { useState } from 'react';
import CurrentUserStore from '../stores/CurrentUserStore';

