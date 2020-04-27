import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 700px;
  div.img {
    height: 170px;
    width: 170px;
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
    font-size: 10px;
    color: #a9aaae;
  }
  strong {
    color: #fff;
    font-size: 50px;
  }
`;

export const FormCharacter = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input {
    font-size: 20px;
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    border: 0;
    background: #3a3b3c;
    color: #a9aaae;
  }

  a {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    background: #c20902;
    text-align: center;
    border-radius: 20px;
    font-weight: bold;
    color: #fff;
    margin: 15px 0;
    transition: background 0.2s;
    &:hover {
      background: #e6120a;
    }
  }
`;
