/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, Image, Alert,
  FlatList, PermissionsAndroid, TouchableOpacity, Dimensions
} from 'react-native';

// import { SearchBar } from 'react-native-elements';

import STTBar from "./component/STTBar";
import ContactItem from "./component/ContactItem";
import numberStandardData from "./component/Data";
var Contacts = require('react-native-contacts');

async function requestPermission(val) {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
      {
        'title': 'yêu cầu cho phép truy cập danh bạ',
        'message': 'Chúng tôi cần truy cập danh bạ của bạn'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Đã có quyền !");


      Contacts.getAll((err, contacts) => {
        if (err) console.log(err);

        val.setState({ DataContact: contacts });
        // console.log(contacts);

      });

    } else {
      console.log("Bug")
    }
  } catch (err) {
    console.warn(err)
  }
}



// type Props = {};
export default class App extends Component {
  async  componentWillMount() {
    await requestPermission(this);
  }

  constructor(props) {
    super(props);
    this.state = {
      DataContact: null,
      per: false
    }
  }

  _onPressInfo = () => {

  }
  _onPressEdit = () => {
    var listNumber = this.state.DataContact;
    // console.log(phoneSwap);

    for (let i = 0; i < listNumber.length; i++) {
      try {
        // console.log(this.state.DataContact);
        // console.log(this.state.DataContact[0].phoneNumbers[0].number); // number
        // console.log(listNumber[i].phoneNumbers[0].number);
        var temp = listNumber[i].phoneNumbers[0].number;
        // temp = temp.replace('-', '');
        // temp = this.replaceNumber(temp);
        // console.log(temp);
        
      } catch (error) {
        console.log('empty number');
      }
    }

    // Contacts.updateContact(someRecord, (err) => {
    //   if (err) throw err;
    //   // record updated
    // });
  }

  replaceNumber(number) {
     number =  number.replace(/-/g, '');
    var firtNumber = number.substr(0, 4);
    
    console.log(firtNumber);
    

    for (let i = 0; i < phoneSwap.length; i++) {
      if (firtNumber == phoneSwap[i].old) {
        console.log(number + " == " + phoneSwap[i].new );
        
        return number.replace(phoneSwap[i].old, phoneSwap[i].new);
      }
    }
    return number;
  }

  _onPressExportConacts = () => {
    Alert.alert(
      'Thông báo',
      'Bạn có muốn sao lưu danh bạ không  ?',
      [
        {
          text: 'Đồng ý',
          onPress: () => {
            Alert.alert('Thông báo ^^| ', 'ok ! xong, tính năng chưa hoàn thành');
          }
        },
        {
          text: 'Hủy',
          onPress: () => { },
          style: 'cancel'
        }
      ]
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <STTBar /> */}

        <FlatList style={styles.mainContent} data={this.state.DataContact} renderItem={
          (item, index) => {
            return (<ContactItem value={item} />);
          }
        } />

        <View style={styles.controller}>
          <View style={styles.conatinerImages}>
            <TouchableOpacity onPress={this._onPressEdit} style={styles.button}>
              <Image style={styles.imagesController} source={require('./images/checklist.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.conatinerImages}>
            <TouchableOpacity onPress={this._onPressExportConacts} style={styles.button}>
              <Image style={styles.imagesController} source={require('./images/download-2-icon.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.conatinerImages}>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.imagesController} source={require('./images/customer-service.png')} />
            </TouchableOpacity>
          </View>


        </View>
      </View>
    );
  }
}
var screen = Dimensions.get('window');

const styles = StyleSheet.create({
  conatinerImages: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bebebe',
  },
  ctTextInfo: {

  },
  imagesController: {
    width: 32,
    height: 32,
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  controller: {
    height: 50,
    borderWidth: 1,
    borderColor: '#bebebe',
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
  },
  button: {


  }
});
