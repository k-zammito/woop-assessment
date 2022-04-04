import { albums } from './data';

const sortAlbums = (arr) => {
  const sortByArtist = arr.sort((a, b) => {
    let artistA = a.artist.toLowerCase();
    let artistB = b.artist.toLowerCase();

    if (artistA < artistB) {
      return -1;
    }

    if (artistA > artistB) {
      return 1;
    }

    return 0;
  });

  const sortByArtistAlbum = (arr) => {
    let count = arr.length;

    while (count > 1) {
      for (let i = 0; i < arr.length; i++) {
        if (
          arr[i + 1] &&
          arr[i].artist === arr[i + 1].artist &&
          arr[i].title > arr[i + 1].title
        ) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
        count--;
      }

      return arr;
    }
  };

  return sortByArtistAlbum(sortByArtist);
};

export const sortedAlbums = sortAlbums(albums);
