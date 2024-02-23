// Playlist.js
import React from 'react';

function Playlist({ files, onFileSelect }) {
  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index} onClick={() => onFileSelect(index)}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
