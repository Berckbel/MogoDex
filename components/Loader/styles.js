import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 100,
    },

    loaderText : {
        textAlign: "center",
        textAlignVertical: "center",
        textTransform: "capitalize",
        fontWeight: "bold",
        fontSize: 16,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 30,
        backgroundColor: "white",
    }
});