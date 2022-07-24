import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 500px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;
export const GalleryWrapper = styled.div<{ itemSelected?: boolean }>`
  border: ${(props) =>
    props.itemSelected ? '1px solid blue' : '1px solid #e0e0e0'};
  border-radius: 8px;
  margin: 5px 0;
  padding: 2px;
`;

export const DownloadButton = styled.a`
  border: 1px solid #e2a412;
  border-radius: 4px;
  padding: 15px 30px;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  margin-left: 30px;
  text-align: center;
  color: #e2a412;
`;
export const FlexedProduct = styled.a`
  display: flex;
  align-items: center;
`;
