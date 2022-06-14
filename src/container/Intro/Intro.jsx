import React from 'react';
import { meal } from '../../constants';
import {
    IntroSection,
    StyledBsFillPlayFill,
    StyledBsPauseFill,
    Video,
    VideoOverlay,
    // eslint-disable-next-line prettier/prettier
    VideoOverlayCircle
} from './Intro.Styles';

const Intro = () => {
    const [playVideo, setPlayVideo] = React.useState(false);
    const vidRef = React.useRef(null);

    return (
        <IntroSection>
            <Video ref={vidRef} src={meal} type="video/mp4" loop controls={false} muted />

            <VideoOverlay>
                <VideoOverlayCircle
                    onClick={() => {
                        setPlayVideo(!playVideo);
                        if (playVideo) {
                            vidRef.current.pause();
                        } else {
                            vidRef.current.play();
                        }
                    }}
                >
                    {playVideo ? <StyledBsPauseFill /> : <StyledBsFillPlayFill />}
                </VideoOverlayCircle>
            </VideoOverlay>
        </IntroSection>
    );
};

export default Intro;
