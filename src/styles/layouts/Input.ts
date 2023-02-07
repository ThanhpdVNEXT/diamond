import { css } from "@emotion/react";

export const tooltipInput = css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const inputBox = css`
  background: #ff000000 !important;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  border: 1px solid transparent;
  padding-top: calc(0.5em - 1px);
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.5em - 1px);
  padding-right: calc(0.5em - 1px);
  height: auto;
  width: inherit;
  color: #bdbdbd !important;
  ::placeholder {
    color: #bdbdbd;
    opacity: 1;
  }
  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 1em;
    width: 1em;
    border-radius: 50em;
    background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)
      no-repeat 50% 50%;
    background-size: contain;
    opacity: 0;
    pointer-events: none;
  }
  :focus::-webkit-search-cancel-button {
    opacity: 0.3;
    pointer-events: all;
  }
`;

export const inputImg = (color = "--input-color") => css`
  background: var(${color});
  border-radius: 2px;
  padding: 0.2em calc(0.5em - 1px);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #fff;
  border-radius: calc(1em + 1px);
  transition: 0.3s;
`;

export const outlineBox = css`
  cursor: pointer;
  ::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    border-radius: 2px;
    transition: box-shadow 0.3s ease;
  }
`;

export const iconBox = (color = "white") => css`
  background: ${color};
  padding: calc(0.5em - 1px);
  border-radius: 15px;
  border: 0;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const inputBox = css`
//   width: 100%;
//   border: 2px solid #aaa;
//   border-radius: 4px;
//   margin: 8px 0;
//   outline: none;
//   padding: 8px;
//   box-sizing: border-box;
//   transition: 0.3s;
//   :focus {
//     border-color: dodgerBlue;
//     box-shadow: 0 0 8px 0 dodgerBlue;
//   }
// `;
