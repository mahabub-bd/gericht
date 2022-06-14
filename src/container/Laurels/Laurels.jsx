import React from 'react';
import { HeadingPrimary, SubHeading } from '../../components';
import { data, images } from '../../constants';
import { Image, Wrapper, WrapperImage, WrapperInfo } from '../../GlobalStyle';
import AwardCard from './AwardCard';
import { LaurelsAward, LaurelsSection } from './Laurels.Styles';

const Laurels = () => (
    <LaurelsSection>
        <Wrapper>
            <WrapperInfo>
                <SubHeading title="Awards & Recognition" />
                <HeadingPrimary title="Our Laurels" />
                <LaurelsAward>
                    {data.awards.map((award) => (
                        <AwardCard award={award} key={award.title} />
                    ))}
                </LaurelsAward>
            </WrapperInfo>
            <WrapperImage>
                <Image src={images.laurels} />
            </WrapperImage>
        </Wrapper>
    </LaurelsSection>
);

export default Laurels;
