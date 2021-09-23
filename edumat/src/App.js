import { WrapperStyle } from './Wrapper';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <WrapperStyle>
      <Header />
      <Main />
      <Footer />
    </WrapperStyle>
  );
}

export default App;
