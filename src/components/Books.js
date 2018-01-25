import React from 'react';

export const Books = ({books, onSelect}) => (
  <div className="books-wrapper">
    { books.map( ({ volumeInfo, id }) => (
      <div className="book" key={id} onClick={() => onSelect(id)}>
        <img alt={volumeInfo.title} src={volumeInfo.imageLinks.thumbnail}/>
        <span><strong>{volumeInfo.title}</strong></span>
        <p>{volumeInfo.authors[0]}</p>
      </div>
    ))}
  </div>
);
