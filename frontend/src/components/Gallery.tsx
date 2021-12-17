import React, { useState, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import '../css/images.css';

const Gallery = (images: string[]) => {

    const [index, set] = useState(0)
    const transitions = useTransition(index, {
        key: index,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 4500 },
    })

    useEffect(() => {
        const t = setInterval(() => set(state => (state + 1) % images.length), 4500)
        return () => clearTimeout(t)
    }, [images])

    return (
        <div>
            {transitions((style, i) => (
                <animated.img
                    className='imageBlock dropShadow'
                    src={images[i]}
                    style={{ ...style }}
                />
            ))}
        </div>
    );
}

export default Gallery;