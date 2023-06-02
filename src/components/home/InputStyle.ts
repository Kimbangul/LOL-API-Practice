import styled from "styled-components";

const Input = {
  Container: styled.form`
    display: flex;
    height: 4.9rem;
    justify-content: center;
    align-items: center;
    gap: 0 1.6rem;
  `,
  Input: styled.input`
    outline: none;
    width: 50%;
    padding: 1.6rem 2.4rem;
    letter-spacing: 0.1rem;
    border-radius: 0.8rem;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    border: 0.1rem solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
    border-right: 0.1rem solid rgba(255, 255, 255, 0.2);
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
    transition: background 0.3s, color 0.3s;

    &:focus{
      background: rgba(255, 255, 255, 0.6);
      color: #333;
    }

    &::placeholder{
      color: rgba(255,255,255, 0.5);
    }
  `,
  Button: styled.button`
    width: 6rem;
    height: 100%;
    display: inline-block;
    align-self: stretch;
    padding: 0.4rem 0.8rem;
    color: #666;
    cursor: pointer;
    background: #fff;
    max-width: 10rem;
    font-weight: 600;
    border: 0.1rem solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
    border-right: 0.1rem solid rgba(255, 255, 255, 0.2);
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
    border-radius: 0.8rem;
    transition: transform 0.3s;

    &:active{
      transform: scale(0.9);
    }
  `
}

export default Input;