import styled from "styled-components";

export const Info = {
  List: styled.ul`
    margin-top: 4rem;
    padding: 2.4rem;
    border-radius: 1.6rem;
    background: rgba(255,255,255,0.2);
    box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.05);
  `,
  Item: styled.li`
    color: #fff;
    margin-top: 0.8rem;

    &:first-child{
      margin-top:0;
    }
  `,
}

export const Record = {
  Container: styled.section`
    margin-top: 4rem;
  `,
  Title: styled.h3`
    color: #fff;
    text-align: center;
  `,
  List: styled.ul`
  
  `,
  Item: styled.li`
  
  `,
}