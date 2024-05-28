import styled from "styled-components";

export const Main = styled.main`
   /* ---header---- */

  .header {
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(1rem);
    height: 4.5rem;
    width: 100%;
    color: #149400;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 5;
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

  .header .hamburguer-icon {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    .wrapper {
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 768px) {
    .header .logo a {
      font-size: 2rem;
    }

    .header .nav, .header .social {
      display: none;
    }

    .header .hamburguer-icon {
      display: block;
      font-size: 1.6rem;
      cursor: pointer;
    }

    .header .hamburguer-icon:hover {
      color: #22ff00;
    }
  }

  /* ---menu-hamburguer---- */

  .header .hamburguer-menu {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .header {}

    .header .hamburguer-menu {
      background-color: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(1rem);
      -webkit-backdrop-filter: blur(10px);
      height: calc(100vh - 4.5rem);
      margin-top: 4.51rem;
      position: fixed;
      top: 0;
      right: 0;
      z-index: 999;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hamburguer-menu ul {
      text-align: center;
    }

    .hamburguer-menu ul li a {
    color: rgb(255, 255, 255);
    font-size: 1.2rem;
    padding: 20px 40px;
    display: block;
    text-decoration: none;
  }
  }




  /* ---section-one---- */

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

  .about a {
    text-decoration: none;
  }

  .about button {
    border: 0.2rem solid #149400;
    padding: 1rem 2rem;
    width: fit-content;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .4s;
    cursor: pointer;
    border-radius: 10px;
    background-color: #149400;
    color: #d1ffca;
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

  @media screen and (max-width: 768px) {
    .section-one .photo {
      width: 40%;
    }

    .section-one .photo img {
      width: 250px;
    }

    .section-one .about {
      width: 60%;
    }

    .section-one .about p:first-child {
      font-size: 1.3rem;
    }

    .section-one .about p:nth-child(2) {
      font-size: 4rem;
    }

    .typing-demo {
      font-size: 1.6em;
    }
  }

  @media screen and (max-width: 768px) {
    .section-one .wrapper{
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .section-one .about {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem 0;
    }

    .section-one .photo {
      width: 100%;
    }

    .section-one .about {
      width: 100%;
    }

    .section-one .about p:nth-child(2) {
      font-size: 3rem;
    }
  }

   /* ---section-sobre---- */

  .section-sobre {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section-sobre .wrapper {
    flex-direction: column;
    gap: 5rem;
  }

  .section-sobre .sobre-header {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }

  .section-sobre .sobre-header h2 {
    color: #149400;
    font-size: 3rem;
    font-weight: bold;
    margin: 10px 0 30px;
  }

  .section-sobre .wrapper .content{
    display: flex;
    justify-content: center;
    align-items: center;
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

  .section-sobre .about p {
    font-size: 18px;
    line-height: 1.3;
    color: #FFFFFFa8;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    .section-sobre .wrapper {
    gap: 1rem;
  }

    .section-sobre .content {
      flex-direction: column;
      gap: 1rem;
    }

    .section-sobre .about {
      width: 70%;
      text-align: center;
    }

    .section-sobre .photo {
      order: 2;
      width: 70%;
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
    }

    .section-sobre .photo img {
      width: 80%
    }
  }

   /* ---section-projetos---- */

  .section-projetos {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(12, 12, 12);
  }

  .section-projetos .wrapper {
    width: 1024px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    max-width: 1024px;
    gap: 5em;
  }

  .section-projetos .projetos-header {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }

  .section-projetos .projetos-header h2 {
    color: #149400;
    font-size: 3rem;
    font-weight: bold;
  }

  .section-projetos .cards {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .project-card {
    width: 300px;
    height: 450px;
    background-color: rgb(25, 25, 25);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 16px;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: -1rem 1rem 1rem rgba(0, 0, 0, 0.267);
    transition: .3s;
  }

  .project-card:hover {
    background-color: rgb(40, 40, 40);
    
    .cover {
      display: flex;
    }
  }

  .project-card h3 {
    width: 150px;
    height: 50px;
    font-size: 1.5rem;
    text-align: center;
    color: #FFFFFFa8;
  }

  .project-card .img-wrapper {
    width: 250px;
    height: 150px;
    min-width: 250px;
    min-height: 150px;
    position: relative;
    transition: .3s;
  }

  .cover {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 100;
    top: 0;
    align-items: center;
    justify-content: space-around;
    display: none;
    background-color: rgba(60, 60, 60, .5);
    padding: 0 40px;
  }

  .cover a {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }

  .cover a svg{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  .cover a svg path:first-child {
    color: white;
  }

  .cover a svg path:last-child {
    color: black;
  }

  .cover a:hover {
    background-color: black;

    svg path:first-child {
      color: black;
    }

    svg path:last-child {
      color: white;
    }
  }

  .project-card .img-wrapper img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .project-card p {
    font-size: 1.2rem;
    line-height: 1.3;
    color: #FFFFFFa8;
    text-align: center;
  }

    @media screen and (max-width: 1024px) {
    .wrapper-projetos {
      margin: 0 20px;
    }
  }

  @media screen and (max-width: 768px) {
    .section-projetos .cards {
      justify-content: space-around;
    }
  }

   /* ---section-habilidades---- */

  .section-habilidades {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section-habilidades .wrapper {
    width: 1024px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1024px;
    padding-top: 5rem;
  }

  .section-habilidades .habilidades-header {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .section-habilidades .habilidades-header h2 {
    color: #149400;
    font-size: 3rem;
    font-weight: bold;
  }

  .section-habilidades .cards {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .section-habilidades .skill-card {
    background-color: rgb(12, 12, 12);
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 0.6rem;
    box-shadow: -1rem 1rem 1rem rgba(0, 0, 0, 0.267);
    transition: 400ms;
  }

  .section-habilidades .skill-card:hover {
    background-color: rgb(30, 30, 30)
  }

  .skill-card i {
    color: #FFFFFFa8;
    margin: 0;
    margin-left: 20px;
    padding: 0;
    margin-bottom: 30px;
  }

  .skill-card h3 {
    color: #149400;
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .skill-card p {
    font-size: 1rem;
    line-height: 1.3;
    color: #FFFFFFa8;
    text-align: center;
  }

  @media screen and (max-width:768px) {
    .section-habilidades .cards {
      flex-direction: column;
      gap: 1rem;
    }
  }

    /* ---section-contato---- */

  .section-contato {
    width: 100vw;
    min-height: 100vh;
    background-color: rgb(12, 12, 12);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section-contato .contato {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 50px;
    margin-top: 5rem;
  }

  .contato h2 {
    color: #149400;
    font-size: 3rem;
    margin-bottom: 30px;
  }

  .contato .contact-ancora {
    color: #FFFFFFa8;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    padding: 15px;
  }

  .contato .cards:hover {
    background-color: rgb(30, 30, 30);
    border-radius: 10px;
  }

  .contato .contact-ancora svg {
    margin-right: 10px;
  }

  .contato a {
    text-decoration: none;
  }

  .contato button {
    background-color: #149400;
    border: 2px solid #149400;
    color: #149400;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 30px;
    cursor: pointer;
    transition: .4s;
    border-radius: 10px;
    color: #d1ffca;
  }

  .section-contato .image {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section-contato .image img {
    width: 150px;
    transform: scaleX(-1);
    animation: upDown 3s infinite;
  }

  @keyframes upDown {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-30px); }
  }

  @media screen and (max-width: 768px) {
    .section-contato .wrapper{
      flex-direction: column;
      gap: 3rem;
    }

    .section-contato .contato {
      width: 90%;
      align-items: center;
      padding-left: 0;
    }

    .contato .contact-ancora {
      font-size: 1.1rem;
    }

    .section-contato .image {
      display: none;
    }
  }

    /* ---section-contato---- */

  footer {
    width: 100vw;
    height: 5rem;
    display: flex;
    justify-content: center;
    background-color: rgb(12, 12, 12);
  }

  footer .wrapper {
    border-top: 1px solid rgb(150, 150, 150);
  }

  footer .logo a {
    color: #149400;
    font-size: 2rem;
    text-decoration: none;
  }

  footer p {
    color: #FFFFFFa8;
  }

  footer ul {
    display: flex;
    gap: 1.5rem;
  }

  footer ul li a {
    text-decoration: none;
    color: #149400;
    position: relative;
    padding: 10px 0;
    transition: .3s;
  }

  @media screen and (max-width: 768px) {
    footer p {
      font-size: .7rem;
    }
  }

`