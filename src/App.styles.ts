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
    height: 100%;
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

  .header .logo a {
    text-decoration: none;
    color: #149400;

  }

  .header .logo a:hover {
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

  .section-one .about {
    width: 50%;
  }

  .section-one .about p:first-child {
    color: #149400;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 150%;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .section-one .about p:nth-child(2) {
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
    margin-bottom: 2rem;
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

.section-one .photo {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

.section-one .photo img {
  border-radius: 50%;
  width: 300px;
  background-color: #149400;
  transition: .3s;
}

.section-one .photo img:hover {
  width: 350px;
}

.section-sobre {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-sobre .photo{
  width: 50%;
  display: flex;
  justify-content: flex-start;
}

.section-sobre .photo img {
  border-radius: 10px;
  box-shadow: -1px 1px 6px rgb(182, 182, 182);
}

.section-sobre .about {
  width: 50%;
  padding: 0 20px;
}

.section-sobre .about h2 {
  color: #149400;
  font-size: 3rem;
  font-weight: bold;
  margin: 10px 0 30px;
}

.section-sobre .about p {
  font-size: 18px;
  line-height: 1.3;
  color: #FFFFFFa8;

}

.section-projetos {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(12, 12, 12)
}

.wrapper-projetos {
  width: 1024px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  padding-top: 4.5rem;
  }

.section-projetos .projetos-header {
  width: 100%;
  display: flex;
  justify-content: center;
}

.section-projetos .projetos-header h2 {
  color: #149400;
  font-size: 3rem;
  font-weight: bold;
  margin: 20px 0;
}

.section-projetos .cards {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}

.project-card {
  width: 330px;
  height: 540px;
  background-color: rgb(20, 20, 20);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 16px;
  padding: 4rem; 
}

.project-card h3 {
  width: 150px;
  height: 50px;
  font-size: 1.5rem;
  text-align: center;
}

.project-card .img-wrapper {
  width: 250px;
  height: 200px;
}

.project-card img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.project-card p {
  font-size: 18px;
  line-height: 1.3;
  color: #FFFFFFa8;
  text-align: center;
}

.section-habilidades {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-contato {
  width: 100vw;
  height: 100vh;
  background-color: rgb(12, 12, 12);
  display: flex;
  align-items: center;
  justify-content: center;
}

`