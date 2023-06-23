import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scoreContainer: {
        flexDirection: "column",
        marginVertical: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
        justifyContent: "center",
    },

    scoreTitleCell: {
        paddingVertical: 4,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "white",
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "red",
    },

    scoreValueCell: {
        paddingVertical: 4,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "white",
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: "white",
    }
});