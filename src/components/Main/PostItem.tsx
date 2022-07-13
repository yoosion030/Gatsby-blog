import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { PostFrontmatterType } from 'types/PostItem.types';

const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.3s box-shadow;
  cursor: pointer;
  width: 439px;
  height: 360px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 20px 20px 0 0;
  object-fit: cover;
`;

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 24px;
  font-weight: 700;
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 400;
  opacity: 0.7;
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CategoryItem = styled.div`
  padding: 3px 5px;
  border-radius: 3px;
  background: #a0b0ff;
  font-size: 12px;
  font-weight: 700;
  color: white;
  margin-right: 5px;
`;

const Summary = styled.div`
  margin: 10px 0;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
`;

// type PostItemProps = {
//   title: string;
//   date: string;
//   categories: string[];
//   summary: string;
//   thumbnail: {
//     publicURL: string;
//   };
//   link: string;
// };

type PostItemProps = PostFrontmatterType & { link: string };

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: { publicURL },
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <ThumbnailImage src={publicURL} alt="Post Item Image" />

      <PostItemContent>
        <Title>{title}</Title>
        <Category>
          {categories.map(category => (
            <CategoryItem key={category}>{category}</CategoryItem>
          ))}
        </Category>
        <Summary>{summary}</Summary>
        <Date>{date}</Date>
      </PostItemContent>
    </PostItemWrapper>
  );
};
export default PostItem;
