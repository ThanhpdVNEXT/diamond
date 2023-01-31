import { css } from "@emotion/react";

export const navbar = css`
  background-color: #fff;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #5db075;
`;

export const active = (isActive = false) => css`
  float: left;
  display: block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  ${isActive && "color: #5DB075;"}
`;

export const linkMenu = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
