import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerRow: {
      backgroundColor: '#FFFFFF',
      marginTop: 20,
      width: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10,
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: '#F0D757',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textItem: {
        fontSize: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#CCE5FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20
    },
    scrollContainer: {
        flex: 1,
        width: '90%'
    },
    itemsContainer: {
        flexGrow: 1,
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
    inputContainer: {
        flex: 1,
        width: '90%',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff',
    },
    input: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#CCE5FF',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch',
    },
    button: {
        marginTop: 25,
        height: 60,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 18,
    },
    buttonClear: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    buttonTextClear: {
        color: 'blue',
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 18,
    },
    buttonContainer: {
        flexDirection: "row"
    },
});