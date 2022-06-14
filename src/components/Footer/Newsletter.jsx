import React from 'react';
import { CustomButton, POpensans } from '../../GlobalStyle';
import HeadingPrimary from '../HeadingPrimary/HeadingPrimary';
import SubHeading from '../SubHeading/SubHeading';
import { Input, InputContainer, NewsletterHeading, NewsletterSection } from './Newsletter.Styles';

const Newsletter = () => (
    <NewsletterSection>
        <NewsletterHeading>
            <SubHeading title="Newsletter" />
            <HeadingPrimary title="Subscribe To Our Newsletter" />
            <POpensans>And never miss latest Updates!</POpensans>
        </NewsletterHeading>
        <InputContainer>
            <Input type="email" placeholder="Enter your email address" />
            <CustomButton type="button">Subscribe</CustomButton>
        </InputContainer>
    </NewsletterSection>
);

export default Newsletter;
