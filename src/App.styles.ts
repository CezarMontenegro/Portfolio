import styled from "styled-components";

export const Container = styled.div`

  .header {
    background-color: transparent;
    height: 4.5rem;
    width: 100%;
    color: #6ed309;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
  }

  .wrapper {
    width: 1024px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1024px;
    border: 1px solid red;
  }

  .header .logo {
    font-size: 2rem;
    font-family: "Manjari", sans-serif;
  }

  .header .nav {
    font-size: 1rem;
    min-width:430px;
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

  .section-one {
    width: 100vw;
    height: 100vh;
    background-color: rgb(12, 12, 12);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
  }

  .wrapper-section-one {
    width: 1024px;
    height: 100%;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1024px;
    border: 1px solid red;
  }

  .section-one .about {
    width: 50%;
    border: 1px solid green;
  }

  .section-one .photo {
    width: 50%;
    border: 1px solid green;
  }

  .about p:first-child {
    color: #6ed309;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 150%;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .about p:nth-child(2) {
    font-size: 5rem;
    color: rgb(255, 255, 255);
    line-height: 110%;
    margin-bottom: 1rem;
  }

  .about p:last-child {
    font-size: 2.5rem;
    color: #FFFFFFa8;
  }

  .section-two {
    width: 100vw;
    height: 100vh;
    border: 1px solid red;
  }

`