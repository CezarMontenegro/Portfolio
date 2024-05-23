import { Container } from "./App.styles"
import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.jpeg";
import webstore from "./assets/web-store.gif";

function App() {
  return (
    <Container>
      <header className="header">
        <div className="wrapper">
          <div className="logo"><a href="#section-one">&lt;\Cezar&gt;</a></div>
          <nav className="nav">
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#habilidades">Habilidades</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
          <div className="social">
            <ul>
              <li>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" fill="currentcolor"></path>
                  </svg>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" fill="currentcolor"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section id="section-one" className="section-one">
        <div className="wrapper">
          <div className="about">
            <p>Hello World 👋🏼</p>
            <p>Eu sou Cezar,</p>
            <p className="typing-demo">Desenvolver Web Full Stack.</p>
            <button>
              Fale comigo
            </button>
          </div>
          <div className="photo">
            <img src={photo1} alt="Cezar Montenegro" />
          </div>
        </div>
      </section>
      <section id="sobre" className="section-sobre">
        <div className="wrapper">
            <div className="photo">
              <img src={photo2} alt="" />
            </div>
            <div className="about">
              <h2>Sobre mim</h2>
              <p>isicing elit. Odio recusandae consectetur at labore iste, ex eaque officia obcaecati quos eligendi amet quidem veniam suscipit impedit distinctio enim dolore explicabo sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error similique sunt laudantium corrupti incidunt inventore. Minus blanditiis velit eligendi et dignissimos, quas aliquid odio magnam, repellat, laborum nesciunt molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis totam aliquam praesentium optio ducimus? Accusantium officiis rem mollitia iste tempora explicabo laudantium, accusamus modi at doloribus dicta est quae magni?</p>
            </div>
        </div>
      </section>
      <section id="projetos" className="section-projetos">
        <div className="wrapper-projetos">
          <div className="projetos-header">
            <h2>Projetos</h2>
          </div>
          <div className="cards">
            <div className="project-card">
              <h3>Pomofocus</h3>
              <div className="img-wrapper">
                <img src={webstore} alt="" />
              </div>
              <p>Plataforma de estudos desenvolvida na Hackathon do Programa de Formação 4 da FCamara.</p>
              <p>HTML-CSS-JS-React</p>
            </div>
            <div className="project-card">
              <h3>Pomofocus</h3>
              <div className="img-wrapper">
                <img src={webstore} alt="" />
              </div>
              <p>Plataforma de estudos desenvolvida na Hackathon do Programa de Formação 4 da FCamara.</p>
              <p>HTML-CSS-JS-React</p>
            </div>
            <div className="project-card">
              <h3>Pomofocus</h3>
              <div className="img-wrapper">
                <img src={webstore} alt="" />
              </div>
              <p>Plataforma de estudos desenvolvida na Hackathon do Programa de Formação 4 da FCamara.</p>
              <p>HTML-CSS-JS-React</p>
            </div>
          </div>
        </div>
      </section>
      <section id="habilidades" className="section-habilidades">
        <div className="wrapper-habilidades">
          <div className="habilidades-header">
            <h2>Habilidades</h2>
          </div>
          <div className="cards">
            <div className="skill-card">
              <i className="fa-solid fa-display fa-4x"></i>
              <h3>Front end</h3>
              <p>Desenvolvimento de sites responsivos e interativos utilizando tecnologias modernas, como o React e Next, juntamente com bibliotecas populares como Tailwind CSS e Styled Components.</p>
            </div>
            <div className="skill-card">
              <i className="fa-solid fa-database fa-4x"></i>
              <h3>Back end</h3>
              <p>Desenvolvimento de soluções no lado do servidor com Node.js e o framework Express. Utilizo abordagens de Desenvolvimento Orientado a Testes (TDD) e arquitetura limpa para criar APIs eficientes e escaláveis.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contato" className="section-contato">
        <div className="wrapper">
          <h2>Contato</h2>
        </div>
      </section>
      
    </Container>
  )
}

export default App
