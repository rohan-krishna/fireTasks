import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { Button } from 'react-native-paper';
import ConfirmDelete from './ConfirmDelete';
import moment from "moment";

export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const task = this.props.task;

        return (
            <View style={{ marginBottom: 18 }}> 
                <View style={styles.listItemWrapper}>
                    <View style={styles.listItemLeft}>
                        <Text style={styles.dateText}>{task.date}</Text>
                        <Text>Tasks Scheduled: {task.tasks_scheduled}</Text>
                        <Text>Tasks Completed: {task.tasks_completed}</Text>
                    </View>
                    <View style={styles.listItemRight}>
                        <Text>Overall</Text>
                        <Text style={styles.percText}>{task.overall_efficiency}%</Text>
                        <Text>Efficiency</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 9 }}>
                    <Button icon="open-in-new" mode="contained" onPress={() => console.log('Pressed')} color="#ff9800">View More</Button>
                    <ConfirmDelete taskID={task.id} refState={this.props.refState} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
        flex: 1
    },
    listsContainer: {
        display: 'flex',
        flex: 1,
        padding: 9
    },
    listItemWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        borderColor: '#ff8f00',
        borderWidth: 3,
        justifyContent: 'space-between',
        // elevation: 3,
        // marginBottom: 18,
        // padding: 18
    },
    listItemLeft: {
        flexGrow: 1,
        padding: 18,
        // flex: 1,
        // paddingTop: 12,
        // paddingBottom: 12
    },
    listItemRight: {
        flex: 1,
        borderLeftWidth: 3,
        alignSelf: 'center',
        borderColor: '#ff6f00',
        padding: 27,
        // position: 'absolute'
    },
    dateText: {
        fontSize: 21,
        fontWeight: "bold"
    },
    percText: {
        fontWeight: "bold",
        fontSize: 18,
        overflow: "hidden"
    }
});