import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 500px;
  div {
    height: 170px;
    width: 170px;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    margin: 40px 0;
    img {
      position: absolute;
      height: 100%;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    input {
      width: 100%;
      height: 100%;
      padding: 25px;
      margin-top: 15px;
      border: none;
      border-radius: 20px;
      background: #3a3b3c;
      color: #a9aaae;
    }
    textarea {
      height: 150px;
      width: 100%;
      resize: none;
      padding: 25px;
      margin-top: 15px;
      border: none;
      font-family: Roboto;

      border-radius: 20px;
      background: #3a3b3c;
      color: #a9aaae;
    }
    span {
      margin-top: 10px;
      color: #ae0903;
      font-weight: bold;
    }
  }

  button.salvar {
    margin-top: 20px;
    width: 100%;
    background: #ae0903;
    text-align: center;
    padding: 20px;
    border: 0;
    border-radius: 20px;
    font-weight: bold;
    color: #fff;
    &:hover {
      background: #e6120a;
    }
  }
  a {
    margin-top: 15px;
    font-size: 14px;
    color: #3a3b3c;
    &:hover {
      color: #6a6a6a;
    }
  }
`;
