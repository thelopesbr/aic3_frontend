import styled from "styled-components";

export const Container = styled.header`
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 1.1rem;

    li {
      position: relative;

      a::after {
        content: "";
        width: 100%;
        height: 3px;
        position: absolute;
        top: 100%;
        left: 0;
        background: var(--primary);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 500ms;
      }

      a:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
`;
