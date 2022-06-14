import React from 'react';
import { HeadingPrimary, SubHeading } from '../../components';
import { images } from '../../constants';
import { CustomButton } from '../../GlobalStyle';
import {
    CardImage,
    GalleryContent,
    GalleryContentParagraph,
    GalleryImages,
    GalleryImagesArrow,
    GalleryImagesCard,
    GalleryImagesContainer,
    // eslint-disable-next-line prettier/prettier
    GallerySection, StyledBsArrowLeftShort, StyledBsArrowRightShort, StyledBsInstagram
} from './Gallery.Styles';

const gallaeryimages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;

        if (direction === 'left') {
            current.scrollLeft -= 400;
        } else {
            current.scrollLeft += 400;
        }
    };

    return (
        <GallerySection>
            <GalleryContent>
                <SubHeading title="Instagram" />
                <HeadingPrimary title="Photo Gallery" />
                <GalleryContentParagraph>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum
                    Turpis Elit Elit Scelerisque Egestas Mu.
                </GalleryContentParagraph>
                <CustomButton type="button">View More </CustomButton>
            </GalleryContent>
            <GalleryImages>
                <GalleryImagesContainer ref={scrollRef}>
                    {gallaeryimages.map((image, index) => (
                        <GalleryImagesCard key={`Gallary ${index + 1}`}>
                            <CardImage src={image} alt="gallery" />
                            <StyledBsInstagram className="gallery__image-icon" />
                        </GalleryImagesCard>
                    ))}
                </GalleryImagesContainer>
                <GalleryImagesArrow>
                    <StyledBsArrowLeftShort onClick={() => scroll('left')} />
                    <StyledBsArrowRightShort onClick={() => scroll('right')} />
                </GalleryImagesArrow>
            </GalleryImages>
        </GallerySection>
    );
};

export default Gallery;
