import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../components/TabBar'

const _layout = () => {
  return (
    <Tabs 
         tabBar = {props => <TabBar {...props} />}   
         screenOptions={{headerShown: false}}
    >
        <Tabs.Screen
            name= "index"
            options={{
                title: "Home"
            }}
        />
        <Tabs.Screen
            name= "abjad"
            options={{
                title: "Abjad"
            }}
        />
        <Tabs.Screen
            name= "coc"
            options={{
                title: "CoC"
            }}
        />
        <Tabs.Screen
            name= "quiz"
            options={{
                title: "Quiz"
            }}
        />
        <Tabs.Screen
            name= "profile"
            options={{
                title: "Profile"
            }}
        />
        
            
    </Tabs>
  )
}

export default _layout