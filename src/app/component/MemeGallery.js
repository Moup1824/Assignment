import React from 'react'
import MemeItem from './MemeItem'

const MemeGallery = ({memes}) => {
  return (
    <>
    {memes.map((meme) => (
        <MemeItem key={meme.id} meme={meme} />
      ))}

    </>
  )
}

export default MemeGallery