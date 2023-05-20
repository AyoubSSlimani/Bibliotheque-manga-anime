import '../styles/App.css';
import NavBar from './NavBar';
import Accueil from './Accueil/Accueil';
import {Routes, Route} from "react-router-dom"
import CatalogueManga from './CatalogueChoix/CatalogueManga/CatalogueManga';
import CatalogueAnime from './CatalogueChoix/CatalogueAnime/CatalogueAnime';
import CatalogueChoix from './CatalogueChoix/CatalogueChoix';

function App() {
  return (
    <div>
      <header>
        <div className="container-header">
          <NavBar>

          </NavBar>
        </div>
      </header>
    <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Catalogue-choix" element={<CatalogueChoix />}>
          <Route path='/Catalogue-choix/Catalogue-manga' element={<CatalogueManga />} />
          <Route path='/Catalogue-choix/Catalogue-anime' element={<CatalogueAnime />} />
        </ Route>
    </Routes>

    </div>
  );
}

export default App;
