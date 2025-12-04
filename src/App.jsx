import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Rutas from './routing/Rutas';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-lg border-b">
        <Header />
      </header>
      <main className='flex-fill container bg-white'>
        <Rutas />
      </main>
      <footer className="degradado py-5 footer mt-5">
        <Footer />
      </footer>
    </div>
  );
}
export default App;