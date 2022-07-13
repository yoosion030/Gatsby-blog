import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import ProfileImage from 'components/Main/ProfileImage';

const Background = styled.div`
  width: 100vw;
  height: 508px;
  background: rgba(160, 176, 255, 0.28);
  padding: 9vh 24vw;
  @media (max-width: 768px) {
    height: 300px;
    padding-top: 5vh;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-top: 50px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 30px;
  }
`;

const Desc = styled.p`
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

const Introduction: FunctionComponent<IntroductionProps> = ({
  profileImage,
}) => {
  return (
    <Background>
      <ProfileImage profileImage={profileImage} />
      <Title>Nice to Meet You,</Title>
      <Desc>I'm Junior Frontend Developer Hyun.</Desc>
    </Background>
  );
};

export default Introduction;
