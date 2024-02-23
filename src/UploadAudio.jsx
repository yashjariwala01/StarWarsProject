// UploadAudio.js
import React from 'react';

function UploadAudio({ onFileUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileUpload(file);
  };

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
    </div>
  );
}

export default UploadAudio;
