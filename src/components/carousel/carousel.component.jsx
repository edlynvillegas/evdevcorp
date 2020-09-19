import React, { useState, useEffect } from 'react'
import './carousel.styles.scss'
// Custom Hooks
import useTimeout from '../../utils/useTimeout'
// import useClassNames from '../../utils/useClassNames'
// import useEventListener from '../../utils/useEventListener'

const Carousel = React.forwardRef((props, ref) => {
    const { autoplay = false,
            autoplayInterval = 2000,
            transition = { ms: 400, easing: 'ease' },
            slides,
            ...rest } = props;
    const count = React.Children.count(slides)
    const [activeIndex, setActiveIndex] = useState(-1)
    const [order, setOrder] = useState('ltr')

    // console.log('slides', slides)

    useEffect(() => {
        return () => clear()
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        orderOnChange()
        // eslint-disable-next-line
    }, [order])

    const activeOnChange = () => {
        clear()
        if (order === 'ltr' && activeIndex>=count-1) setOrder('rtl')
        else if (order === 'rtl' && activeIndex<=0) setOrder('ltr')
        else orderOnChange()
        reset()
    }

    const orderOnChange = () => {
        if (order === 'ltr') setActiveIndex(index => index + 1)
        else setActiveIndex(index => index - 1)
    }
    
    const timeoutMS = autoplay && transition.ms > autoplayInterval ? transition.ms + 1000 : autoplayInterval;
    const { clear, reset } = useTimeout(activeOnChange, timeoutMS, !!autoplay && count > 1)

    const items = React.Children.map(slides, (child, index) => {
        if (!child) {
            return;
        }
        
        return React.cloneElement(child, {
            key: `slider-item-${index}`,
            style: { ...child.props.style, width: `${100 / count}%` },
            className: child.props.className
        });
    })
    
    return(
        <div className="carousel" {...rest} ref={ref}>
            <div className="carousel-slider"
                style={{
                    width:`${count*100}%`,
                    transform:`translateX(-${(activeIndex*100)/count}%)`,
                    transition: `transform ${transition.ms}ms ${transition.easing}`
                }}>
                { items.map((item, index) => (
                    <div key={index}
                    style={{width:`${100/count}%`}}
                        className={`slider-item${index===activeIndex ? ' active' : ''}`}
                    >{item}</div>
                )) }
            </div>
        </div>
    )
})

export default React.memo(Carousel)