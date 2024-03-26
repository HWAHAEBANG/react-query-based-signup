import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useViewportError = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const handleViewportChange = () => {
            const viewportWidth = window.innerWidth;
            
            if (viewportWidth > 770) {

                navigate('/error')
            }
        };

        window.addEventListener('resize', handleViewportChange);

        return () => {
            window.removeEventListener('resize', handleViewportChange);
        };
    }, []);
}

export default useViewportError;
