import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  whoContainer: {
    marginVertical: 10,
  },

  pokeImage: {
    width: 300,
    height: 300,
    marginHorizontal: 50,
    backgroundColor: 'transparent'
  },

  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 50,
  },

  inputContainer: {
    marginVertical: 10,
    marginHorizontal: 50,
    paddingVertical: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  
  feedMessage: {
    alignSelf: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 2,
    fontWeight: "bold",
    textAlign: "right",
    borderRadius: 45,
    backgroundColor: "yellow",
  },

  inputText: {
    paddingVertical: 10,
    width: "100%",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    borderBottomColor: "red",
    borderBottomWidth: 5,
  },
});
