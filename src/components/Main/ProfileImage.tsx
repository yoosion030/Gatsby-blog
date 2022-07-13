import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
const PROFILE_IMAGE_LINK =
  'https://avatars.githubusercontent.com/u/24629040?s=460&u=0bb3411f25c0e1c5d25d753fc648739367cb7032&v=4';

const ProfileImageWrapper = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />;
};

export default ProfileImage;
