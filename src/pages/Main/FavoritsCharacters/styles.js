import styled from 'styled-components';

export const Container = styled.aside`
  min-width: 350px;
  max-width: 350px;
  padding: 0 15px;
`;

export const FavoritsCharactersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    display: flex;
    transition: all 0.2s;
    padding: 0 5px 10px 0;
    a {
      display: flex;
      padding: 10px;
      flex-direction: column;
      background: #242526;
      border-radius: 8px;
      &:hover {
        transform: translateX(3px);
        box-shadow: 0 4px 4px rgb(0, 0, 0, 0.3);
      }
      div {
        height: 200px;
        width: 130px;
        overflow: hidden;
        position: relative;
        img {
          position: absolute;
          width: auto;
          height: 100%;
          right: -30%;
        }
      }
      span {
        margin-top: 5px;
        width: 130px;
        color: #a9aaae;
      }
    }
  }
`;
