import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
  margin: 100px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 19px;
  background-color: #a48374;
  width: 400px;
  height: 50px;
  font-weight: bold;
`;

export const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
`;

export const DropdownButton = styled.div`
  cursor: pointer;
`;

export const Menu = styled.div`
  background: #a48374;
  position: absolute;
  top: 52px;
  left: 50%;
  width: 120px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  &:after {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 12px solid transparent;
    border-top-width: 0;
    border-bottom-color: #a48374;
  }

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0);
      left: 50%;
    `};
`;

export const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }

  & > li:first-of-type {
    margin-top: 10px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Li = styled.li``;

export const LinkWrapper = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: white;
`;

const Logout = styled.div`
  cursor: pointer;
  font-size: 16px;
  display: block;
  text-decoration: none;
  color: white;
  font-size: 19px;
`;
