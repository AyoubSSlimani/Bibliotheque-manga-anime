import '../styles/App.css';
import NavBar from './NavBar/NavBar';
import Accueil from './Accueil/Accueil';
import {Routes, Route} from "react-router-dom"
import CatalogueManga from './CatalogueChoix/Catalogue M/CatalogueManga/CatalogueManga';
import CatalogueAnime from './CatalogueChoix/Catalogue M/CatalogueAnime/CatalogueAnime';
import CatalogueChoix from './CatalogueChoix/CatalogueChoix';
import MaCollection from './MaCollection/MaCollection';
import Profil from './Profil/Profil'



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
        <Route path="/Catalogue-choix" element={<CatalogueChoix />}/>
        <Route path='/Catalogue-manga' element={<CatalogueManga />} />
        <Route path='/Catalogue-anime' element={<CatalogueAnime />} />
        <Route path='/Ma-collection' element={<MaCollection />} />
        <Route path='/Profil' element={<Profil />} />
    </Routes>
    
    </div>
  );
}

export default App;
