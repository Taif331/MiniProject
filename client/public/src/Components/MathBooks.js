import React from 'react';

const mathBooks = [
    { 
        title: 'Calculus" by Michael Spivak', 
        link: 'https://www.amazon.com/Calculus-Michael-Spivak/dp/0521867444', 
        imageUrl: 'Ma1.png', 
        description: 'his book offers a thorough introduction to calculus, focusing on fundamental concepts and applications. It is an excellent reference for university students..' 
    },
    { 
        title: 'Linear Algebra Done Right" by Sheldon Axler', 
        link: 'https://www.amazon.com/Linear-Algebra-Right-Undergraduate-Mathematics/dp/3319110799', 
        imageUrl: 'Ma2.png', 
        description: 'This text emphasizes the theoretical aspects of linear algebra and provides deep insights into vector spaces and linear transformations.' 
    },
    { 
        title: 'The Man Who Knew Infinity ', 
        link: 'https://www.amazon.com/Man-Who-Knew-Infinity-Ramanujan/dp/1476763496', 
        imageUrl: 'Ma3.png', 
        description: 'The biography of mathematician Srinivasa Ramanujan and his collaboration with G.H. Hardy.' 
    },
    { 
        title: 'Mathematics: The Loss of Certainty ', 
        link: 'https://www.amazon.com/Mathematics-Loss-Certainty-Galaxy-Books/dp/0195030850', 
        imageUrl: 'Ma4.png', 
        description: 'A critical examination of the foundations of mathematics and its philosophical implications.' 
    },
];

const MathBooks = () => {
    return (
        <div className="math-books">
            <h2>Math Books</h2>
            <ul>
                {mathBooks.map((book, index) => (
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

export default MathBooks;