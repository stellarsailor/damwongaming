import React from 'react'
import ImageGallery from 'react-image-gallery';
import { fanArtImages } from '../datas/fanArtImages';

export default function FanArts(){

    return (
        <ImageGallery items={fanArtImages} />
    )
}