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
        width: "100%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
    },

    bodyContainer: {
        flexDirection: "row",
    },

    abilityCol: {
        width: "100%",
        borderColor: "white",
        borderWidth: 2,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-around",
    },

    abilityTitleCell: {
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
});