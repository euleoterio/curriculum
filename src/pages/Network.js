import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  EvilIcons,
  SimpleLineIcons,
  AntDesign,
  Entypo,
} from '@expo/vector-icons';

export default function Network({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.infos}>
        <TouchableOpacity style={styles.returnBtn}>
          <EvilIcons
            name="arrow-left"
            size={40}
            color="white"
            onPress={() => navigation.navigate(route.params.page)}
          />
        </TouchableOpacity>

        <View style={styles.box}>
          <SimpleLineIcons
            name="user-follow"
            style={styles.title}
            size={50}
            color="white"
          />
          <Text style={styles.title}>R e d e s</Text>
        </View>
      </View>

      <View style={styles.contacts}>
        <TouchableOpacity
          style={styles.contactsBox}
          onPress={() => {
            Linking.openURL('http://github.com/euleoterio');
          }}
        >
          <AntDesign name="github" size={40} color="black" />
          <Text style={styles.contactsTxt}>G i t h u b</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contactsBox}
          onPress={() => {
            Linking.openURL(
              'http://www.linkedin.com/in/vinicius-euleoterio-38147ab1/'
            );
          }}
        >
          <Entypo name="linkedin-with-circle" size={40} color="black" />
          <Text style={styles.contactsTxt}>L i n k e d i n</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.contactsBox}
          onPress={() => {
            Linking.openURL('http://instagram.com/euleoterio');
          }}
        >
          <Entypo name="instagram-with-circle" size={40} color="black" />
          <Text style={styles.contactsTxt}>I n s t a g r a m</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    flexDirection: 'column',
  },
  infos: {
    flex: hp('1%'),
    // width: wp('100%'),
    // height: hp('30%'),
    backgroundColor: '#363636',
    flexDirection: 'column',
    // paddingTop: hp('5%'),
    // paddingLeft: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: wp('80%'),
    paddingTop: hp('5%'),
    paddingLeft: hp('0.8%'),
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 50,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingLeft: wp('3%'),
  },
  returnBtn: {
    position: 'absolute',
    left: 20.24,
    top: 50,
  },
  contacts: {
    // width: wp('100%'),
    // height: hp('70%'),
    flex: hp('3%'),
    alignItems: 'center',
    // justifyContent: 'center',
  },
  contactsBox: {
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    paddingTop: hp('10%'),
    // paddingBottom: hp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactsTxt: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    paddingLeft: wp('3%'),
  },
});
