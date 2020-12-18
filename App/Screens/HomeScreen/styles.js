import { StyleSheet } from 'react-native'
import Colors from '../../Themes/Colors'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row'
    },
    table: {
        borderWidth: 1,
        borderColor: Colors.border,
        width: Metrics.width * 0.9,
        paddingVertical: 10
    },
    textTitle: {
        marginVertical: Metrics.baseMargin
    }
})