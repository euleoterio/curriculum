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
          Trabalho com Inteligência Artificial desde 2018 e atualmente me
          desenvolvendo cada vez mais para se tornar um Desenvolvedor Fullstack.
          Sou apaixonado por tecnologia, programação e incentivar pessoas.
          {'\n'}
          {'\n'}
          Gosto de programar(👨🏻‍💻), ouvir música (🎵), tirar fotos (📷), assistir
          filmes (🎞️) e séries (📺), jogar futebol (⚽️).
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },
  infos: {
    flex: hp('1%'),
    backgroundColor: '#363636',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: wp('80%'),
    paddingTop: hp('5%'),
    paddingLeft: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingLeft: wp('5%'),
  },
  returnBtn: {
    position: 'absolute',
    left: 20.24,
    top: 50,
  },
  about: {
    flex: hp('3%'),
    alignItems: 'center',
  },
  aboutTxt: {
    fontSize: 18,
    paddingTop: hp('10%'),
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
  },
});
