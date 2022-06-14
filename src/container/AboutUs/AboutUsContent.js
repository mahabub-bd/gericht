import React from 'react';
import { images } from '../../constants';
import { CustomButton, HeadtextCormorant, POpensans } from '../../GlobalStyle';
import {
    AboutUsContent,
    Content,
    Knife,
    KnifeImage,
    OurHistoryContent,
    // eslint-disable-next-line prettier/prettier
    SpoonImage
} from './AboutUs.Styles';

const AboutUsContents = () => (
    <Content>
        <AboutUsContent>
            <HeadtextCormorant>About Us</HeadtextCormorant>
            <SpoonImage src={images.spoon} />
            <POpensans>
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing
                Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.
            </POpensans>
            <CustomButton>Know More</CustomButton>
        </AboutUsContent>
        <Knife>
            <KnifeImage src={images.knife} />
        </Knife>
        <OurHistoryContent>
            <HeadtextCormorant>Our History</HeadtextCormorant>
            <SpoonImage src={images.spoon} />
            <POpensans>
                Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat
                Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.
            </POpensans>
            <CustomButton>Know More</CustomButton>
        </OurHistoryContent>
    </Content>
);
export default AboutUsContents;
