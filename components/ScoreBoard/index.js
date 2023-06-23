import { View, Text} from "react-native";
import { styles } from "./styles";

export const ScoreBoard = ({ score }) => {
    return (
        <View style={styles.scoreContainer}>
            <Text style={styles.scoreTitleCell}>Score</Text>
            <Text style={styles.scoreValueCell}>{score}</Text>
        </View>
    )
}