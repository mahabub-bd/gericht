import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import styledComponents from 'styled-components';
import { colors } from '../../constants';
import { FlexCenter } from '../../GlobalStyle';

const IntroSection = styledComponents.div`
    position: relative;
    height: 100vh;`;
const Video = styledComponents.video`
width: 100%;
height: 100%;
object-fit: cover;`;

const VideoOverlay = styledComponents(FlexCenter)`
position: absolute;
inset: 0;
background: rgba(0, 0, 0, 0.65);`;

const VideoOverlayCircle = styledComponents(FlexCenter)`
width: 60px;
height: 60px;
border-radius: 50%;
border: 1px solid ${colors.Golden};
cursor: pointer;`;

const StyledBsFillPlayFill = styledComponents(BsFillPlayFill)`
color: ${colors.Golden};
font-size: 30px;`;
const StyledBsPauseFill = styledComponents(BsPauseFill)`
color: ${colors.White};
font-size: 30px;`;

export {
    IntroSection,
    Video,
    VideoOverlay,
    VideoOverlayCircle,
    StyledBsFillPlayFill,
    StyledBsPauseFill,
};

// import styledComponents from 'styled-components';
