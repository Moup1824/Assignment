import React from 'react';
import ModalImage from "react-modal-image";

const MemeItem = ({ meme }) => {
  return (
    <div>
      <ModalImage
        small={meme.thumbnail}
        large={meme.url}
        alt={meme.title}
        hideDownload={true}
        hideZoom={true}
      />
    </div>
  );
};

export default MemeItem;


