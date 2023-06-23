import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    badge: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 100,
    },

    badgeTextWrong : {
        textAlign: "center",
        textAlignVertical: "center",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 30,
        backgroundColor: "#FF0000",
    },

    badgeTextCorrect : {
        textAlign: "center",
        textAlignVertical: "center",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 30,
        backgroundColor: "#2196F3",
    }
});