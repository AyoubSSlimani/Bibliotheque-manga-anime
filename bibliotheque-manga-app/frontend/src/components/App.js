import '../styles/App.css';
import NavBar from './NavBar/NavBar';
import Accueil from './Accueil/Accueil';
import {Routes, Route} from "react-router"
import CatalogueManga from './CatalogueChoix/CatalogueM/CatalogueManga/CatalogueManga';
import CatalogueAnime from './CatalogueChoix/CatalogueM/CatalogueAnime/CatalogueAnime';
import CatalogueChoix from './CatalogueChoix/CatalogueChoix';
import MaCollection from './MaCollection/MaCollection';
import Profil from './Profil/Profil'
import PageCard from './CatalogueChoix/CatalogueM/BlockCarte/PageCard';
import CustomCardPage from './MaCollection/CustomCardPage';



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
        <Route path="/Catalogue-manga" element={<CatalogueManga />} />
        <Route path="/Catalogue-anime" element={<CatalogueAnime />} />
        <Route path="/Ma-collection" element={<MaCollection />} />
        <Route path="/Ma-collection/:cardId" element={<CustomCardPage/>}/>
        <Route path="/Profil" element={<Profil />} />
        <Route path="/PageCard" element={<PageCard />} />

    </Routes>
    
    </div>
  );
}

export default App;
