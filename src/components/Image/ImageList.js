import React from 'react';
import "./imageList.css";
import Image from './Image';

const ImageList = ({ images }) => {
    const preparedImageList = images.map(image => {
        return (
            <Image key={image.id} image={image} />

        )
    });
    return (
        <div className="image-list-container">
            {/* {images.length}   kadar resim bulundu. */}
            {preparedImageList}

        </div>
    )
}
export default ImageList;