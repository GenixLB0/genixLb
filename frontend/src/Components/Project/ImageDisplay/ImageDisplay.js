import React, { useState, useEffect } from 'react';
import '../Project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function ImageDisplay({ images }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const imagesPerPage = 2;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calculate index range for current page
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = isMobile ? images.slice(indexOfFirstImage, indexOfLastImage) : images;

    // Function to handle page change
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Function to handle previous page
    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Function to handle next page
    const nextPage = () => {
        if (indexOfLastImage < images.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='continer-of-image-project'>
                {currentImages.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
            {isMobile && images.length > imagesPerPage && (
                <div className='pagination'>
                    <button onClick={previousPage} className='nextpreviousButton'><FontAwesomeIcon icon={faChevronLeft} /></button>
                    <button
                        className={`pagination-item ${currentPage === 1 ? 'active' : ''}`}
                        style={{ backgroundColor: currentPage === 1 ? '#42A3D0' : '' }}
                        onClick={() => paginate(1)}
                    >
                        1
                    </button>
                    {Array.from({ length: Math.ceil(images.length / imagesPerPage) - 1 }).map((_, index) => (
                        <button
                            key={index + 2}
                            className={`pagination-item ${currentPage === index + 2 ? 'active' : ''}`}
                            style={{ backgroundColor: currentPage === index + 2 ? '#42A3D0' : '' }}
                            onClick={() => paginate(index + 2)}
                        >
                            {index + 2}
                        </button>
                    ))}
                    <button onClick={nextPage} className='nextpreviousButton'><FontAwesomeIcon icon={faChevronRight} /></button>
                </div>
            )}
        </div>
    );
}
