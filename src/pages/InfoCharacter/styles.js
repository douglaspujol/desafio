import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 700px;
  div.img {
    height: 310px;
    width: 310px;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    margin: 40px 0;

    img {
      position: absolute;
      height: 100%;
      right: -50%;
    }
  }

  a {
    color: #a9aaae;
  }
  strong {
    color: #fff;
    font-size: 50px;
  }
`;
export const DescriptionCharacter = styled.div`
  margin: 30px 0;
  flex: 1;
  padding: 30px;
  background: #242526;
  border-radius: 30px;
  color: #fff;
  strong {
    font-size: 20px;
  }
  p {
    margin-top: 15px;
  }
`;
