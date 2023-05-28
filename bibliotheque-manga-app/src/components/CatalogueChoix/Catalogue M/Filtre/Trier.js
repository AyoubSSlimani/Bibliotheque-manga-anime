import React from 'react';


const Trier = ({ checked, tabManga }) => {
  const checkedGenres = Object.keys(checked).filter((genre) => checked[genre]);
  

  const handleTrierClick = () => {

    if (checkedGenres.length === 0) {
      // Aucun genre sélectionné, retourner la liste complète de mangas
      return tabManga}

    const filteredMangaList = tabManga.filter((manga) => {
      const mangaGenres = manga.genre;
      

      const isMangaGenreMatched = mangaGenres.some((mangaGenre) =>
        checkedGenres.includes(mangaGenre)
      );

      return isMangaGenreMatched;
    });

    // Faites ce que vous souhaitez avec la liste filtrée de mangas ici
    console.log(filteredMangaList)
    
    
    return filteredMangaList;
  };

  return (
    <div>
      <button onClick={handleTrierClick}>Trier</button>
      <ul>
        {handleTrierClick().map((manga) => (
          <li key={manga.id}>{manga.name}
          <img src="" alt="" /></li>
        ))}
      </ul>
    </div>
  );
};

export default Trier;
