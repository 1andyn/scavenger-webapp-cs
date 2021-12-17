import { useSpring, animated } from 'react-spring'
import '../css/text.css';

const Gallery = (text: string) => {

    return (
        <animated.div className='textBox'>{text}</animated.div>
    );
}

export default Gallery;