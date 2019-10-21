import React from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default class FooterButton extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.fab}>
                <Button icon="add" mode="contained" onPress={(e) => this.props.gotoNewTask()} color="#e65100">Add New Record</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fab: {
        position: 'relative',
        margin: 16,
        // width: 32
        // right: 0,
        // bottom: 0,
    },
})