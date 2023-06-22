import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  titleContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 10,
  },

  title: {
    textAlign: "center",
    alignContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 45,
    color: "white",
    backgroundColor: "#2196F3",
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