import loadingIcon from './Loading.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import Gallery from './Gallery';

interface Photo {
  id: string;
  title: string;
  src: string;
}

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('mountain');
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPhotos = async (searchQuery: string) => {
    setLoading(true);
    const apiKey = process.env.REACT_APP_FLICKR_API_KEY;
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchQuery}&per_page=24&format=json&nojsoncallback=1`;
    const response = await fetch(url);
    const data = await response.json();
    const photosData = data.photos.photo.map((photo: any) => ({
      id: photo.id,
      title: photo.title,
      src: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`,
    }));
    setPhotos(photosData);
    setLoading(false);
  };

  useEffect(() => {
    fetchPhotos("mountain");
  }, []);

  const handleSearch = (searchQuery: string) => {
    setSearchTerm(searchQuery);
    fetchPhotos(searchQuery);
  };

  return (
    <div className='bage'>
    <div className="App">
     <h1>SnapShot</h1>
      <SearchForm
        query={query}
        onSearch={handleSearch}
        setQuery={setQuery}
      />
      {loading ?
        <img src={loadingIcon} alt="Loading" className="loading-container" />: <Gallery photos={photos} searchTerm={searchTerm} />}
    </div>
    </div>
  );
}

export default App;
