import styled, {StyledComponentProps, css} from "styled-components";

const Loading = {
  Container: styled.div`
  
  `,
  Spinner: styled.div`
    @keyframes loadingI {
      100% {
        transform: rotate(360deg);
      }
    }
    width: 4.5rem;
    height: 4.5rem;
    position: relative;
    margin: 0 auto;
    animation: loadingI 2s linear infinite;

  `,
  Bubble: styled.div<{delay: string}>`
    @keyframes bounce {
      0%,
      100% {
        transform: scale(0);
      }
      50% {
        transform: scale(1);
      }
    }

    position: absolute;
    top: 0;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    background-color: #fff;

    animation: bounce 2s ease-in-out infinite;
    animation-delay: ${(props) => props.delay};

    &:nth-child(2){
      top: auto;
      bottom: 0;
    }
  `,
  Text: styled.p`
    text-align: center;
    color: #fff;
    letter-spacing: 0.1rem;
    margin-top: 1.6rem;
  `,
  Ellipsis: styled.span<{idx: number}>`
    @keyframes ellipsisWord {
      0%{
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
    }
    animation-name: ellipsisWord;
    animation-duration: 0.9s;
    animation-direction: normal;
    animation-iteration-count: infinite;
    animation-delay: ${({idx}) => idx * 0.3}s;
  `,
}

export default Loading;