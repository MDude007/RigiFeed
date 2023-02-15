import { SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FEFBE9' }}>
      <HomeScreen />
    </SafeAreaView>
  )
}

export default App;
