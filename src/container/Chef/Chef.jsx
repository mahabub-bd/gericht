import React from 'react';
import { HeadingPrimary, SubHeading } from '../../components';
import { images } from '../../constants';
import {
    Image,
    POpensans,
    Wrapper,
    WrapperImageReverse,
    // eslint-disable-next-line prettier/prettier
    WrapperInfo
} from '../../GlobalStyle';
import {
    ChefContent,
    ChefContentQuote,
    ChefName,
    ChefSection,
    ChefSign,
    Designation,
    ImageQuate,
    ImageSign,
    // eslint-disable-next-line prettier/prettier
    ParagraphQuate
} from './Chef.Styles';

const Chef = () => (
    <ChefSection>
        <Wrapper>
            <WrapperImageReverse>
                <Image src={images.chef} alt="Chef__image" />
            </WrapperImageReverse>
            <WrapperInfo>
                <SubHeading title="Chef's Word" />
                <HeadingPrimary title="What We Believe In" />

                <ChefContent>
                    <ChefContentQuote>
                        <ImageQuate src={images.quote} />
                        <POpensans>
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .
                        </POpensans>
                    </ChefContentQuote>
                    <ParagraphQuate>
                        Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla
                        Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu.
                        Congue Iaculis Integer Curabitur Semper Sit Nunc.
                    </ParagraphQuate>
                </ChefContent>
                <ChefSign>
                    <ChefName>Kevin Luo</ChefName>
                    <Designation>Chef & Founder</Designation>
                    <ImageSign src={images.sign} />
                </ChefSign>
            </WrapperInfo>
        </Wrapper>
    </ChefSection>
);

export default Chef;
