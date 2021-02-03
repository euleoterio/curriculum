import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function About({ navigation, route }) {
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
          <MaterialCommunityIcons
            style={styles.title}
            name="script-text-outline"
            size={50}
            color="white"
          />
          <Text style={styles.title}>S o b r e</Text>
        </View>
      </View>

      <View style={styles.about}>
        <Text style={styles.aboutTxt}>
          Trabalho com inteligência artificial para criação de bots que melhorem
          o atendimento ao cliente. {'\n'}
          {'\n'}Procurando sempre aprimorar o conhecimento, principalmente em
          relação a programação.
        </Text>
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
    flexDirection: 'row',
    // paddingTop: hp('5%'),
    // paddingLeft: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: wp('80%'),
    paddingTop: hp('5%'),
    paddingLeft: hp('2%'),
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
  about: {
    // width: wp('100%'),
    // height: hp('70%'),
    flex: hp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutTxt: {
    fontSize: 20,
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    // paddingTop: hp('8%'),
    // paddingBottom: hp('5%'),
  },
});
