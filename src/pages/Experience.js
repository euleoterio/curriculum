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

export default function Experience({ navigation, route }) {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

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
            name="briefcase-variant-outline"
            size={50}
            color="white"
          />
          <Text style={styles.title}>E x p e r i ê n c i a</Text>
        </View>
      </View>

      <View style={styles.experience}>
        <ScrollView>
          {/* LayoutAnimation */}
          <TouchableOpacity
            style={styles.experienceBox}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              setExpanded(!expanded);
            }}
          >
            <Text style={styles.experienceTitle}>S i c r e d i</Text>
            <Feather
              name="plus"
              // size={30}
              // color="black"
              style={styles.experienceTitle}
            />
          </TouchableOpacity>
          {expanded && (
            <View style={styles.tile}>
              <Text style={styles.experienceTxt}>Analista de Cognição</Text>
              <Text style={styles.experienceTime}>
                Ago. de 2019 - o momento
              </Text>
              <Text style={styles.experienceDesc}>
                - Manutenção e inclusão de novas actions no orquestrador,
                utilizando Kotlin.{'\n'}- Criação e manutenção das chamadas de
                serviços para utilização das API's da CSU, em Java. {'\n'}-
                Criação e manutenção de intenções, diálogos, fluxos, chamada de
                serviços (api) para o chat interno e para WhatsApp utilizando o
                IBM Watson Assistant.{'\n'} - Promoção de ambientes utilizando
                scripts em Node e Python.
              </Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.experienceBox}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              setExpanded1(!expanded1);
            }}
          >
            <Text style={styles.experienceTitle}>T i v i t</Text>
            <Feather
              name="plus"
              // size={30}
              // color="black"
              style={styles.experienceTitle}
            />
          </TouchableOpacity>
          {expanded1 && (
            <View style={styles.tile}>
              <Text style={styles.experienceTxt}>Analista de Processos</Text>
              <Text style={styles.experienceTime}>
                Jan. de 2019 - Ago. de 2019
              </Text>
              <Text style={styles.experienceDesc}>
                - Levantamento e coleta de insumos para criação de intenções
                para chatbot.{'\n'}- Curadoria das informações que passam pelo
                Theo, chatbot do Sicredi, principalmente sobre Cartões.{'\n'}-
                Criação das intenções, diálogos e fluxos para chatbot, chamada
                de serviços (api) utilizando o Watson Assistant, Inteligência
                artificial da IBM.
                {'\n'}- Acompanhamento da acuracidade e retenção das interações
                que passam pelo chat.
                {'\n'}- Suporte aos atendentes do chat, para dúvidas e erros em
                relação ao chatbot.
              </Text>
              <Text style={styles.experienceTxt}>Suporte técnico</Text>
              <Text style={styles.experienceTime}>
                Fev. de 2018 - Dez. de 2018
              </Text>
              <Text style={styles.experienceDesc}>
                - Atendimento aos colaboradores Sicredi.{'\n'}- Suporte ao
                colaborador para solicitação e ajustar os acessos a sistemas,
                via IDM Gestão de Identidades (sistema interno).
                {'\n'}- Esclarecer dúvidas relativas as aplicações suportadas
                pela IBM.
                {'\n'}- Acompanhamento e avaliação dos incidentes e requisições,
                transferência para tratamento das áreas responsáveis e análise
                do retorno da solução.
                {'\n'}- Atendimento via ligação, chat, base (USD) e realização
                de atendimentos ativos.
              </Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.experienceBox}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              setExpanded2(!expanded2);
            }}
          >
            <Text style={styles.experienceTitle}>I B M</Text>
            <Feather
              name="plus"
              // size={30}
              // color="black"
              style={styles.experienceTitle}
            />
          </TouchableOpacity>
          {expanded2 && (
            <View style={styles.tile}>
              <Text style={styles.experienceTxt}>Operador de computador</Text>
              <Text style={styles.experienceTime}>
                Set. de 2017 - Jan. de 2018
              </Text>
              <Text style={styles.experienceDesc}>
                - Atendimento aos colaboradores Sicredi. {'\n'}- Suporte ao
                colaborador para solicitação e ajustar os acessos a sistemas,
                via IDM Gestão de Identidades (sistema interno). {'\n'}-
                Esclarecer dúvidas relativas as aplicações suportadas pela IBM.{' '}
                {'\n'}- Acompanhamento e avaliação dos incidentes e requisições,
                assim como transferência para tratamento das áreas responsáveis
                e análise do retorno da solução para garantir a satisfação do
                colaborador.
              </Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.experienceBox}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              setExpanded3(!expanded3);
            }}
          >
            <Text style={styles.experienceTitle}>C a v i n a t t o</Text>
            <Feather
              name="plus"
              // size={30}
              // color="black"
              style={styles.experienceTitle}
            />
          </TouchableOpacity>
          {expanded3 && (
            <View style={styles.tile}>
              <Text style={styles.experienceTxt}>Auxiliar de Escritório</Text>
              <Text style={styles.experienceTime}>
                Jun. de 2013 - Dez. de 2013
              </Text>
              <Text style={styles.experienceDesc}>
                - Auxiliar colaboradores no uso dos computadores.{'\n'}- Reparos
                no sistema, impressoras e software interno.{'\n'}- Auxilio para
                uso do sistema interno.{'\n'}- Backups.
              </Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.experienceBox}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
              setExpanded4(!expanded4);
            }}
          >
            <Text style={styles.experienceTitle}>KS P i s t õ e s</Text>
            <Feather
              name="plus"
              // size={30}
              // color="black"
              style={styles.experienceTitle}
            />
          </TouchableOpacity>
          {expanded4 && (
            <View style={styles.tile}>
              <Text style={styles.experienceTxt}>Jovem Aprendiz</Text>
              <Text style={styles.experienceTime}>
                Jan. de 2011 - Dez. de 2012
              </Text>
              <Text style={styles.experienceDesc}>
                - Auxiliar de eletricista dentro da manutenção industrial, troca
                de resistências elétricas (fornos de espera), manutenção
                focalizada fundição - manutenção elétrica FDU.
                {'\n'}- Montagem de painéis elétricos.
              </Text>
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
    paddingLeft: wp('3%'),
  },
  returnBtn: {
    position: 'absolute',
    left: 20.24,
    top: 50,
  },
  experience: {
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
  experienceBox: {
    paddingBottom: hp('1%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#000000',
    elevation: 2,
    width: wp('80%'),
  },
  experienceTitle: {
    fontFamily: 'Helvetica',
    fontSize: 28,
    paddingRight: wp('3%'),
    paddingTop: hp('1%'),
  },
  experienceTxt: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    // paddingBottom: hp('1%'),
    paddingTop: hp('1%'),
    fontWeight: 'bold',
  },
  experienceDesc: {
    fontSize: 14,
    width: wp('70%'),
    // height: hp('70%'),
    paddingBottom: hp('1%'),
  },
  experienceTime: {
    fontSize: 13,
    width: wp('70%'),
    // height: hp('70%'),
    paddingBottom: hp('1%'),
    color: '#808080',
  },
});
