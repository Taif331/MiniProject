import React from 'react';

const scienceBooks = [
    { 
        title: 'A Brief History of Time" by Stephen Hawking', 
        link: 'https://www.amazon.com/Brief-History-Time-Stephen-Hawking/dp/0553380168', 
        imageUrl: 'Sc1.png', 
        description: 'This book provides a comprehensive overview of the universe, including black holes, the Big Bang, and relativity, written in an accessible language.' 
    },
    { 
        title: 'The Selfish Gene" by Richard Dawkins', 
        link: 'https://www.amazon.com/Selfish-Gene-Anniversary-Introduction/dp/0199291152', 
        imageUrl: 'Sc2.png', 
        description: 'This book examines evolution from the perspective of genes, focusing on how genes influence the behavior of living organisms.' 
    },
];

const ScienceBooks = () => {
    return (
        <div className="science-books">
            <h2>Science Books</h2>
            <ul>
                {scienceBooks.map((book, index) => (
                    <li key={index} className="book-item">
                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                            <img src={book.imageUrl} alt={book.title} className="book-image" />
                            <h3>{book.title}</h3>
                            <p>{book.description}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ScienceBooks;