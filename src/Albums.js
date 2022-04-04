import React, { useState, useEffect } from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Albums = ({ albums }) => {
  const [albumsList, setAlbumsList] = useState([...albums]);

  useEffect(() => {
    setAlbumsList(JSON.parse(window.localStorage.getItem('albumsList')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('albumsList', JSON.stringify(albumsList));
  }, [albumsList]);

  const deleteAlbum = (title) => {
    const updatedAlbums = [...albumsList].filter(
      (album) => album.title !== title
    );
    setAlbumsList(updatedAlbums);
  };

  const getAlbums = () => {
    setAlbumsList([...albums]);
  };

  return (
    <div className="albums-wrap">
      {albumsList.length === 0 ? (
        <div className="no-albums">
          <button className="get-albums-btn" onClick={() => getAlbums()}>
            Get Albums!
          </button>
        </div>
      ) : (
        <div>
          <div className="title-wrap">
            <h1 className="title">Your Music</h1>
          </div>
          <div className="albums">
            <div className="albums-cont">
              {albumsList.map((album, idx) => {
                return (
                  <div className="album-wrap" key={idx}>
                    <div className="album">
                      <div className="icon">
                        <HighlightOffIcon
                          fontSize="medium"
                          onClick={() => deleteAlbum(album.title)}
                        />
                      </div>
                      <img
                        src={album.artworkUrl}
                        className="album-artwork"
                        alt={album.artworkUrl.split('/').slice(-1)}
                      />
                      <div className="album-title">{album.title}</div>
                      <div className="album-artist">{album.artist}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Albums;
