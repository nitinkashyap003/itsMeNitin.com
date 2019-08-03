import React from 'react';
import { css } from 'react-emotion';

const Background = css`
  background-image: url(https://s3.ap-south-1.amazonaws.com/skillate-static-files/iimjobs-logo.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  width: 100%;
  height: 100%;
`;
const BackgroundFunc = () =>{
  return <Background/>;
}
export default BackgroundFunc;