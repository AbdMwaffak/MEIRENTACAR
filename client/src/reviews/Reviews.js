import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import images from '../reviewsImages';
import styles from './reviews.module.css';

const Reviews = () => {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <>
    <h1 className={styles.reviewsTitle}>Reviews</h1>
    <div className={styles.slider}>
      <motion.div className={styles.outerCarousel} ref={carouselRef} whileTap={{
        cursor : 'grabbing'
      }}>
        <motion.div
          drag='x'
          dragConstraints={{
            right: 350 * (images.length - 6),
            left: -width,
          }}
          className={styles.innerCarousel}
        >
          {images.map((image, index) => (
            <motion.div className={styles.reviewItem} key={index}>
              <img
                src={image}
                alt='img-slider'
                className={styles.carouselImg}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
    </>
  );
};

export default Reviews;
