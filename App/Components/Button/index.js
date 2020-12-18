import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

const Button = (props) => {
    const { text, color, onPress, disable } = props
    return (
        <TouchableOpacity
            activeOpacity={disable ? 1 : 0.5}
            onPress={()=> !disable && onPress()}
            style={{...styles.container, backgroundColor: color}}
        >
            <Text style={styles.textColor}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button