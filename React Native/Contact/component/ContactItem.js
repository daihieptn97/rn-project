import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class ContactItem extends Component {
    constructor(props) {
        super(props);
    }

    _loadNumber() {
        {
            try {
                // console.log(this.props.value.item.phoneNumbers[0].number);
                return this.props.value.item.phoneNumbers[0].number ;
            } catch (error) {
                return "Không có số điện thoại";
            }
        }
    }

    _loadName() {
        {
            try {
                // console.log(this.props.value.item.phoneNumbers[0].number);

                var givenName = (this.props.value.item.givenName != null) ? this.props.value.item.givenName : "";
                var familyName = (this.props.value.item.familyName != null) ? this.props.value.item.familyName : "";
                var middleName = (this.props.value.item.middleName != null) ? this.props.value.item.middleName : "";

                return givenName + " " +
                    familyName + " " +
                    middleName + " ";
            } catch (error) {
                console.log("error");
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.contactName}>
                    {this._loadName()}
                </Text>

                <Text style={styles.contactPhone}>
                    {this._loadNumber()}
                    
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#99999985',
    },
    contactPhone: {
        fontSize: 16,
    },
    contactName: {
 
        marginBottom: 5,
        fontWeight: '500',
        fontSize: 17,
    }
});
