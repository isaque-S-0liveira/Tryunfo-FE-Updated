import AllCards from './components/AllCards/AllCards';
import GeneratorCheap from './components/GeneratorCheap/GeneratorCheap';
import LogoTryunfo from './components/LogoTryunfo/LogoTryunfo';
import AllCardProvider from './context/allCardProvider';
import CardProvider from './context/cardProvider';

function App() {
  return (
    <main>
      <LogoTryunfo />
      <AllCardProvider>
        <CardProvider>
          <GeneratorCheap />
        </CardProvider>
        <AllCards />
      </AllCardProvider>
    </main>
  );
}

export default App;
