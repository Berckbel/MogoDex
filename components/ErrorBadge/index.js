import { View, Text } from 'react-native';
import { styles } from './styles';

export const ErrorBadge = () => {
  return (
        <View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                Something Went Wrong
              </Text>
            </View>
        </View>
  );
};

 