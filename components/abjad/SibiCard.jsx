import { View, Text, StyleSheet, useWindowDimensions} from 'react-native'
import React, { useEffect,useState } from 'react'
import * as Progress from 'react-native-progress';

const SibiCard = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function updateProgress() {
      setProgress((currentProgress) => {
        if(currentProgress < 1) {
          setTimeout(updateProgress, 500)
        };
        return currentProgress + 0.01
      })
    };

    updateProgress()

    },[])

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={{color: '#fff', fontWeight: '700', fontSize:18}}>
            Sistem Bahasa Isyarat Indonesia
          </Text>
          <Progress.Bar 
            progress={progress} 
            height={9} 
            width={250} 
            color='#1B2972'
            borderColor='#FDB64A'
            unfilledColor='#fff'
            style={{ borderRadius: 50 }} />
            <Text style={{color: '#fff'}}>
              Progress {Math.round(progress*100)}%
            </Text>

        </View>

      </View>
    </View>
  )
}

export default SibiCard

const styles = StyleSheet.create({
  
  container:{
    
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingTop: 20
  },
  cardContainer: {
    width: 335,
    height: 144,
    borderRadius: 25,
    backgroundColor: '#FDB64A',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: 25
  },
  card: {
    width: 315,
    height: 98,
    borderRadius: 21,
    backgroundColor: '#e4a443',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    paddingHorizontal: 25
    
  }
})