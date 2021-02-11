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
import { EvilIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function Education({ navigation, route }) {
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
          <MaterialCommunityIcons
            style={styles.title}
            name="school-outline"
            size={50}
            color="white"
          />
          <Text style={styles.title}>E d u c a ç ã o</Text>
        </View>
      </View>

      <View style={styles.education}>
        <ScrollView>
          {/* LayoutAnimation */}
          <TouchableOpacity
            style={styles.educationBox}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              setExpanded(!expanded);
            }}
          >
            <Text style={styles.educationTitle}>Formação Acadêmica</Text>
            <Feather name="plus" style={styles.educationTitle} />
          </TouchableOpacity>
          {expanded && (
            <View style={styles.tile}>
              <Text style={styles.educationTxt}>Estácio</Text>
              <Text style={styles.educationDesc}>
                Análise de desenvolvimento de sistemas
              </Text>
              <Text style={styles.educationTime}>Cursando</Text>
              <Text style={styles.educationTxt}>
                Colégio Técnico de Limeira - Unicamp
              </Text>
              <Text style={styles.educationDesc}>Técnico em Informática</Text>
              <Text style={styles.educationTime}>2011 - 2013</Text>
              <Text style={styles.educationTxt}>SENAI SP</Text>
              <Text style={styles.educationDesc}>
                Eletricista de manutenção
              </Text>
              <Text style={styles.educationTime}>2011 - 2013</Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.educationBox}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              setExpanded1(!expanded1);
            }}
          >
            <Text style={styles.educationTitle}>Licenças e certificados</Text>
            <Feather name="plus" style={styles.educationTitle} />
          </TouchableOpacity>
          {expanded1 && (
            <View style={styles.tile}>
              <Text style={styles.educationTxt}>
                Bootcamp Programador de Software Iniciante
              </Text>
              <Text style={styles.educationDesc}>
                Instituto de Gestão e Tecnologia da Informação
              </Text>
              <Text style={styles.educationTime}>Emitido em set. de 2020</Text>
              <Text style={styles.educationTxt}>Bootcamp Full Stack</Text>
              <Text style={styles.educationDesc}>
                Instituto de Gestão e Tecnologia da Informação
              </Text>
              <Text style={styles.educationTime}>Emitido em ago. de 2020</Text>
              <Text style={styles.educationTxt}>
                Trilha Inteligência Artificial
              </Text>
              <Text style={styles.educationDesc}>
                The Developers Conference
              </Text>
              <Text style={styles.educationTime}>Emitido em dez. de 2018</Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.educationBox}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              setExpanded2(!expanded2);
            }}
          >
            <Text style={styles.educationTitle}>Cursos</Text>
            <Feather name="plus" style={styles.educationTitle} />
          </TouchableOpacity>
          {expanded2 && (
            <View style={styles.tile}>
              <Text style={styles.educationTxt}>
                Nodejs + Express + Mongodb
              </Text>
              <Text style={styles.educationTime}>Carga: 2h</Text>
              <Text style={styles.educationTxt}>
                Gerência de configuração de software com Git
              </Text>
              <Text style={styles.educationTime}>Carga: 1:30h</Text>
              <Text style={styles.educationTxt}>
                Algoritmos e Lógica de programação
              </Text>
              <Text style={styles.educationTime}>Carga: 1:30h</Text>
              <Text style={styles.educationTxt}>
                Application Development with IBM WATSON
              </Text>
              <Text style={styles.educationTime}>Carga: 2:30h</Text>
              <Text style={styles.educationTxt}>
                Aprenda Kotlin do zero - Módulo Básico
              </Text>
              <Text style={styles.educationTime}>Carga: 4h</Text>
              <Text style={styles.educationTxt}>
                Build Chatbots with Watson Conversation
              </Text>
              <Text style={styles.educationTxt}>
                Fundamentals of Watson Analytics
              </Text>
              <Text style={styles.educationTime}>Carga: 1h</Text>
              <Text style={styles.educationTxt}>IBM Cloud Essentials</Text>
              <Text style={styles.educationTxt}>
                Introdução à linguagem python
              </Text>
              <Text style={styles.educationTime}>Carga: 2:30h</Text>
              <Text style={styles.educationTxt}>Introdução ao Python</Text>
              <Text style={styles.educationTime}>Carga: 2h</Text>
              <Text style={styles.educationTxt}>Python para Iniciantes</Text>
              <Text style={styles.educationTime}>Carga: 1h</Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.educationBox}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              setExpanded3(!expanded3);
            }}
          >
            <Text style={styles.educationTitle}>Idiomas</Text>
            <Feather name="plus" style={styles.educationTitle} />
          </TouchableOpacity>
          {expanded3 && (
            <View style={styles.tile}>
              <Text style={styles.educationTxt}>Inglês</Text>
              <Text style={styles.educationTime}>Nível avançado</Text>
              <Text style={styles.educationTxt}>Português</Text>
              <Text style={styles.educationTime}>Nativo</Text>
            </View>
          )}
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
    fontSize: 33,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingLeft: wp('5%'),
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
    fontSize: 25,
    paddingRight: wp('3%'),
    paddingTop: hp('1%'),
  },
  educationTxt: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    paddingTop: hp('1%'),
    fontWeight: 'bold',
  },
  educationDesc: {
    fontSize: 14,
    width: wp('70%'),
    paddingBottom: hp('1%'),
  },
  educationTime: {
    fontSize: 13,
    width: wp('70%'),
    paddingBottom: hp('1%'),
    color: '#808080',
  },
});
