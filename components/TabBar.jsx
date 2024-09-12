import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const TabBar = ({ state, descriptors, navigation }) => {

  const icons = {
    index: (props) => <Image source={require('../assets/icons/Home.png')} style={{height: 32, width: 31.5}} {...props} color={greyColor} />,
    abjad: (props) => <Image source={require('../assets/icons/Abjad.png')} style={{height: 29.84, width: 30.01}} {...props} color={greyColor} />,
    coc: (props) => <Image source={require('../assets/icons/Leaderboard.png')} style={{height: 31.94, width: 33}} {...props} color={greyColor} />,
    quiz: (props) => <Image source={require('../assets/icons/Quiz.png')} style={{height: 34, width: 30}} {...props} color={greyColor} />,
    profile: (props) => <Image source={require('../assets/icons/Profile.png')} style={{height: 33, width: 28.55}} {...props} color={greyColor} />,

  }

  const primaryColor = '#212121'
  const greyColor = '#858597'

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if(['_sitemap', '+not-found'].includes(route.name)) return null    

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabBarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {
              icons[route.name]({
                color: isFocused ? primaryColor : greyColor
              })
            }
            
            <Text style={{ color: isFocused ? primaryColor : greyColor, 
                           fontWeight: isFocused ? '700' : '400',
                           fontSize: 10, }}>
                {label}
            </Text>            
            
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#fff",
        paddingVertical: 15,
        shadowColor: "#000",
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 20,

    },
    tabBarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7
    },
})