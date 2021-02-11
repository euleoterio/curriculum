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
              marginTop: hp('10%'),
              paddingLeft: wp('2%'),
            }}
            source={{
              uri: `http://github.com/euleoterio.png`,
            }}
          />
          <View style={styles.viewName}>
            <Text style={styles.name}>Vinicius Euleoterio</Text>
            <Text style={styles.sub}>Desenvolvedor | IA</Text>
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
        <TouchableOpacity
          style={styles.viewExp}
          onPress={() =>
            navigation.navigate('Experience', { page: 'HomeScreen' })
          }
        >
          <MaterialCommunityIcons
            name="briefcase-variant-outline"
            size={hp('3.5%')}
            color="black"
          />
          <Text style={styles.title}>Experiência</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewExp}
          onPress={() =>
            navigation.navigate('Education', { page: 'HomeScreen' })
          }
        >
          <MaterialCommunityIcons
            name="school-outline"
            size={hp('3.5%')}
            color="black"
          />
          <Text style={styles.title}>Escolaridade</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.viewExp}
          onPress={() => navigation.navigate('Skills', { page: 'HomeScreen' })}
        >
          <MaterialIcons name="computer" size={hp('3.5%')} color="black" />
          <Text style={styles.title}>Habilidades</Text>
        </TouchableOpacity>

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
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },
  infos: {
    flex: hp('1%'),
    backgroundColor: '#363636',
    flexDirection: 'column',
    paddingLeft: wp('10%'),
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  top: {
    width: wp('80%'),
    height: hp('20%'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewName: {
    justifyContent: 'center',
    marginLeft: wp('2%'),
  },
  name: {
    fontFamily: 'Helvetica',
    fontSize: 25,
    color: '#FFFFFF',
    top: hp('8%'),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  sub: {
    color: '#FFFFFF',
    top: hp('9%'),
    fontSize: 15,
    alignSelf: 'center',
  },
  exp: {
    flex: hp('3%'),
    alignItems: 'center',
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
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    paddingLeft: hp('5%'),
    justifyContent: 'space-around',
  },
});
