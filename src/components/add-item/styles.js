import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#653D2A',
        padding: 20,
        borderRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
	          width: 0,
	          height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
    },
    item: {
        fontSize: 18,
        color: '#ffffff'
    },
    delete: {
        color : '#fff',
        fontSize: 18,
    },
});