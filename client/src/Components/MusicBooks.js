import React from 'react';

const musicBooks = [
    { 
        title: 'The Complete Musician" by Steven G. Laitz', 
        link: 'https://www.amazon.com/Complete-Musician-Integrated-Approach-Listening/dp/0199742782', 
        imageUrl: 'Mu1.png', 
        description: 'This book provides a comprehensive approach to music education, covering theory, practical application, and music history.' 
    },
    { 
        title: 'The Study of Orchestration" by Samuel Adler', 
        link: 'https://www.amazon.com/Study-Orchestration-Fourth-Samuel-Adler/dp/0393600521', 
        imageUrl: 'Mu2.png', 
        description: 'A thorough guide focusing on orchestration techniques, featuring practical examples and explanations of musical instruments.' 
    },
    {
        title: '"How Music Works" by David Byrne', 
        link: 'https://www.amazon.com/How-Music-Works-David-Byrne/dp/1936365537', 
        imageUrl: 'Mu3.png', 
        description: 'A deep dive into the nature of music, its creation, and its relationship with culture.'  
    },
    {
        title: 'The Rest Is Noise: Listening to the Twentieth', 
        link: 'https://www.amazon.com/Rest-Noise-Listening-Twentieth-Century/dp/0312427719', 
        imageUrl: 'Mu4.png', 
        description: 'An exploration of 20th-century music, its composers, and its cultural significance.'  
    }
];

const MusicBooks = () => {
    return (
        <div className="music-books">
            <h2>Music Books</h2>
            <ul>
                {musicBooks.map((book, index) => (
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

export default MusicBooks;