import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;

  nav {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  a {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.6px;
    transition: 0ms.3s;
    text-decoration: none;
    position: relative;
  }

  a:hover {
    opacity: .7;

  }

  a::after {
    content: "";
    width: 0;
    height: 2px;
    background-color: #ffffff;
    position: absolute;
    bottom: 2px;
    left: 0;
    transition: 0.3s;
  }

  a:hover::after{
    width: 100%;
  }
`;
