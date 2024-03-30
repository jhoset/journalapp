import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import PropTypes from "prop-types";


export const ImageGallery = ({images}) => {
    return (
        <ImageList variant="quilted" sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
            {images.map((imgSrc, index) => (
                <ImageListItem key={index}>
                    <img
                        srcSet={`${imgSrc}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${imgSrc}?w=164&h=164&fit=crop&auto=format`}
                        alt={'Image'}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

ImageGallery.propTypes = {
    images: PropTypes.array
}