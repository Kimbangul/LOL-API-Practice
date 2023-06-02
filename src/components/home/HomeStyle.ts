import styled from "styled-components";

const Home = {
  Wrapper: styled.section`
    width: 100%;
    height: 100vh;
    padding: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Container: styled.div`
    max-width: 1280px;
    max-height: 640px;
    overflow: auto;
    padding: 2.4rem;
    border-radius: 1.6rem;
    backdrop-filter: blur(2rem);
    background-color: rgba(16,18,27, 0.4);
  `,
}

export default Home;