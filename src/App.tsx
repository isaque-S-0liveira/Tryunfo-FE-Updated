import GeneratorCheap from './components/GeneratorCheap/GeneratorCheap';
import LogoTryunfo from './components/LogoTryunfo/LogoTryunfo';
import CardProvider from './context/cardProvider';

function App() {
  return (
    <main>
      <LogoTryunfo />
      <CardProvider>
        <GeneratorCheap />
      </CardProvider>
    </main>
  );
}

export default App;
