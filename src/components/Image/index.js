import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, fallback: customFallback, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={src || customFallback || fallback}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
