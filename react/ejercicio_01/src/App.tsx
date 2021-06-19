import './styles/App.scss';

import Header from './template/Header';
import Footer from './template/Footer';

import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

function App() {
  return (
    <div className="App">

        <Header />

          <main>
            
            <Component1 />
            <Component2 />
            <Component3 />

          </main>

        <Footer />

    </div>
  );
}

export default App;
