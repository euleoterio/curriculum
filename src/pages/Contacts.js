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
  MaterialCommunityIcons,
  Octicons,
  Entypo,
  FontAwesome,
} from '@expo/vector-icons';

export default function Contacts({ navigation, route }) {
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
            name="contacts-outline"
            size={50}
            color="white"
          />
          <Text style={styles.title}>C o n t a t o s</Text>
        </View>
      </View>

      <View style={styles.contacts}>
        <TouchableOpacity
          style={styles.contactsBox}
          onPress={() => {
            Linking.openURL(
              'http://api.whatsapp.com/send?phone=5551982895068&text=Ol%C3%A1,%20Vinicius%20Euleoterio'
            );
          }}
        >
          <FontAwesome name="whatsapp" size={40} color="black" />
          <Text style={styles.contactsTxt}>W h a t s a p p </Text>
        </TouchableOpacity>
        <View style={styles.contactsBox}>
          <Entypo name="email" size={40} color="black" />
          <Text style={styles.contactsTxt}>
            vinicius.euleoterio@hotmail.com
          </Text>
        </View>
        <View style={styles.contactsBox}>
          <Octicons name="location" size={40} color="black" />
          <Text style={styles.contactsTxt}>
            Rua Santiago São Leopoldo, RS, 93044-200
          </Text>
        </View>
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
    paddingLeft: hp('0.8%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 35,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingLeft: wp('5%'),
  },
  returnBtn: {
    position: 'absolute',
    left: 20.24,
    top: 50,
  },
  contacts: {
    flex: hp('3%'),
    alignItems: 'center',
  },
  contactsBox: {
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
    paddingTop: hp('10%'),
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
