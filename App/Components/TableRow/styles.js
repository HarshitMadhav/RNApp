import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
    container: {
        padding: Metrics.topMargin
    },
    hr: {
        height: 1,
        backgroundColor: Colors.border,
        marginTop: 15
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        flex: 1
    },
    textValue: {
        marginHorizontal: 7,
        fontWeight: 'bold',
        width: 24,
        textAlign: 'center'
    }
})