import { StackActions, useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {Text, Image, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import Routes from '../../config/navigation/routes';
import { useAppDispatch } from '../../hooks/navigation';
import mockedUsers from '../../mock/users.json';
import { userActions } from '../profile/redux';
import {Feather} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";


export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const defaultUser = mockedUsers.results[0];
  const [data, setData] = React.useState({
    userName: '',
    password: '',
    secureTextEntry: true,
    isFocusedText: false,
    isFocusedPassword: false
  });

  const TextInputChange = (val: string) => {
    setData({
      ...data,
      userName: val,
    })
  }

  const handlePasswordChange = (val: string) => {
    setData({
      ...data,
      password: val,
    })
  }
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const updateIsFocusedText = () => {
    setData({
      ...data,
      isFocusedText: !data.isFocusedText
    })
  }

  const updateIsFocusedPassword = () => {
    setData({
      ...data,
      isFocusedPassword: !data.isFocusedPassword
    })
  }

  const openTabs = () => {
    dispatch(userActions.setInitialUser({
      id: defaultUser.id,
      age: defaultUser.age,
      name: defaultUser.name.first,
      surname: defaultUser.name.last,
    }));

    navigation.dispatch(StackActions.replace(Routes.tabs));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
            source={require('../../../assets/images/logo.png')}
        />
      </View>
      <View style={styles.footer}>
        <View>
          <TextInput
              style={[styles.input, data.isFocusedText && styles.isFocused]}
              placeholder="Username"
              onChangeText={(val) => TextInputChange(val)}
              onFocus={updateIsFocusedText}
              onBlur={updateIsFocusedText}
          />
        </View>
        <View>
          <TextInput
              style={[styles.input, data.isFocusedPassword && styles.isFocused]}
              placeholder="Password"
              secureTextEntry={data.secureTextEntry}
              onChangeText={(val) => handlePasswordChange(val)}
              onFocus={updateIsFocusedPassword}
              onBlur={updateIsFocusedPassword}
          />
          <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry ?
                <Feather
                    style={styles.icon}
                    name='eye-off'
                    color='#5F768A'
                    size={20}
                />
                :
                <Feather
                    style={styles.icon}
                    name='eye'
                    color='#5F768A'
                    size={20}
                />
            }
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity
              onPress={openTabs}
              style={styles.button}
          >
            <LinearGradient
                colors={['#2189e5', '#0076ee', '#0060f3', '#0044f3', '#3312eb']}
                style={styles.signIn}>
              <Text
                  style={styles.textSign}
              >
                Login
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 2,
    backgroundColor: '#f5f7fa',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 50,
    paddingHorizontal: 30,
    shadowColor: "#2189E5",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#5F768A',
    padding: 10,
  },
  title: {
    width: 117,
    fontSize: 40,
    color: '#2189E5',
    marginVertical: 20,
  },
  isFocused: {
    borderBottomColor: '#2189E5',
  },
  touchableOpacity: {
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 10,
    right: 5
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
  button: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  signIn: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  textSign: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  }
});
