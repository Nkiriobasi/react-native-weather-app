import { React } from 'react';
import { 
    StyleSheet, 
    SafeAreaView, 
    FlatList, 
    StatusBar, 
    ImageBackground
} from 'react-native';
import ListItem from '../components/ListItem';



export default function UpcomingWeather({weatherData}) {

    const renderItem = ({item}) => {
        <ListItem 
            condition={item.weather[0]?.main} 
            dt_txt={item.dt_txt} 
            max={item.main.temp_max} 
            min={item.main.temp_min} 
        />
    }

    const { container, image } = styles

  return (
    <SafeAreaView style={container}>
        <ImageBackground 
            source={require('../../assets/upcoming-background.jpg')} 
            style={image}
        >
            <FlatList 
                data={weatherData}
                renderItem={renderItem}
                keyExtractor={item => item.dt_txt}
            />
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  image: {
    flex: 1
  }
})