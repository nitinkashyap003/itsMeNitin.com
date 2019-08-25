import * as theme from '../../../styles/theme.js';
import { css } from 'react-emotion';

export const darkBackground = css`
  background-color: ${theme.backgroundColors.dark};
`;

export const appHeaderBorder = css`
  box-shadow: inset 0 -1px 0 0 #d9dce2;
`;

export const appHeaderNoBorder = css`
  box-shadow: none;
`;

export const tabAligner = css`
  display: flex;
`;

export const tabContainer = css`
  display: flex;
  justify-content: space-between;
  padding: 0rem 1rem;
  margin: 0 auto;
  max-width: ${theme.dimensions.headerWidth};
`;

export const darkTabDefault = css`
  height: 34px;
  font-size: ${theme.fontSize.regular};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.fontColor.darkBackground};
  background-color: rgba(255, 255, 255, 0.15);
  padding: 0rem 12px;
  display: flex;
  align-items: center;
  margin-right: 8px;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  &:hover {
    text-decoration: none;
    color: ${theme.fontColor.white};
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:focus {
    text-decoration: none;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export const darkTabActive = css`
  height: 34px;
  font-size: ${theme.fontSize.regular};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.fontColor.white};
  background-color: ${theme.colors.defaultblue};
  padding: 0rem 12px;
  display: flex;
  align-items: center;
  margin-right: 8px;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  &:hover {
    text-decoration: none;
    color: ${theme.fontColor.white};
    background-color: ${theme.colors.defaultblue};
  }
  &:focus {
    text-decoration: none;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export const lightTabDefault = css`
  height: 34px;
  font-size: ${theme.fontSize.regular};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.fontColor.light};
  background-color: ${theme.backgroundColors.lightGrey};
  border: 1px solid ${theme.borderColors.default};
  padding: 0rem 12px;
  display: flex;
  align-items: center;
  margin-right: 8px;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  &:hover {
    text-decoration: none;
    color: ${theme.fontColor.dark};
  }
  &:focus {
    text-decoration: none;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export const lightTabActive = css`
  height: 34px;
  font-size: ${theme.fontSize.regular};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.fontColor.dark};
  background-color: initial;
  padding: 0rem 12px;
  display: flex;
  align-items: center;
  margin-right: 8px;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  border-bottom: 1px solid ${theme.backgroundColors.extraLightGrey};
  &:hover {
    text-decoration: none;
    color: ${theme.fontColor.dark};
    background-color: initial;
  }
  &:focus {
    text-decoration: none;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export const whiteTabActive = css`
  height: 34px;
  font-size: ${theme.fontSize.regular};
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.fontColor.dark};
  background-color: initial;
  padding: 0rem 12px;
  display: flex;
  align-items: center;
  margin-right: 8px;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  border-bottom: 1px solid ${theme.backgroundColors.white};
  &:hover {
    text-decoration: none;
    color: ${theme.fontColor.dark};
    background-color: initial;
  }
  &:focus {
    text-decoration: none;
  }
  &:last-child {
    margin-right: 0px;
  }
`;
