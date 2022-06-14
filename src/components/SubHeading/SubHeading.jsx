import React from 'react';
import { images } from '../../constants';
import { PCormorant } from '../../GlobalStyle';
import { Heading, Image } from './SubHeading.Style';

const SubHeading = ({ title }) => (
    <Heading>
        <PCormorant>{title}</PCormorant>
        <Image src={images.spoon} />
    </Heading>
);

export default SubHeading;
