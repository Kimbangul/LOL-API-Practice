import styled, {css} from "styled-components";

export const COLOR_LIST2 = [
  '#fff5e9', '#ead9bb', '#f6e3ac', '#f4d091', 
  '#caa1a6', '#c997a1', '#d4e5f7', '#bcdcf5',
  '#85c9f0', '#5fbfed', '#8acbc1', '#7cc5ad',
  '#5dae9c', '#d4ddea', '#bdcde3', '#a6b4cf',
  '#9473a6', '#f192b0', '#ef7a97', '#dd6b91',
]

export const COLOR_LIST = [
'#1abc9c', '#2ecc71', '#3498db', '#9b59b6',
 '#34495e', '#16a085', '#27ae60', '#2980b9', 
 '#8e44ad', '#2c3e50', '#f1c40f', '#e67e22',
 '#e74c3c', '#ecf0f1', '#95a5a6', '#f39c12',
'#d35400', '#c0392b', '#bdc3c7', '#7f8c8d'
]

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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 4.8rem;
    gap: 3.2rem;
  `,
  Item: styled.li<{colorKey?: number}>`
    padding: 2.4rem;
    border-radius: 1.6rem;
    background: ${({colorKey}) => 
     `${COLOR_LIST[colorKey || 0]}40`
    };
    box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.08);
    border: 0.1rem solid rgba(255,255,255,0.2);
    /* border: 0.1rem solid rgba(0,0,0,0.05); */
    border-right: 0.1rem solid rgba(255,255,255,0.08);
    border-bottom: 0.1rem solid rgba(255,255,255,0.08);
    /* border-right: 0.1rem solid rgba(0,0,0,0.2); */
    /* border-right: 0.1rem solid rgba(0,0,0,0.08);
    border-bottom: 0.1rem solid rgba(0,0,0,0.08); */
    backdrop-filter: blur(2rem);
  `,
}