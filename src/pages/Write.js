import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Ckeditor from '../components/Ckeditor';



const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;
`;

const InnerContainer = styled.div`
  margin: 0 4px;
  max-width: 1280px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Heading = styled.h3`
  font-size: 30px;
  position: relative;

  &::after {
    content: '';
    width: 30px;
    height: 5px;
    margin-left: 0.5px;
    background-color: #2ed090;
    position: absolute;
    top: -6px;
    left: 0;
    border-radius: 2px;
  }
`;

const UploadButton = styled.button`
  height: 30px;
  background-color: #c6c6c6;
  color: white;
  border-radius: 5px;
  padding: 2px 10px;
  font-size: 13px;

  &:hover {
    background-color: #2ed090;
  }
`;

const ContentWrapper = styled.div`
  width: auto;
  height: auto;
  margin-top: 9px;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
`;

const ContentInner = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
`;

const TextInput = styled.input`
  height: 40px;
  border: 1px solid #e5e7eb;
  flex-basis: 75%;
`;

const ContentInputWrapper = styled.div`
  width: auto;
  margin-top: 20px;
  margin-left: 70px;
`;

const ContentLabel = styled.p`
  margin-bottom: 15px;
`;

const ContentInput = styled.input`
  background-color: #2ed090;
  margin-left: 13px;
  color: white;
  border-radius: 2px;
  padding: 2px;
  font-size: 13px;
`;

const InputLabel = styled.label`
    
`




const TextArea = styled.textarea`
  width: 85%;
  border: 1px solid #e5e7eb;
  padding-bottom: 600px; /* You might want to adjust this value */
  padding-top: 2px;
  padding-left: 4px;
`;

function Write() {

  const FileUploader = () => {
    const fileRef = useRef<HTMLInputElement>(null);
    // input click method
    const handleClick = () => {
      fileRef?.current?.click();
    }

  }
  


  return (
    <Container>
      <InnerContainer>
        <Header>
          <Heading>글쓰기</Heading>
          <UploadButton>등록하기</UploadButton>
        </Header>

        <ContentWrapper>
          <ContentInner>
            <Title>제목</Title>
            <TextInput type="text" />
          </ContentInner>
          <ContentInputWrapper>
            <ContentLabel>내용</ContentLabel>
            <Ckeditor/>
          </ContentInputWrapper>
        </ContentWrapper>
      </InnerContainer>
    </Container>
  );
}


export default Write;