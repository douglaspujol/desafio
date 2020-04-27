import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  height: 100%;

  > div.alinhamento {
    min-width: 350px;
    max-width: 350px;
    background: #18191a;
    height: 20px;
  }
`;
export const Search = styled.div`
  min-width: 580px;
  display: flex;
  flex-direction: column;

  input {
    height: 70px;
    padding: 20px 15px;
    background: #3a3b3c;
    border: none;
    border-radius: 20px;
    color: #a9aaae;
    margin-bottom: 25px;
    &::placeholder {
      color: #a9aaae;
    }
  }
`;

export const ListCharacters = styled.ul`
  li {
    margin-top: 20px;
    flex: 1;
    display: flex;
    background: #242526;
    justify-content: space-between;
    height: 120px;
    border-radius: 5px;
    color:#fff;
    transition: all 0.2s;
    &:hover{
      transform: translateX(3px);
      box-shadow: 0 4px 4px rgb(0,0,0,0.3);
    }

    button {
      background: #c20902;
      border: 0;
      border-radius: 0 5px 5px 0;
      width: 80px;
      color:#fff;
      font-weight:bold;
    }
    div {
      display: flex;
      align-items: center;
      margin-left: 15px;
      color: #A9AAAE;

      img {
      width: 100px;
      height:100px;
      border-radius: 50%;
      margin-right: 15px;
    }
  }
`;
