import styled from "styled-components";

const Input = {
  Container: styled.form`
    display: flex;
    align-items: center;
  `,
  Input: styled.input`
    outline: none;
    border: 0.1rem solid #ddd;
    padding: 0.8rem 1.6rem;
    border-radius: 0.4rem;
    background: rgb(20, 22, 43);
    color: rgb(249, 250, 251);

    &::placeholder{
      color: rgba(113, 119, 144, 0.78);
    }
  `,
  Button: styled.button`
    padding: 0.4rem 0.8rem;
    cursor: pointer;
  `
}

export default Input;