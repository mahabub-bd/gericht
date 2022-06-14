import React from 'react';
import { HeadingPrimary, SubHeading } from '../../components';
import { images } from '../../constants';
import {
    CustomButton,
    Image,
    Wrapper,
    WrapperImage,
    // eslint-disable-next-line prettier/prettier
    WrapperInfo
} from '../../GlobalStyle';
import { FindUsSection, OpeningHours, Paragraph, Paragraph2nd } from './FindUs.Styles';

const FindUs = () => (
    <FindUsSection>
        <Wrapper>
            <WrapperInfo>
                <SubHeading title="Contact" />
                <HeadingPrimary title="Find Us" />

                <Paragraph>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</Paragraph>
                <OpeningHours>Opening Housrs</OpeningHours>
                <Paragraph2nd>Mon - Fri: 10:00 Am - 02:00 Am</Paragraph2nd>
                <Paragraph2nd>Sat - Sun: 10:00 Am - 03:00 Am</Paragraph2nd>
                <CustomButton type="button">Visit Us </CustomButton>
            </WrapperInfo>
            <WrapperImage>
                <Image src={images.findus} alt="findus__image" />
            </WrapperImage>
        </Wrapper>
    </FindUsSection>
);

export default FindUs;
