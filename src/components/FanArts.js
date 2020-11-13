import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';
import { fanArtImages } from '../datas/fanArtImages';

export default function FanArts(props){

    return (
        <ImageGallery items={fanArtImages} showFullscreenButton={false} useBrowserFullscreen={false} style={{zIndex: 20}} />
    )
}