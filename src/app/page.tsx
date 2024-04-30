
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            {/* <img
              src="/imgs/km.png"
              alt="KM Produções e Eventos"
              className="shadow-dark"
            /> */}
            <h1>Km Produções e Eventos</h1>
            <p>O seu Evento começa aqui</p>
            <div className="social-links">
              <a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="https://facebook.com/" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://www.instagram.com/kmproducoeseventosoficial/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://linkedin.com/in/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
