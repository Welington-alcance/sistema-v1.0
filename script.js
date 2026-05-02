// =======================
// CONFIG
// =======================
const TEMPO_MINIMO = 7000; // 7 segundos
const TEMPO_COOLDOWN = 60 * 60 * 1000; // 1 hora

// =======================
// CÓDIGOS
// =======================
const codigos = [
  "A1B2C3","D4E5F6","G7H8I9","J1K2L3","M4N5O6",
  "P7Q8R9","S1T2U3","V4W5X6","Y7Z8A9","B1C2D3"
];

// =======================
// KEYWORDS
// =======================
const keywords = [
"consultoria em compliance empresarial",
"consultoria em gestão de crises empresariais",
"consultoria em turnaround empresarial",
"consultoria em fusões e aquisições empresariais",
"consultoria em planejamento financeiro empresarial",
"consultoria em reestruturação organizacional",
"consultoria estratégica para fusões e aquisições",
"consultoria em gestão de riscos empresariais",
"consultoria em reestruturação societária complexa",
"consultoria em estruturação empresarial",
"consultoria em gestão de processos empresariais",
"empresa de marketing digital para empresas",
"empresa de marketing digital b2b",
"advogado especialista em execução fiscal empresarial",
"consultoria em gestão patrimonial empresarial",
"consultoria em estruturação societária",
"assessoria em marketing digital empresarial",
"consultoria em vendas b2b",
"consultoria em planejamento estratégico empresarial",
"consultoria em processos empresariais",
"consultoria em controladoria empresarial",
"consultoria em finanças corporativas",
"consultoria em governança corporativa",
"consultoria em riscos empresariais",
"consultoria em valuation de empresas",
"adequação fiscal para empresas",
"consultoria em gestão estratégica de negócios",
"consultoria em tecnologia da informação empresas",
"consultoria em governança e compliance",
"consultoria em cyber segurança empresarial",
"serviços de adequação à lgpd",
"consultoria em privacidade de dados",
"consultoria em due diligence empresarial",
"consultoria em infraestrutura de ti",
"terceirização de ti para empresas",
"consultoria em transformação digital corporativa",
"consultoria em sucessão empresarial",
"consultoria estratégica para empresas",
"consultoria para crescimento empresarial",
"consultoria para expansão de empresas",
"consultoria em modelagem de negócios",
"consultoria em gestão de performance empresarial",
"consultoria em indicadores de desempenho empresarial",
"consultoria em melhoria de processos empresariais",
"consultoria em eficiência operacional",
"advogado especialista em direito societário empresarial",
"social media para empresas preço",
"marketing digital para pequenas empresas",
"consultoria em transformação digital para empresas",
"consultoria em transformação digital para indústrias",
"consultoria em reorganização societária",
"consultoria para redes sociais para empresas",
"consultoria em otimização de processos empresariais",
"consultoria em análise financeira empresarial",
"advogado especialista em causas trabalhistas empresariais",
"perfume importado",
"planejamento tributário para holdings familiares",
"advisory em fusões e aquisições",
"mba em gestão",
"advogado especialista em direito previdenciário inss",
"consultoria em marketing digital para empresas",
"clínica de recuperação de dependentes químicos",
"consultoria em gestão empresarial",
"escritório de advocacia tributária sp",
"consultoria em vendas para empresas",
"consultoria em gestão de custos industriais",
"empresa especializada em compliance fiscal",
"consultoria em gestão de riscos corporativos",
"consultoria em proteção de dados empresariais",
"consultoria em transformação organizacional",
"serviços de cibersegurança para empresas",
"internação psiquiátrica particular em sp",
"clínica de recuperação",
"consultoria empresarial para pequenas empresas",
"advogado tributarista empresarial",
"gestão empresarial consultoria",
"plataformas de segurança digital para corporações",
"consultoria em governança corporativa para grandes empresas",
"consultoria em redução de custos empresariais",
"consultoria em reestruturação financeira empresarial",
"ar condicionado promoção hoje",
"advogado consumidor online",
"consultoria em controladoria e finanças",
"consultoria em valuation empresarial profissional",
"estruturação de operações societárias empresariais",
"consultoria empresarial especializada em fusões e aquisições",
"assessoria jurídica para reestruturação empresarial",
"consultoria em valuation para venda de empresa",
"consultoria em sustentabilidade corporativa",
"curso online de liderança empresarial",
"consultoria em gestão estratégica corporativa",
"advogado trabalhista especializado",
"advogado para recuperação judicial empresarial",
"advogado previdenciário inss",
"estruturação financeira para empresas",
"consultoria empresarial",
"publicidade no google",
"aluguel de carro",
"curso de investimento em ações",
"consultoria jurídica empresarial preventiva",
"auditoria de conformidade empresarial",
"consultoria em análise de dados empresariais",
"advogado especialista em direito tributário empresarial",
"agência de tráfego pago para e-commerce",
"consultoria em inteligência de negócios empresarial",
"consultoria de marketing b2b",
"treinamento de equipes de vendas",
"financiamento empresarial com garantia de imóvel",
"consultoria estratégica empresarial",
"consultoria em captação de recursos empresariais",
"consultoria em gestão de processos",
"consultoria empresarial para redução de custos",
"consultoria de reestruturação empresarial",
"consultoria em inovação empresarial",
"certificação gestão projetos profissionais",
"consultoria em reestruturação financeira para empresas",
"consultoria em gestão tributária empresarial",
"consultoria em marketing de influência",
"consultoria em transformação digital para indústrias",
"consultoria para abertura de empresa",
"consultoria em segurança da informação para e-commerce",
"consultoria em seo",
"segurança cibernética para empresas",
"sistema de segurança de dados empresariais",
"advogado para recuperação judicial empresa",
"linha de crédito empresarial juros baixos",
"consultoria em compliance regulatório empresarial",
"gestão estratégica empresarial serviços",
"consultoria em proteção de dados lgpd",
"psicólogo online preço",
"auditoria empresarial para redução de custos",
"consultoria em performance empresarial",
"escritório de advocacia empresarial sp",
"consultoria em segurança da informação",
"assessoria jurídica para startups",
"curso de bolsa de valores online",
"consultoria em gestão de riscos",
"consultoria de marketing digital profissional",
"consultoria de tráfego pago para empresas",
"consultoria em planejamento sucessório empresarial",
"backup corporativo em nuvem com compliance lgpd",
"soluções de segurança digital para grandes empresas",
"segurança da informação para pequenas empresas",
"consultoria em estratégia de crescimento empresarial",
"curso de marketing para redes sociais",
"curso certificação em gestão de projetos",
"consultoria em posicionamento digital",
"consultoria ambiental",
"notebook bom e barato promoção",
"advogado especialista em planejamento tributário empresarial"
];

// =======================
// GERAR PÁGINAS 1 A 100
// =======================
let paginas = Array.from({ length: 100 }, (_, i) => i + 1);

// embaralha páginas
paginas = embaralharArray(paginas);

// =======================
// GERAR LINKS SEM REPETIÇÃO
// =======================
const links = [];

for (let i = 0; i < 100; i++) {
  const pagina = paginas[i];
  const keyword = keywords[i % keywords.length];

  const link = `https://pwd.entrafacil.com.br/pwd-${pagina}/#gsc.tab=0&gsc.q=${encodeURIComponent(keyword)}&gsc.ref=more%3Aad`;

  links.push(link);
}
// =======================
// ESTADO
// =======================
let cliques = localStorage.getItem("cliques") ? parseInt(localStorage.getItem("cliques")) : 0;
let clicados = localStorage.getItem("clicados") ? JSON.parse(localStorage.getItem("clicados")) : {};
let acabouDeClicar = false;
let finalizado = false;

// =======================
// EMBARALHAR LINKS
// =======================
function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// =======================
// GERAR LINKS ALEATÓRIOS
// =======================
let linksSelecionados = [];

function gerarLinksAleatorios() {
  let copia = [...links];
  let embaralhado = embaralharArray(copia);

  linksSelecionados = embaralhado.slice(0, 10);

  localStorage.setItem("linksSelecionados", JSON.stringify(linksSelecionados));
}

// =======================
// RECUPERAR LINKS SALVOS
// =======================
let salvo = localStorage.getItem("linksSelecionados");

if (salvo) {
  linksSelecionados = JSON.parse(salvo);
} else {
  gerarLinksAleatorios();
}

// =======================
// GERAR CÓDIGO
// =======================
function pegarCodigo() {
  let index = localStorage.getItem("codigoIndex")
    ? parseInt(localStorage.getItem("codigoIndex"))
    : 0;

  let codigo = codigos[index];
  index = (index + 1) % codigos.length;

  localStorage.setItem("codigoIndex", index);
  return codigo;
}

// =======================
// COPIAR CÓDIGO
// =======================
function copiarCodigo(btn) {
  let codigo = document.getElementById("codigoBox").innerText;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(codigo).then(() => sucesso(btn));
  } else {
    let textarea = document.createElement("textarea");
    textarea.value = codigo;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    sucesso(btn);
  }
}

function sucesso(btn) {
  btn.innerHTML = "✔ Código copiado";
  btn.style.background = "#2ecc71";
  btn.disabled = true;

  if (navigator.vibrate) navigator.vibrate(100);
}

// =======================
// CLICK
// =======================
function clicar(id) {
  if (clicados[id]) return;

  acabouDeClicar = true;

  localStorage.setItem("siteAtual", id);
  localStorage.setItem("tempoClique", Date.now());

  window.location.href = linksSelecionados[id - 1];
}

// =======================
// PROCESSAR RETORNO
// =======================
function processarRetorno() {
  let siteAtual = localStorage.getItem("siteAtual");
  let tempoClique = localStorage.getItem("tempoClique");

  if (siteAtual && tempoClique) {
    let id = parseInt(siteAtual);
    let tempo = Date.now() - parseInt(tempoClique);

    if (tempo >= TEMPO_MINIMO) {
      if (!clicados[id]) {
        clicados[id] = true;
        cliques++;

        localStorage.setItem("cliques", cliques);
        localStorage.setItem("clicados", JSON.stringify(clicados));
      }

      localStorage.removeItem("siteAtual");
      localStorage.removeItem("tempoClique");

      atualizarInterface();
      atualizarTela();

    } else {
      mostrarAviso();

      localStorage.removeItem("siteAtual");
      localStorage.removeItem("tempoClique");
    }
  }

  acabouDeClicar = false;
}

// =======================
// EVENTOS DE RETORNO
// =======================
window.addEventListener("pageshow", () => {
  setTimeout(() => {
    acabouDeClicar = false;
    processarRetorno();
  }, 500);
});

window.addEventListener("focus", () => {
  setTimeout(() => {
    acabouDeClicar = false;
    processarRetorno();
  }, 500);
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    setTimeout(() => {
      processarRetorno();
    }, 500);
  }
});

// =======================
// GERAR CARDS DOS SITES
// =======================
const ofertasDiv = document.getElementById("ofertas");

for (let i = 1; i <= 10; i++) {
  const oferta = document.createElement("div");
  oferta.className = "oferta";

  oferta.innerHTML = `
    <span class="check">✔</span>
    <h4>Site ${i}</h4>
    <p>Clique no botão abaixo: Site ${i}</p>
    <button class="btn" onclick="clicar(${i})">
      Clique Aqui
    </button>
  `;

  ofertasDiv.appendChild(oferta);
}

// =======================
// ATUALIZAR INTERFACE
// =======================
function atualizarInterface() {
  const ofertas = document.querySelectorAll(".oferta");

  ofertas.forEach((oferta, index) => {
    let id = index + 1;
    let btn = oferta.querySelector(".btn");

    if (clicados[id]) {
      oferta.classList.add("clicado");
      btn.classList.add("clicado");
      btn.innerText = "Clicado";
      btn.disabled = true;
    }
  });
}

// =======================
// PROGRESSO
// =======================
function atualizarTela() {
  const contador = document.getElementById("contador");
  const barra = document.getElementById("barra");
  const textoEl = document.getElementById("textoProgresso");

  contador.innerText = cliques + "/10";
  barra.style.width = (cliques * 10) + "%";

  if (cliques === 0) {
    textoEl.innerText = "🚀 Vamos começar! Complete os 10 sites.";
  } else if (cliques === 1) {
    textoEl.innerText = "🔥 Boa! Você já começou!";
  } else if (cliques <= 3) {
    textoEl.innerText = "💪 Continue! Você está indo bem!";
  } else if (cliques === 5) {
    textoEl.innerText = "⚡ Metade do caminho!";
  } else if (cliques <= 8) {
    textoEl.innerText = "🔥 Você está quase lá!";
  } else if (cliques === 9) {
    textoEl.innerText = "🎯 Falta só 1! NÃO PARE!";
  }

  if (cliques === 10 && !finalizado) {
    finalizado = true;

    barra.style.background = "#2ecc71";
    barra.style.boxShadow = "0 0 15px #2ecc71";
    textoEl.innerText = "🎉 Missão completa! Copie seu código.";

    let codigo = pegarCodigo();

    document.getElementById("codigoBox").innerText = codigo;
    document.getElementById("popupFinal").style.display = "flex";
    document.body.style.overflow = "hidden";

    localStorage.removeItem("cliques");
    localStorage.removeItem("clicados");
    localStorage.setItem("cooldownFim", Date.now() + TEMPO_COOLDOWN);

    localStorage.removeItem("linksSelecionados");
  }
}

// =======================
// AVISO TEMPO
// =======================
function mostrarAviso() {
  if (document.getElementById("avisoTempo")) return;

  let overlay = document.createElement("div");
  overlay.id = "avisoTempo";

  overlay.innerHTML = `
    <div style="
      background:#fff;
      padding:25px;
      border-radius:12px;
      text-align:center;
      width:85%;
      max-width:320px;
    ">
      <div style="font-size:40px;">⚠️</div>
      <h3 style="margin:10px 0;">Atenção</h3>
      <p style="font-size:15px;margin-bottom:15px;">
        Você não acessou o site patrocinado.<br>
        Clique no botão abaixo e <b>acesse o site patrocinado.</b>
      </p>
      <button onclick="fecharAviso()" style="
        width:100%;
        padding:12px;
        border:none;
        border-radius:8px;
        background:#ff4d4d;
        color:#fff;
        font-size:15px;
      ">
        Entendi
      </button>
    </div>
  `;

  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.7)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "99999";

  document.body.appendChild(overlay);
}

function fecharAviso() {
  let aviso = document.getElementById("avisoTempo");
  if (aviso) aviso.remove();
}

// =======================
// COOLDOWN
// =======================
function verificarCooldown() {
  let fim = localStorage.getItem("cooldownFim");

  if (!fim) return;

  let restante = parseInt(fim) - Date.now();

  if (restante > 0) {
    mostrarBloqueio(restante);
  } else {
    localStorage.removeItem("cooldownFim");
  }
}

function mostrarBloqueio(tempoRestante) {
  if (document.getElementById("bloqueioTempo")) return;

  let overlay = document.createElement("div");
  overlay.id = "bloqueioTempo";

  overlay.innerHTML = `
    <div style="
      background:#fff;
      padding:25px;
      border-radius:12px;
      text-align:center;
      width:85%;
      max-width:320px;
    ">
      <h3>⏳ Aguarde</h3>
      <p>Acesso aos sites bloqueados.</p>
      <p>Volte em:</p>
      <h2 id="contadorTempo">00:00</h2>
    </div>
  `;

  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.8)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "99999";

  document.body.appendChild(overlay);

  iniciarContador(tempoRestante);
}

function iniciarContador(ms) {
  const el = document.getElementById("contadorTempo");

  let intervalo = setInterval(() => {
    ms -= 1000;

    if (ms <= 0) {
      clearInterval(intervalo);

      let bloqueio = document.getElementById("bloqueioTempo");
      if (bloqueio) bloqueio.remove();

      localStorage.removeItem("cooldownFim");
      return;
    }

    let horas = Math.floor(ms / 3600000);
    let minutos = Math.floor((ms % 3600000) / 60000);
    let segundos = Math.floor((ms % 60000) / 1000);

    if (horas > 0) {
      el.innerText = `${horas}h ${minutos}m ${segundos}s`;
    } else {
      el.innerText = `${minutos}m ${segundos}s`;
    }
  }, 1000);
}

// =======================
// INIT
// =======================
atualizarInterface();
atualizarTela();
verificarCooldown();

// =======================
// BARRA FIXA NO SCROLL
// =======================
const progressBox = document.getElementById("progressBox");
const offsetTop = progressBox.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY > offsetTop) {
    progressBox.classList.add("progress-fixed");
    document.body.style.paddingTop = progressBox.offsetHeight + "px";
  } else {
    progressBox.classList.remove("progress-fixed");
    document.body.style.paddingTop = "0px";
  }
});