import { React } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';


export default function CurrentWeather({weatherData}) {

  const { 
    wrapper, 
    container, 
    tempStyles, 
    feels, 
    highLowWrapper, 
    highLow, 
    bodyWrapper, 
    description, 
    message
  } = styles

  const { main: {temp, feels_like, temp_max, temp_min}, weather } = weatherData

  const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView 
      style={[
        wrapper, 
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather 
          name={weatherType[weatherCondition]?.icon} 
          size={100} 
          color='white' 
        />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>

        <RowText
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
          messageOne={`High: ${temp_max} `} 
          messageTwo={`Low: ${temp_min}`}
        />
      </View>

      <RowText
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
        messageOne={weather[0]?.description} 
        messageTwo={weatherType[weatherCondition]?.message}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    fontSize: 48,
    color: 'black'
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  highLow: {
    fontSize: 20,
    color: 'black'
  },
  bodyWrapper: {
    justifyContent:'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 42,
  },
  message: {
    fontSize: 25
  }
})