import React, { Component } from "react";
import { View } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';


export default class ConfirmDelete extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }

  
    _showDialog = () => this.setState({ visible: true });
  
    _hideDialog = () => this.setState({ visible: false });

    deleteTask = async (taskID) => {        
        await this.props.refState.doc(taskID).delete().then(function() {
            // console.log(res)
        })
        // this.props.loadTasks();
    }
  
    render() {
      return (
        <View>
            <Button 
                icon="delete" 
                mode="contained" 
                onPress={this._showDialog} 
                color="#f44336"
                style={{ marginLeft: 9 }}
                >
                Delete
                </Button>
          <Portal>
            <Dialog
               visible={this.state.visible}
               onDismiss={this._hideDialog}>
              <Dialog.Title>Alert</Dialog.Title>
              <Dialog.Content>
                <Paragraph>This is simple dialog</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={() => this.deleteTask(this.props.taskID)}>Confirm</Button>
                <Button onPress={this._hideDialog}>Cancel</Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      );
    }
}