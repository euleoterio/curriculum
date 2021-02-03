import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Informações pessoais */}
      <View style={styles.infos}>
        <View style={styles.top}>
          <Image
            style={{
              width: hp('19%'),
              height: hp('19%'),
              borderRadius: 100,
              // marginLeft: wp('3%'),
              marginTop: hp('10%'),
              paddingLeft: wp('2%'),
            }}
            source={{
              uri: `http://github.com/euleoterio.png`,
            }}
          />
          <View style={styles.viewName}>
            <Text style={styles.name}>Vinicius Euleoterio</Text>
            <Text style={styles.sub}>Desenvolvedor | Chatbots</Text>
          </View>
        </View>
      </View>

      {/* Experiências */}
      <View style={styles.exp}>
        <TouchableOpacity
          style={styles.viewExp}
          onPress={() => navigation.navigate('About', { page: 'HomeScreen' })}
        >
          <MaterialCommunityIcons
            name="script-text-outline"
            size={hp('3.5%')}
            color="black"
          />
          <Text style={styles.title}>Sobre</Text>
        </TouchableOpacity>
        <View style={styles.viewExp}>
          <MaterialCommunityIcons
            name="briefcase-variant-outline"
            size={hp('3.5%')}
            color="black"
          />
          <Text style={styles.title}>Experiência</Text>
        </View>
        <View style={styles.viewExp}>
          <MaterialCommunityIcons
            name="school-outline"
            size={hp('3.5%')}
            color="black"
          />
          <Text style={styles.title}>Escolaridade</Text>
        </View>
        <View style={styles.viewExp}>
          <MaterialIcons name="computer" size={hp('3.5%')} color="black" />
          <Text style={styles.title}>Habilidades</Text>
        </View>

        <TouchableOpacity
          style={styles.viewExp}
          onPress={() => navigation.navigate('Network', { page: 'HomeScreen' })}
        >
          <SimpleLineIcons name="user-follow" size={hp('3.5%')} color="black" />
          <Text style={styles.title}>Redes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewExp}
          onPress={() =>
            navigation.navigate('Contacts', { page: 'HomeScreen' })
          }
        >
          <MaterialCommunityIcons
            name="contacts-outline"
            size={hp('3.5%')}
            color="black"
          />

          <Text style={styles.title}>Contatos</Text>
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
    // justifyContent: 'center',
    // alignItems: 'stretch',
  },
  infos: {
    flex: hp('1%'),
    // width: wp('100%'),
    // height: hp('30%'),
    backgroundColor: '#363636',
    flexDirection: 'column',
    // paddingTop: hp('5%'),
    paddingLeft: wp('10%'),
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  top: {
    // backgroundColor: 'red',
    width: wp('80%'),
    height: hp('20%'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewName: {
    justifyContent: 'center',
    // alignItems: 'stretch',
    // marginTop: hp('5%'),
    marginLeft: wp('2%'),
    // top: hp('5%'),
    // flex: hp('20%'),
    // backgroundColor: 'red',
    // width: wp('50%'),
    // height: hp('50%'),
  },
  name: {
    fontFamily: 'Helvetica',
    fontSize: 25,
    color: '#FFFFFF',
    top: hp('8%'),
    fontWeight: 'bold',
    // marginLeft: wp('5%'),
    alignSelf: 'center',
  },
  sub: {
    color: '#FFFFFF',
    top: hp('9%'),
    // paddingTop: hp(3),
    fontSize: 15,
    // marginLeft: wp('10%'),
    alignSelf: 'center',
  },
  exp: {
    // width: wp('100%'),
    // height: hp('70%'),
    flex: hp('3%'),
    alignItems: 'center',
    // justifyContent: 'center',
  },
  viewExp: {
    width: wp('70%'),
    flexDirection: 'row',
    top: hp('15%'),
    borderColor: '#000',
    borderBottomWidth: 1,
    paddingLeft: wp('10%'),
    paddingTop: wp('2%'),
    paddingBottom: wp('2%'),
    // justifyContent: 'center',
    // paddingLeft: wp('15%'),
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    paddingLeft: hp('5%'),
    justifyContent: 'space-around',
    // alignItems: 'stretch',
  },
});
