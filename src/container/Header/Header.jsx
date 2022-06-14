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
import { HeaderSection, Paragraph } from './Header.style';

const Header = () => (
    <HeaderSection>
        <Wrapper>
            <WrapperInfo>
                <SubHeading title="Chase The New Flavour" />
                <HeadingPrimary title="The Key To Fine Dining" />

                <Paragraph>
                    Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi
                    Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus
                </Paragraph>
                <CustomButton type="button">Explore Menu </CustomButton>
            </WrapperInfo>
            <WrapperImage>
                <Image src={images.welcome} alt="header__image" />
            </WrapperImage>
        </Wrapper>
    </HeaderSection>
);

export default Header;
