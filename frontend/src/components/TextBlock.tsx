import { Spring, animated } from 'react-spring'
import '../css/text.css';

const Gallery = (text: string) => {
    return (
        <div className="text-items-center">
            <Spring
                from={{ opacity: 0, color: '#686868' }}
                to={[
                    { opacity: .5, color: '#82B8FFC' },
                    { opacity: .75, color: '#828FFC' },
                    { opacity: 1, color: '#686868' },
                    { opacity: 1, color: '#686868' },
                    { opacity: 1, color: '#686868' },
                    { opacity: 1, color: '#686868' },
                    { opacity: 1, color: '#686868' },
                    { opacity: 1, color: '#686868' },
                ]}>
                {styles => (
                    <animated.div className='textBox' style={styles}>{text}</animated.div>
                )}
            </Spring>
        </div>
    );
}

export default Gallery;