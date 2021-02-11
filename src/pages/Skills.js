import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { EvilIcons, MaterialIcons, Feather } from '@expo/vector-icons';

export default function Skills({ navigation, route }) {
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
          <MaterialIcons
            style={styles.title}
            name="computer"
            size={50}
            color="white"
          />
          <Text style={styles.title}>H a b i l i d a d e s</Text>
        </View>
      </View>

      <View style={styles.education}>
        <ScrollView>
          <View style={styles.tile}>
            <Text style={styles.educationTxt}>- React Native - Node.js</Text>
            <Text style={styles.educationTxt}>
              - Inteligência Artificial - JavaScript
            </Text>
            <Text style={styles.educationTxt}>- Metodologias ágeis - JSON</Text>
            <Text style={styles.educationTxt}>
              - MongoDB - Docker - MongoDB - CSS
            </Text>
            <Text style={styles.educationTxt}>
              - Kotlin - IBM Cloud - Python - Java - Git
            </Text>
            <Text style={styles.educationTxt}>
              - Jenkins - React.js - HTML - Jupyer
            </Text>
            <Text style={styles.educationTxt}>
              - Spring boot - APIs - Chatbot
            </Text>
            <Text style={styles.educationTxt}>
              - IBM Watson Assistant - Express.js
            </Text>
          </View>
        </ScrollView>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: wp('80%'),
    paddingTop: hp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingLeft: wp('3%'),
  },
  returnBtn: {
    position: 'absolute',
    left: 20.24,
    top: 50,
  },
  education: {
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    paddingTop: hp('5%'),
    paddingBottom: hp('5%'),
    flex: hp('3%'),
    alignItems: 'center',
  },
  educationBox: {
    paddingBottom: hp('1%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#000000',
    elevation: 2,
    width: wp('80%'),
  },
  educationTitle: {
    fontFamily: 'Helvetica',
    fontSize: 28,
    paddingRight: wp('3%'),
    paddingTop: hp('1%'),
  },
  educationTxt: {
    fontFamily: 'Helvetica',
    fontSize: 17,
    paddingBottom: hp('1%'),
    paddingTop: hp('1%'),
    fontWeight: 'bold',
  },
});
