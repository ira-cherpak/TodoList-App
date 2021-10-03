import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather} from "@expo/vector-icons";
import {StackActions, useNavigation} from "@react-navigation/native";
import Routes from "../../config/navigation/routes";

export default function SwiperScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
          style={styles.icon}
          onPress={() => {navigation.dispatch(StackActions.replace(Routes.login))}}
      >
            <Feather
                name='arrow-left'
                color='#5F768A'
                size={30}
            />
      </TouchableOpacity>
      <Text style={styles.title}>List</Text>
      <View style={styles.separator}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
      padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
    icon: {
      position: "absolute",
        top: 50,
        left: 20
    },
});
