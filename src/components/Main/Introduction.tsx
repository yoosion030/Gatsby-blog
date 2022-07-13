import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import ProfileImage from 'components/Main/ProfileImage';

const Background = styled.div`
  width: 100vw;
  height: 508px;
  background: rgba(160, 176, 255, 0.28);
  padding: 102px 256px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-top: 50px;
`;

const Desc = styled.p`
  font-size: 16px;
`;

const Introduction: FunctionComponent = () => {
  return (
    <Background>
      <ProfileImage />
      <Title>Nice to Meet You,</Title>
      <Desc>I'm Junior Frontend Developer Hyun.</Desc>
    </Background>
  );
};

export default Introduction;
