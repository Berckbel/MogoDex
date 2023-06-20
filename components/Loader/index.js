import { View, Text } from 'react-native';
import { styles } from './styles';

export const Loader = () => {
  return (
        <View>
            <View style={styles.loader}>
              <Text style={styles.loaderText}>
                Cargando...
              </Text>
            </View>
        </View>
  );
};

 