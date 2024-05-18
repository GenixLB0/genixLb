import { useEffect } from 'react';
import code from '../../Images/Robot/code.png'


export default function ScrollTop() {
    useEffect(() => {
        scrollToTop()
    }, []);
    const scrollToTop = async () => {
        try {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        } catch (error) {
            throw new Error('Error scrolling to top');
        }
    };


    return (
        <div>
            <div style={{ height: '0rem' }} />
            <button
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
                style={{
                    position: 'fixed',
                    padding: '1rem 1rem',
                    fontSize: '20px',
                    bottom: '20px',
                    right: '17px',
                    backgroundColor: '#42A3D0',
                    color: '#fff',
                    borderRadius: '50%',
                    textAlign: 'center',
                    width: '50px',
                    height: '50px',
                    zIndex: 1000,
                    border:'none',

                }}
            >
                <img
                    src={code}
                    style={{
                        position: 'absolute',
                        top: '9px',
                        right: '9px',
                        cursor: 'pointer',
                    }}
                ></img>
            </button>
        </div>
    );
}
