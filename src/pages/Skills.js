import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { EvilIcons, MaterialIcons, Feather } from '@expo/vector-icons';

export default function Skills({ navigation, route }) {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

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
    // backgroundColor: '#D3D3D3',
    backgroundColor: '#FFFFFF',
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
    // paddingLeft: hp('0.8%'),
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 35,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingLeft: wp('2%'),
  },
  returnBtn: {
    position: 'absolute',
    left: 20.24,
    top: 50,
  },
  education: {
    // width: wp('100%'),
    // height: hp('70%'),
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    paddingTop: hp('5%'),
    paddingBottom: hp('5%'),
    flex: hp('3%'),
    alignItems: 'center',
    // justifyContent: 'center',
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
    fontSize: 18,
    paddingBottom: hp('1%'),
    paddingTop: hp('1%'),
    fontWeight: 'bold',
  },
});
