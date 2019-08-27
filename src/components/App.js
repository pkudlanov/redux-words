import React from 'react';
import wordArr from '../../assets/words.json';

const wordsLength = wordArr.length;

export default function App() {
  return<h1>{wordsLength}</h1>;
}
