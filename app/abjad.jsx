import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SibiCard from '../components/abjad/SibiCard'
import TabelAbjad from '../components/abjad/TabelAbjad'

const Abjad = () => {
  return (
    <View style={styles.container}>
      <SibiCard style={styles.card}/>
      <TabelAbjad style={styles.tabel}/>

    </View>
  )
}

export default Abjad

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  
})