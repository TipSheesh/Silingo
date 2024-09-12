import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ContentCard from './ContentCard';
import contentSibi from '../../contentSibi';

const TabelAbjad = () => {
  return (
    <View style={styles.container}>
      
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.text}>Abjad</Text>
        <View style={styles.contentContainer}>
            {contentSibi.map((item) => (
            <ContentCard
                key={item.id}
                label={item.label}
                text={item.text}
                desc={item.desc}
                title={item.title}
            />
            ))}
        </View>
      </ScrollView>
      
    </View>
  );
};

export default TabelAbjad;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDB64A',
    flex: 1,
    width: 335,
    borderRadius: 25,
    padding: 10,
    marginBottom: 90
  },
  text: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: 10
  },
});
