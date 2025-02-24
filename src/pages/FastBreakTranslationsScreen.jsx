import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import FastBreakHeader from '../components/FastBreakHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <FastBreakHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('NHL', '03.05 20:30', 'Toronto Maple Leafs \n' + 'Edmonton Oilers')}
        {renderBroadcast('KHL', '05.05 18:00', 'SKA St. Petersburg \n' + 'Avangard Omsk')}
        {renderBroadcast('SHL', '07.05 19:00', 'Frölunda HC \n' + 'Luleå HF')}
        {renderBroadcast('Liiga', '09.05 18:45', 'Tappara \n' + 'HIFK')}
        {renderBroadcast('DEL', '11.05 20:15', 'Eisbären Berlin \n' + 'Adler Mannheim')}
        {renderBroadcast('NLA', '13.05 19:30', 'ZSC Lions \n' + 'EV Zug')}
        {renderBroadcast('EIHL', '15.05 17:00', 'Belfast Giants \n' + 'Cardiff Devils')}
        {renderBroadcast('Czech Extraliga', '17.05 18:30', 'HC Sparta Praha \n' + 'HC Kometa Brno')}
        {renderBroadcast('AHL', '19.05 20:00', 'Hershey Bears \n' + 'Rochester Americans')}
        {renderBroadcast('Slovak Extraliga', '21.05 19:00', 'HC Košice \n' + 'HK Nitra')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    elevation: 5,
    paddingLeft: 20,
  },
  league: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    width: '40%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.white,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    paddingVertical: 5,
    backgroundColor: COLORS.main,
  },
});
