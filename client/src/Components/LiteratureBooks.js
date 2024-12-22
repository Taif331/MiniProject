import React from 'react';

const literatureBooks = [
    { 
        title: 'One Hundred Years of Solitude', 
        link: 'https://www.amazon.com/Hundred-Solitude-Harper-Perennial-Classics/dp/0060883286', 
        imageUrl: 'Li1.png', 
        description: 'A multi-generational story of the Buendía family in the fictional town of Macondo.' 
    },
    { 
        title: '"1984" by George Orwell', 
        link: 'https://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/0451524934', 
        imageUrl: 'Li2.png', 
        description: 'A dystopian novel addressing themes of government surveillance and individual freedom, serving as a warning against totalitarian regimes.' 
    },
];

const LiteratureBooks = () => {
    return (
        <div className="literature-books">
            <h2>Literature Books</h2>
            <ul>
                {literatureBooks.map((book, index) => (
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

export default LiteratureBooks;