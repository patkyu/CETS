import React from 'react';

import UntitledDesign11Image from './assets/images/Design.png';

import UntitledDesign1Image from './assets/images/Untitled.png';

import Button from '@mui/material/Button';

import {
  styled
} from '@mui/material/styles';

const Desktop11 = styled("div")({
  backgroundColor: `rgba(255, 253, 234, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1519px`,
  height: `742px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const UntitledDesign11 = styled("img")({
  width: `1519px`,
  height: `742px`,
  flexShrink: `0`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const MulaSaKabataan = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(142, 13, 31, 1)`,
  fontStyle: `italic`,
  fontFamily: `Poppins`,
  fontWeight: `900`,
  fontSize: `165px`,
  letterSpacing: `-9.295px`,
  textDecoration: `none`,
  lineHeight: `72.49999642372131%`,
  textTransform: `none`,
  textShadow: `0px 4px 6px rgba(0, 0, 0, 0.5)`,
  WebkitTextStroke: `1px rgba(0, 0, 0, 1)`,
  width: `1997px`,
  height: `148px`,
  position: `absolute`,
  left: `-212px`,
  top: `86px`,
});

const UntitledDesign1 = styled("img")({
  height: `548px`,
  width: `1574px`,
  position: `absolute`,
  left: `0px`,
  top: `194px`,
});

const ParaSaKabataan = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 253, 234, 1)`,
  fontStyle: `normal`,
  fontFamily: `Qwigley`,
  fontWeight: `400`,
  fontSize: `169px`,
  letterSpacing: `-9.295px`,
  textDecoration: `none`,
  lineHeight: `72.49999642372131%`,
  textTransform: `none`,
  textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  WebkitTextStroke: `1px rgba(0, 0, 0, 1)`,
  position: `absolute`,
  left: `456px`,
  top: `173px`,
});

const GoogleDriveLink = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `500`,
  fontSize: `36px`,
  letterSpacing: `-1.98px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `278px`,
  height: `22px`,
  position: `absolute`,
  left: `29px`,
  top: `10px`,
});

const Rectangle2 = styled("div")({
  backgroundColor: `rgba(235, 197, 140, 1)`,
  width: `1574px`,
  height: `36px`,
  position: `absolute`,
  left: `0px`,
  top: `706px`,
});

const PadayonMgaSusunodNaP = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `italic`,
  fontFamily: `Poppins`,
  fontWeight: `300`,
  fontSize: `12px`,
  letterSpacing: `-0.66px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `495px`,
  height: `28px`,
  position: `absolute`,
  left: `539px`,
  top: `715px`,
});

const Group1Button = styled(Button)({
  backgroundColor: 'rgba(235, 197, 140, 1)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
  borderRadius: '29px',
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `336px`,
  height: `76px`,
  left: `619px`,
  top: `430px`,
});

function Desktop1() {
  const googleDriveLink = "https://drive.google.com/drive/folders/1FPU8YiswYsOg7_luoifuutMWYoOCNoXb?usp=sharing";
  return (
    <Desktop11>
      <UntitledDesign11 src={UntitledDesign11Image} loading='lazy' alt={"Untitled design (1) 1"}/>
      <MulaSaKabataan>
        {`Mula sa Kabataan`}
      </MulaSaKabataan>
      <UntitledDesign1 src={UntitledDesign1Image} loading='lazy' alt={"Untitled design 1"}/>
      <ParaSaKabataan>
        {`Para sa Kabataan`}
      </ParaSaKabataan>
      <Group1Button href={googleDriveLink} target="_blank" rel="noopener noreferrer">
        <GoogleDriveLink>
          {'Google Drive Link'}
        </GoogleDriveLink>
      </Group1Button>
      <Rectangle2>
      </Rectangle2>
      <PadayonMgaSusunodNaP>
        {`Padayon mga susunod na Pag-asa ng Bayan!`}
      </PadayonMgaSusunodNaP>
    </Desktop11>);

  }

export default Desktop1;

  
