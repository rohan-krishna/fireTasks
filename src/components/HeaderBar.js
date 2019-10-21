import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Appbar, Title, Text } from 'react-native-paper';

export default class HeaderBar extends React.Component {
    _goBack = () => console.log('Went back');
  
    _onSearch = () => console.log('Searching');
  
    _onMore = () => console.log('Shown more');
  
    render() {
      return (
        <Appbar>
            <Appbar.Content title={'Fire Tasks'} />
        </Appbar>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
        display: 'flex',
        // flex: 1
    },
    title: {
        // display: 'block',
        textAlign: 'center',
        fontSize: 33,
        fontWeight: 'bold'
    },
    logo: {
        height: 128,
        width: 128,
        // display: 'flex',
        alignSelf: 'center',
    }
});