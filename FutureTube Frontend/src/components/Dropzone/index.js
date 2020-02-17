import React from 'react'
import Dropzone from 'react-dropzone'
 
const DropzonePhoto = () => ( 
    
<Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
  {({getRootProps, getInputProps}) => (
    <section>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Escolha uma foto de perfil</p>
      </div>
    </section>
  )}
</Dropzone>
)

export default DropzonePhoto;
