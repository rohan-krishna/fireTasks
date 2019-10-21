import React from 'react';
import { StyleSheet } from 'react-native';

import {
    View,
    Text,
    ScrollView,
    RefreshControl
} from 'react-native';
import { Button, List, Surface } from 'react-native-paper';
import TodoListItem from './TodoListItem';

export class TodoList extends React.Component {

    constructor() {
        super();
        this.state = {
            // refreshing: true
        }
    }

    setRefreshing = () => {
        this.props.loadTasks();
        // this.setState({ refreshing: false });
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView style={styles.listsContainer}>
                    {this.props.tasks.length > 0 ? this.props.tasks.map(task => {
                            return (<TodoListItem task={task} refState={this.props.refState} key={task.id} />)
                        }
                    ) : <Text>No Records Has Been Added yet!</Text>}
                </ScrollView>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
        flex: 1
    },
    fab: {
        position: 'relative',
        margin: 16,
        // width: 32
        // right: 0,
        // bottom: 0,
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
        padding: 19,
        // position: 'absolute'
    },
    dateText: {
        fontSize: 24,
        fontWeight: "bold"
    },
    percText: {
        fontWeight: "bold",
        fontSize: 27,
        overflow: "hidden"
    }
});