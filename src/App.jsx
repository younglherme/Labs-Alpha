import "./index.css";
import imgFundoLabs from "./assets/Labs.png";
import Tulani from "./assets/TulaniSouza.png";
import Linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import guilherme from "./assets/Guilherme.png";
import stella from "./assets/stella.png";
import isabela from "./assets/isabela.jpg";

function App() {
  const equipe = [
    {
      id: 1,
      nome: "Tulani Souza",
      foto: Tulani,
      descricao:
        "Desenvolvedora Full-Stack | Cybersecurity & Ethical Hacking | Gestora de TI",
      linkedin: "https://www.linkedin.com/in/tulani-souza",
      github: "https://github.com/tulanisouza",
    },
    {
      id: 2,
      nome: "Guilherme Silva",
      foto: guilherme,
      descricao: "Desenvolvedor Backend (Full-Stack)",
      linkedin: "https://www.linkedin.com/in/guilhermesilva-dev/",
      github: "https://github.com/younglherme",
    },
    {
      id: 3,
      nome: "Stella Bezerra",
      foto: stella,
      descricao: "Scrum  Master | Gestão de Projeto | Agilista | Transformação Digital",
      linkedin: "https://www.linkedin.com/in/stellabezerra",
      github: "https://github.com/Stella-Bezerra",
    },
     {
      id: 4,
      nome: "Isabela Viana",
      foto: isabela,
      descricao: "Desenvolvedora Full Stack Web | Automação",
      linkedin: "https://www.linkedin.com/in/isabela-viana-11b27638a/",
      github: "https://github.com/yisasz/"
     },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center bg-no-repeat font-sans text-white relative"
      style={{ backgroundImage: `url(${imgFundoLabs})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-8 max-w-7xl mx-auto p-6 md:p-10">
        <header className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tighter">
            Grupo 1 - <span className="text-blue-400">Labs Alpha</span>
          </h1>
          <p className="mt-4 text-xl text-gray-200">
            Inovação e Performance: Conheça os talentos por trás do Labs Alpha.
          </p>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-7xl mx-auto">
          {equipe.map((membro) => (
            <div
              key={membro.id}
              className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:bg-white/10 hover:border-blue-500/50"
            >
              <div className="relative mb-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-cyan-100 rounded-full blur opacity-30"></div>
                <img
                  src={membro.foto}
                  alt={membro.nome}
                  onContextMenu={(e) => e.preventDefault()}
                  onError={(e) => { e.target.src = imgFundoLabs; }}
                  className="relative w-33 h-33 rounded-full object-cover border-2 border-white/20 shadow-inner"
                />
              </div>

              <h2 className="text-3xl font-bold mb-2 tracking-tight">
                {membro.nome}
              </h2>
              <p className="text-xs text-gray-200 mb-8 flex-grow leading-relaxed">
                {membro.descricao}
              </p>
              <div className="flex justify-center gap-4 w-full mt-auto">
                <a
                  href={membro.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#0077b5] transition-all duration-300 border border-white/10 shadow-md group"
                  title="LinkedIn"
                >
                  <img
                    src={Linkedin}
                    alt="LinkedIn"
                    onContextMenu={(e) => e.preventDefault()}
                    className="h-6 w-6 object-contain opacity-70 group-hover:opacity-100"
                  />
                </a>
                <a
                  href={membro.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#24292e] transition-all duration-300 border border-white/10 shadow-md group"
                  title="GitHub"
                >
                  <img
                    src={github}
                    alt="GitHub"
                    onContextMenu={(e) => e.preventDefault()}
                    className="h-6 w-6 object-contain opacity-70 group-hover:opacity-100"
                  />
                </a>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
