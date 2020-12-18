import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import TableRow from '../../Components/TableRow'
import Utils from '../../Utils'

export default class HomeScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            rooms: 1,
            adults: 1,
            children: 0
        }
    }

    onIncrement = (type) => {
        let newState
        switch(type) {
            case 'ROOMS' : 
                newState = Utils.addRooms(this.state)
                break
            case 'ADULTS' : 
                newState = Utils.addAdults(this.state)
                break
            case 'CHILDREN' : 
                newState = Utils.addChildren(this.state)
                break
        }
         
        this.setState(newState)
    }

    onDecrement = (type) => {
        let newState
        switch(type) {
            case 'ROOMS' : 
                newState = Utils.reduceRooms(this.state)
                break
            case 'ADULTS' : 
                newState = Utils.reduceAdults(this.state)
                break
            case 'CHILDREN' : 
                newState = Utils.reduceChildren(this.state)
                break
        }
         
        this.setState(newState)
    }

    render() {
        const { rooms, adults, children } = this.state
        return(
            <View style={styles.container}>
                <Text style={styles.textTitle}>Choose number of people</Text>
                <View style={styles.table}>
                    <TableRow
                        hr
                        disableDecrement={rooms === 1}
                        disableIncrement={rooms === 5}
                        label = 'ROOMS'
                        value={rooms}
                        onIncrement={this.onIncrement}
                        onDecrement={this.onDecrement}
                    />
                    <TableRow
                        hr
                        disableDecrement={adults === 1}
                        label = 'ADULTS'
                        minValue={1}
                        value={adults}
                        onIncrement={this.onIncrement}
                        onDecrement={this.onDecrement}
                    />
                    <TableRow
                        label = 'CHILDREN'
                        disableDecrement={children === 0}
                        minValue={0}
                        value={children}
                        onIncrement={this.onIncrement}
                        onDecrement={this.onDecrement}
                    />
                </View>
            </View>
        )
    }

}