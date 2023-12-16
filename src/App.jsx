
import { Container } from './components/Container/Container';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import './global.css';

function App() {
  return (
    <div>
      <Container color="">
        <Header />
        <Main />
      </Container>
      <Container color={"gray"}>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
