import React from 'react';

const historyBooks = [
    { 
        title: 'Guns, Germs, and Steel" by Jared Diamond', 
        link: 'https://www.amazon.com/Guns-Germs-Steel-Fates-Societies/dp/0393317552', 
        imageUrl: 'Hi1.png', 
        description: 'The book investigates the factors that led to the success of civilizations around the world, including geography and natural resources.' 
    },
    { 
        title: 'The Diary of a Young Girl', 
        link: 'https://www.amazon.com/Anne-Frank-Diary-Young-Girl/dp/0553296981', 
        imageUrl: 'Hi2.png', 
        description: 'The poignant diary of a Jewish girl hiding from the Nazis during World War II.' 
    },
    { 
        title: 'A People History of the United States ', 
        link: 'https://www.amazon.com/Peoples-History-United-States/dp/0062397346', 
        imageUrl: 'Hi3.png', 
        description: 'An alternative view of American history from the perspective of marginalized groups.'

    },
];

const HistoryBooks = () => {
    return (
        <div className="history-books">
            <h2>History Books</h2>
            <ul>
                {historyBooks.map((book, index) => (
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

export default HistoryBooks;