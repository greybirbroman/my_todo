import Dropzone from 'react-dropzone';
import React, { useState } from 'react';

const ModalDropzone = () => {
  const [files, setFiles] = useState([]);
  
  return (
    <div className='border-2 border-dashed border-gray-400 p-4 my-4'>
      <Dropzone onDrop={''} accept='image/*,application/pdf'>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {files.length === 0 ? (
              <p>Drag and drop files here, or click to select files</p>
            ) : (
              files.map((file) => (
                <div key={file.name}>
                  <p>{file.name}</p>
                  <img src={file.preview} alt={file.name} />
                </div>
              ))
            )}
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default ModalDropzone;
