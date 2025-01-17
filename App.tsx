import {NativeBaseProvider, StatusBar} from 'native-base';

import {TEMAS} from './src/estilos/temas';
import { Header } from './src/components/Header';
import Rotas from './src/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[600]}/>
      <Header/>
      <Rotas/>
    </NativeBaseProvider>
  );
}
