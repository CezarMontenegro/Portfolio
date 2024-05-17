import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(12, 12, 12);
  height: 100vh;
  width: 100vw;

  .header {
    border: 1px solid red;
    background-color: transparent;
    height: 4.5rem;
    width: 100%;
    color: #6ed309;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    padding-inline: min(10rem, 100%);
  }

  .header .logo {
    font-size: 2rem;
    font-family: "Manjari", sans-serif;
  }

  .header .nav {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header .nav ul {
    display: flex;
    gap: 1.5rem;
  }

  .header .nav a {
    text-decoration: none;
    color: #6ed309;

  }

  .header .social {
    font-size: 1rem;
    display: flex;
    gap: 1rem;
  }
`