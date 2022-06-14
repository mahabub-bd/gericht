import React from 'react';
import {
    LaurelsAwardCard,
    LaurelsAwardCardContent,
    LaurelsAwardCardContentSubTitle,
    LaurelsAwardCardContentTitle,
    // eslint-disable-next-line prettier/prettier
    LaurelsAwardCardImage
} from './Laurels.Styles';

function AwardCard({ award: { imgUrl, title, subtitle } }) {
    return (
        <LaurelsAwardCard>
            <LaurelsAwardCardImage src={imgUrl} />
            <LaurelsAwardCardContent>
                <LaurelsAwardCardContentTitle>{title}</LaurelsAwardCardContentTitle>
                <LaurelsAwardCardContentSubTitle>{subtitle}</LaurelsAwardCardContentSubTitle>
            </LaurelsAwardCardContent>
        </LaurelsAwardCard>
    );
}

export default AwardCard;
