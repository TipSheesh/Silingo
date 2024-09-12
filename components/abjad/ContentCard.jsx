import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ContentCard = ({ label, text, desc, title }) => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>

      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ContentCard;

const styles = StyleSheet.create({
  contentContainer: {
    width: '45%', // Mengatur lebar ContentCard agar bisa muat dua kolom
    height: 120,
    backgroundColor: '#fff',
    borderColor: '#212112',
    borderWidth: 3,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  labelContainer:{
    backgroundColor: '#FDB64A',
    width: '90%',
    height: '60%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    top: -5
    
  },
  label: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff'
  },
  desc: {
    fontSize: 14,
    color: '#666',
  },
  title: {
    fontSize: 16,
    color: '#212',
    fontWeight: '800'
  },
});
