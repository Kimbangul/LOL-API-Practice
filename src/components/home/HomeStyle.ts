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
    width: 100%;
    max-height: 640px;
    overflow: auto;
    padding: 2.4rem;
    border-radius: 1.6rem;
    backdrop-filter: blur(2rem);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  `,
}

export default Home;