import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    pokeImage: {
      width: 100,
      height: 100,
    },

    pokeItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      marginVertical: 5,
      marginHorizontal: 5,
      backgroundColor: "white",
      borderRadius: 20,
    },

    pokeName: {
      fontSize: 16,
      textTransform: "capitalize",
      fontWeight: "bold",
    }
});