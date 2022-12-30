import { css } from "@emotion/react";

export const navbar = css`
  background-color: #fff;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const active = (isActive = false) => css`
  float: left;
  display: block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  :hover {
    background-color: #ddd;
    color: black;
  }
  ${isActive && "background-color: #04aa6d; color: white;"}
`;
