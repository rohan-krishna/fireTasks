import React, {Component} from 'react';
import NewTaskForm from '../components/NewTaskForm';

export default class NewTaskScreen extends Component {

    static navigationOptions = {
        title: 'Add New Record'
    }

    render() {

        const { params } = this.props.navigation.state;

        return <NewTaskForm addNewRecord={params.addNewRecord} />
    }
}