import '../styles/App.css';
import Caroussel from './Caroussel';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <header>
        <div className="container-header">
          <NavBar>

          </NavBar>
        </div>
      </header>
    <div className="caroussel">
        <Caroussel>

        </Caroussel>
    </div>
    </div>

  );
}

export default App;
