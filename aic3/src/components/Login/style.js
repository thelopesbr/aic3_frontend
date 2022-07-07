import styled from "styled-components";

export const Container = styled.form`
  max-width: 30%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.25rem;
  background-color: var(--white);

  h1 {
    margin-bottom: 1rem;
    text-align: center;
  }

  h1,
  label,
  input,
  option,
  a {
    color: var(--black);
  }

  a {
    margin-top: 1rem;
    text-align: center;
    font-weight: bold;
    font-size: 0.9rem;

    &:hover {
      color: var(--primary);
    }
  }

  label {
    margin-bottom: 0.25rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  input,
  select {
    border: 1px solid var(--black);
    border-radius: 0.25rem;
    padding: 0.4rem;
    margin-bottom: 1rem;
    width: 100%;
    font-size: 1.1rem;
    color: var(--black);
    background-color: var(--white);
    transition: all 0.2s ease-in-out;

    &:focus {
      outline: none;
      border-color: var(--primary);
    }

    &::placeholder {
      color: var(--black);
    }
  }

  button {
    margin-top: 1rem;
    background-color: var(--primary);
    color: var(--white);
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--primary-dark);
    }

    &:active {
      background-color: var(--primary-dark);
    }
  }
`;
