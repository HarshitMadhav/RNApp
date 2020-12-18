import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import Button from '../Button'

const TableRow = (props) => {
    const { label, hr, value, onIncrement, onDecrement, minValue, maxValue, disableDecrement, disableIncrement } = props
   
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.label}>{label}</Text>
                <Button
                    disable={disableDecrement}
                    onPress={() => onDecrement(label)}
                    text = {'-'}
                    color={disableDecrement ? '#EC7D6F' :'red'}
                />
                <Text style={styles.textValue}>{value}</Text>
                <Button
                    disable={disableIncrement}
                    onPress={() => onIncrement(label)}
                    text = {'+'}
                    color={disableIncrement ? '#4ACF6F' : 'green'}
                />
            </View>
            {hr && <View style={styles.hr}/>}
        </View>
    )
}

export default TableRow