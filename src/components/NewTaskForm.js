import React, { Component } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TextInput, Button } from 'react-native-paper';
import moment from "moment";

import {
    View,
    Text,
} from 'react-native';

export default class NewTaskForm extends Component {

    static navigationOptions = {
        title: 'Add New Record'
    }
    
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            showDatePicker: false,
            tasks_scheduled: "0",
            tasks_completed: "0",
            overall_efficiency: 0,
            record: {}
        }
    }


    showDatePicker = () => {

        console.log("Show Date Picker!");

        this.setState({
            showDatePicker: true
        })
    }

    setDate = (event, date) => {
        date = date || this.state.date;

        this.setState({
            showDatePicker: false,
            date
        });
    }

    saveNewRecord = () => {
        let record = {};
        record.date = moment(this.state.date).format("DD/MM/YYYY");
        record.tasks_scheduled = this.state.tasks_scheduled;
        record.tasks_completed = this.state.tasks_completed;
        record.overall_efficiency = (parseInt(this.state.tasks_completed) / parseInt(this.state.tasks_scheduled) * 100).toFixed(2);
        
        this.setState({ record });
        // console.log(record);
        this.props.addNewRecord(record);

    }

    render() {
        return (
            <View style={{ display: 'flex', flex: 1, padding: 9 }}>
                <View style={{ flexDirection: 'row', marginBottom: 9 }}>
                    <TextInput 
                        label="Date"
                        value={moment(this.state.date).format("DD/MM/YYYY")}
                        disabled
                        style={{ flex: 1, marginRight: 3 }}
                    />

                    <Button onPress={this.showDatePicker} icon="date-range" mode="contained" style={{ alignSelf: 'center', marginLeft: 3 }}>Select Date</Button>
                </View>

                <TextInput 
                    label="Tasks Scheduled"
                    value={this.state.tasks_scheduled}
                    keyboardType={'numeric'}
                    onChangeText={tasks_scheduled => this.setState({ tasks_scheduled })}
                />

                <TextInput 
                    label="Tasks Completed"
                    value={this.state.tasks_completed}
                    keyboardType={'numeric'}
                    onChangeText={tasks_completed => this.setState({ tasks_completed })}
                    style={{ marginTop: 9 }}
                />

                <Button mode="contained" onPress={() => this.saveNewRecord()} style={{ marginTop: 9 }}>Save</Button>

                {this.state.showDatePicker && <DateTimePicker value={this.state.date}
                    display="default"
                    onChange={this.setDate} />}
            </View>
        )
    }
}