import React from 'react';
const medicalBooks = [
    { 
        title: 'The Merck Manual of Diagnosis and Therapy', 
        link: 'https://www.amazon.com/Merck-Manual-Diagnosis-Therapy/dp/0911910425', 
        imageUrl: 'Me1.png', 
        description: 'A comprehensive guide providing accurate medical information on diagnosing and treating diseases. It is an essential reference for healthcare professionals.' 
    },
    { 
        title: 'Grays Anatomy', 
        link: 'https://www.amazon.com/Grays-Anatomy-Anatomical-Clinical-Practice/dp/0702052302', 
        imageUrl: 'Me2.png', 
        description: 'A classic text that details the anatomy of the human body with precise illustrations. Widely used in medical education.' 
    },
    {
        title: "The Emperor of All Maladies: A Biography of Cancer",
        link:'https://www.amazon.com/Emperor-All-Maladies-Biography-Cancer/dp/1439170916',
        description: "A profound exploration of cancer, its history, and the ongoing battle against it.",
        imageUrl: 'Me3.png',
    },
    {
        title: "The Immortal Life of Henrietta Lacks",
        link:'https://www.amazon.com/Immortal-Life-Henrietta-Lacks/dp/1400052181',
        description: "The story of Henrietta Lacks, whose cells were taken without her knowledge and became crucial for medical research.",
        image: 'Me4.png',
    }
];

const MedicalBooks = () => {
    return (
        <div className="medical-books">
            <h2>Medical Books</h2>
            <ul>
                {medicalBooks.map((book, index) => (
                    <li key={index}>
                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                            {book.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MedicalBooks;