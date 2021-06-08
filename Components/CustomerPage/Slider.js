import React, { useRef } from 'react';
import Carousel from 'react-elastic-carousel';

const Slider = () => {

    const itemsPerPage = 4;
    const itemsPerScroll = 1;
    const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const carouselRef = useRef(null);

    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          // we hit the last item, go to first item
          carouselRef.current.goTo(0);
        }
      };
      const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          // we hit the first item, go to last item
          carouselRef.current.goTo(slides.length);
        }
      };
      const onChangeHandle = (currentItem, pageIndex) => {

        const currentPosition = itemsPerPage + currentItem.index;

        if (currentPosition === slides.length) {
            // we hit the first item, go to last item
            setTimeout(() => {
                carouselRef.current.goTo(0)
            }, 2000)
        }
      }

    return (
        <div style={{marginTop: "5rem"}}>
            <Carousel 
            itemsToShow={itemsPerPage} 
            itemsToScroll={itemsPerScroll}
            enableAutoPlay={true} 
            autoPlaySpeed={2000}
            ref={carouselRef}
            onPrevStart={onPrevStart}
            onNextStart={onNextStart}
            onChange={onChangeHandle}
            disableArrowsOnEnd={false}
            > 
            {
                slides.map((slide, idx) => 
                    <div key={idx} style={{ width: "10vw", height: "10rem", backgroundColor: "tomato", textAlign: "center"}}> 
                        {slide}
                    </div>
                )
            }
            </ Carousel>
        </div>
    );
};

export default Slider;