import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  li {
    width: 187px;
    padding: 10px;
    background: #3a3b3c;
    border-radius: 17px;
    margin: 15px;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      div {
        height: 250px;
        width: 160px;
        overflow: hidden;
        position: relative;
        img {
          position: absolute;
          height: 100%;
        }
      }
      strong {
        font-size: 10px;
        margin: 5px 0;
      }
      span {
        font-weight: bold;
        font-size: 20px;
        max-width: 160px;
      }
    }
  }
`;

export const Navigation = styled.div``;
