import styled, {StyledComponentProps, css} from "styled-components";

const Loading = {
  Spinner: styled.div`
    @keyframes loadingI {
      100% {
        transform: rotate(360deg);
      }
    }

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

    animation: bounce 2s ease-in-out infinite;
    animation-delay: ${(props) => props.delay};
  `,
}

export default Loading;