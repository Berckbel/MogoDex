import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    badge: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 100,
    },

    badgeText : {
        textAlign: "center",
        textAlignVertical: "center",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 30,
        backgroundColor: "red",
    }
});