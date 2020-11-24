import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import style from "./style.module.scss";
import { FiUpload } from "react-icons/fi";

const DropzoneInput = ({ onDropImage }) => {
  const [imageURL, setImageURL] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const image = URL.createObjectURL(file);

      onDropImage(file);
      setImageURL(image);
    },
    [onDropImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  return (
    <div className={style.dropzone} {...getRootProps()}>
      <input {...getInputProps()} />
      {imageURL ? (
        <img src={imageURL} alt="Uploadedimage" />
      ) : isDragActive ? (
        <p>
          <FiUpload />
          Solte a imagem
        </p>
      ) : (
        <p>
          <FiUpload />
          Arraste a imagem
        </p>
      )}
    </div>
  );
};

export default DropzoneInput;
