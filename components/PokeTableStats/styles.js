import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tableContainer: {
        marginVertical: 5,
        marginHorizontal: 10,
    },

    headerContainer: {
        borderWidth: 2,
        borderColor: "white",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#FF0000",
    },

    headerCell: {
        borderColor: "white",
        borderWidth: 2,
        width: "50%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
    },

    bodyContainer: {
        flexDirection: "row",
    },

    statCol: {
        width: "50%",
        borderColor: "white",
        borderWidth: 2,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-around",
    },

    statTitleCell: {
        borderColor: "white",
        borderWidth: 2,
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "#2196F3",
        color: "white",
        textTransform: "capitalize",
    },

    statValueCell: {
        borderColor: "white",
        borderWidth: 2,
        width: "100%",
        textAlign: "center",
        fontWeight: "normal",
        fontSize: 20,
        backgroundColor: "white",
        textTransform: "capitalize",
    }
});