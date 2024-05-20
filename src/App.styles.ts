import styled from "styled-components";

export const Container = styled.div`

  .header {
    background-color: transparent;
    height: 4.5rem;
    width: 100%;
    color: #149400;
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
  }

  .header .logo {
    font-size: 2rem;
    font-family: "Manjari", sans-serif;
  }

  .header .logo:hover {
    color: #22ff00;

  }

  .header .nav {
    font-size: 1rem;
    min-width:430px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid red;
  }



  .header .nav ul {
    display: flex;
    gap: 1.5rem;
  }

  .header .nav a {
    text-decoration: none;
    color: #149400;
  }

  .nav a:hover {
    color: #22ff00;
    text-decoration: underline;
  }

  .header .social {
    font-size: 1rem;
    display: flex;
    gap: 1rem;
  }

  .header .social svg {
    color: #149400;
  }

  .header .social svg:hover {
    color: #22ff00;
  }

  .section-one {
    width: 100vw;
    height: 100vh;
    background-color: rgb(12, 12, 12);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper-section-one {
    width: 1024px;
    height: 100%;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1024px;
  }

  .section-one .about {
    width: 50%;
  }

  .section-one .photo {
    width: 50%;
  }

  .about p:first-child {
    color: #149400;
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

  .typing-demo {
  width: 27ch;
  animation: typing 2s steps(27), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
  color: #FFFFFFa8;
  border-color: #149400;

}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}

.photo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo img {
  border-radius: 50%;
  width: 300px;
}

.section-two {
  width: 100vw;
  height: 100vh;
}

`