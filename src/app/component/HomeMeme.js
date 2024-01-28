"use client"; 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MemeGallery from './MemeGallery';

const HomeMeme = () => {
  const [memes, setMemes] = useState([]);
  const [after, setAfter] = useState(null);

  const fetchMemes = async () => {
    try {
      const res = await axios.get(`https://www.reddit.com/r/memes.json${after ? `?after=${after}` : ''}`);
      
      console.log(res.data); 

      const newMemes = res.data.data.children.map((child) => child.data);
      console.log("newMemes", newMemes);

      setMemes((prevMemes) => [...prevMemes, ...newMemes]);
      setAfter(res.data.data.after);
    } catch (error) {
      console.error('Error fetching memes:', error);
    }
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <>
      <MemeGallery memes={memes}/>
    </>
  );
};

export default HomeMeme;
