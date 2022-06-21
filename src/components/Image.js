import PropTypes from 'prop-types';

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};

export default function Image({ src, className, alt, width, height }) {
  return (
    <img 
        src={src} 
        className={`${className}`} 
        alt={alt} 
        width={width}
        height={height}
    />
  );
}
