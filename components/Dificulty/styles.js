import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    topContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
    },

    whoTitle: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30,
        borderRadius: 35,
        color: "white",
        backgroundColor: "#2196F3",
        paddingVertical: 20,
        marginHorizontal: 20,
        marginVertical: 30,
        textTransform: "capitalize",

    },

    pokeImage: {
        width: 200,
        height: 200,
        alignSelf: "center",
        tintColor: "black",
    },

    dificultyContainer: {
        flexDirection: "column",
        justifyContent: "center",
        marginVertical: "10%",
        marginHorizontal: 50,
    },

    dificultyTitle: {
        textAlign: "center",
        alignSelf: "center",
        marginVertical: 10,
        paddingVertical: 10,
        fontSize: 25,
        fontWeight: "900",
        backgroundColor: "yellow",
        width: "100%",
        textTransform: "uppercase",
    },

    dificultyButton: {
        marginVertical: 15,
    }
});