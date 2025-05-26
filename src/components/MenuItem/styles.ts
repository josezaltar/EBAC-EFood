import { styled } from 'styled-components'

const StyledMenuItem = styled.div`
  height: 338px;
  width: 320px;
  padding: 8px;
  background-color: #e66767;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  h3 {
    color: #ffebd9;
    font-weight: 900;
    font-size: 16px;
    font-family: Roboto, sans-serif;
    margin: 8px 0 4px;
  }

  p {
    color: #ffebd9;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    font-family: Roboto, sans-serif;
    margin: 0 0 8px;
    height: 88px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  button {
    background-color: #ffebd9;
    color: #e66767;
    font-weight: 700;
    font-size: 14px;
    height: 24px;
    width: 100%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default StyledMenuItem
