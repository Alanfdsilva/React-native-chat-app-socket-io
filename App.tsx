import { SafeAreaView, StatusBar } from 'react-native';
import { Routes } from './routes/index.routes';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Routes/>
    </SafeAreaView>
  );
}
