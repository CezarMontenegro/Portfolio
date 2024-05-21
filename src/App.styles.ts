import styled from "styled-components";

export const Container = styled.div`

  .header {
    background-color: transparent;
    backdrop-filter: blur(5px);
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
    font-size: 2.5em;
    font-family: "Manjari", sans-serif;
    padding: 6px 0;
    position: relative;
  }

  .header .logo:hover {
    color: #22ff00;

  }

  .header .nav {
    font-size: 1rem;
    min-width:430px;
    height: 70px;
    width: 430px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .header .nav ul {
    display: flex;
    gap: 1.5rem;
  }

  .nav ul li a {
    text-decoration: none;
    color: #149400;
    position: relative;
    padding: 10px 0;
    transition: .3s;
  }

  .nav ul li a:hover {
    color: #22ff00;
  }

  .nav ul li a::after, .header .logo::after, .social a::after {
    content: " ";
    width: 0%;
    height: 2px;
    background-color: #22ff00;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: .3s ease-in-out;
  }

  .nav ul li a:hover::after, .header .logo:hover::after, .social a:hover::after {
    width: 100%;
  }

  .header .social {
    font-size: 1rem;
    display: flex;
    gap: 1rem;
  }

  .header .social a {
    position: relative;
    padding: 6px 0;
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
    border-right: 3px solid #149400;
    font-family: monospace;
    font-size: 2em;
    color: #FFFFFFa8;
    margin-bottom: 40px;
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

.about button {
  background: none;
  border: 0.2rem solid #149400;
  padding: 1rem 2rem;
  width: fit-content;
  color: #149400;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .4s;
}

.about button:hover {
  color: #d1ffca;
  background-color: #149400;
}



.photo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo img {
  border-radius: 50%;
  width: 300px;
  background-color: #149400;
  transition: .3s;
}

.photo img:hover {
  width: 350px;
}

.section-two {
  width: 100vw;
  height: 100vh;
}

`