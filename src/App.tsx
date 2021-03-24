import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { useState } from 'react';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function setGenre(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} setSelectedGenreId={setGenre} />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}