/* Fonte única de conteúdo do site. Para atualizar textos e contatos, edite só este bloco.
   Valores iniciados por "[" ainda precisam ser preenchidos e ficam ocultos no site. */
const CONTATOS = {
  whatsapp: "[SEU WHATSAPP]", // só dígitos com DDI e DDD
  telefone: "[SEU TELEFONE]",
  email: "heloisarafael@hotmail.com",
  linkedin: "https://www.linkedin.com/in/heloisa-teles-rafael-5a948b1b6",
  agenda: "[LINK DA AGENDA]",
};

const DADOS = {
  historia: [
    "Sou psicóloga e headhunter. Comecei no RH generalista, conduzindo recrutamento e seleção da divulgação à integração, avaliação de experiência, desligamentos, indicadores e endomarketing.",
    "Hoje atuo com headhunting, do alinhamento de perfil com o cliente até a entrega da shortlist — e sigo em direção à gestão de projetos (PMO), construindo processos que tornam o recrutamento mais eficiente.",
  ],
  caminho: ["Psicologia", "RH generalista", "Headhunting", "Processos / PMO"],
  valores: [
    ["Escuta", "Entender a empresa e a pessoa antes de buscar."],
    ["Ética", "Sigilo sobre clientes e candidatos."],
    ["Olhar comportamental", "Fit cultural, valores e competências."],
    ["Eficiência", "Processos claros e uso de IA."],
  ],
  experiencias: [
    ["abr/2025 – atual · meio período", "Headhunter / Analista de Recrutamento e Seleção", "PLUGARH · Brasil",
      "Ciclo completo de R&S: alinhamento de perfil com o cliente externo até a entrega da shortlist; identificação de oportunidades e análise da concorrência; monitoramento de práticas e mudanças de mercado; avaliação por fit cultural, valores e competências técnicas e comportamentais."],
    ["fev/2024 – abr/2025 · presencial", "Analista de RH", "Protendit Construção de Estacas e Pré-Fabricados · São José do Rio Preto/SP",
      "RH generalista: R&S da divulgação à integração; avaliação de experiência; desligamentos; indicadores de RH; endomarketing (campanhas internas, datas sazonais, clima); gestão de conflitos e apoio às lideranças; sistema Sênior."],
    ["mar/2023 – fev/2024", "Assistente de RH", "Protendit · Potirendaba/SP", "Início da trajetória em Recursos Humanos."],
  ],
  formacao: [
    ["Graduação em Psicologia", "Unilago"],
    ["Avaliação Psicológica", "IPECS · Instituto de Psicologia, Educação, Comportamento e Saúde"],
  ],
  servicos: [
    ["Headhunting e busca ativa de profissionais", "Ciclo completo de R&S: alinhamento de perfil, busca ativa em redes, triagem e entrevistas, avaliação e entrega da shortlist com acompanhamento.", "#FBEFD6"],
    ["Mapeamento de mercado e análise da concorrência", "Identificação de oportunidades, análise da concorrência e monitoramento de mudanças de mercado para orientar a busca.", "#DCEBE7"],
    ["Avaliação comportamental e fit cultural", "Avaliação por fit cultural, valores e competências técnicas e comportamentais, com base na formação em Psicologia.", "#F3E1DA"],
    ["Consultoria em processos de R&S e RH generalista", "Onboarding, avaliação de experiência, indicadores de RH e endomarketing.", "#E4E6F2"],
  ],
  etapas: ["Alinhamento de perfil", "Busca ativa", "Triagem e entrevistas", "Avaliação", "Shortlist", "Acompanhamento"],
  destaque: 4,
  competencias: [
    ["Técnicas", "t-tec", ["Recrutamento e Seleção", "Headhunting", "Mapeamento de mercado", "Indicadores de RH", "Sistema Sênior", "Onboarding", "Desligamento"]],
    ["Comportamentais", "t-com", ["Gestão de conflitos", "Apoio à liderança", "Comunicação", "Análise comportamental"]],
    ["Em desenvolvimento", "t-dev", ["Gestão de projetos / PMO", "Automação e IA aplicadas ao RH"]],
  ],
};

const $ = (id) => document.getElementById(id);
const ok = (v) => v && !v.trim().startsWith("[");
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

$("historia").innerHTML = DADOS.historia.map((p) => `<p style="margin-bottom:14px">${esc(p)}</p>`).join("");
$("caminho").innerHTML = DADOS.caminho.map((c) => `<b>${esc(c)}</b>`).join('<span class="s">→</span>');
$("valores").innerHTML = DADOS.valores.map(([t, x]) => `<div class="card"><h3>${esc(t)}</h3><p>${esc(x)}</p></div>`).join("");
$("linha").innerHTML = DADOS.experiencias.map(([p, c, e, d]) =>
  `<div class="item"><div class="per">${esc(p)}</div><h3>${esc(c)}</h3><div class="emp">${esc(e)}</div><p>${esc(d)}</p></div>`).join("");
$("formacao").innerHTML = DADOS.formacao.map(([t, d]) => `<div class="card"><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join("");
$("servs").innerHTML = DADOS.servicos.map(([t, d, cor], i) =>
  `<div class="card serv" style="background:${cor}"><div class="num" style="background:#fff">${i + 1}</div><h3>${esc(t)}</h3><p style="color:#2C3A37">${esc(d)}</p></div>`).join("");
$("etapas").innerHTML = DADOS.etapas.map((e, i) => `<li${i === DADOS.destaque ? ' class="dest"' : ""}>${esc(e)}</li>`).join("");
$("comps").innerHTML = DADOS.competencias.map(([t, cl, it]) =>
  `<h3 class="gt">${esc(t)}</h3><div class="chips">${it.map((i) => `<span class="chip ${cl}">${esc(i)}</span>`).join("")}</div>`).join("");

// Atalhos de contato (só aparecem os preenchidos)
const atalhos = [];
if (ok(CONTATOS.whatsapp)) {
  const w = `https://wa.me/${CONTATOS.whatsapp.replace(/\D/g, "")}`;
  atalhos.push(`<a href="${w}" target="_blank" rel="noopener">WhatsApp<small>Conversa direta</small></a>`);
  $("zap").href = w; $("zap").target = "_blank"; $("zap").rel = "noopener"; $("zap").hidden = false;
}
if (ok(CONTATOS.telefone)) atalhos.push(`<a href="tel:+55${CONTATOS.telefone.replace(/\D/g, "")}">Telefone<small>${esc(CONTATOS.telefone)}</small></a>`);
if (ok(CONTATOS.email)) atalhos.push(`<a href="mailto:${CONTATOS.email}">E-mail<small>${esc(CONTATOS.email)}</small></a>`);
atalhos.push(`<a href="${CONTATOS.linkedin}" target="_blank" rel="noopener">LinkedIn<small>Perfil profissional</small></a>`);
if (ok(CONTATOS.agenda)) atalhos.push(`<a href="${CONTATOS.agenda}" target="_blank" rel="noopener">Agendar conversa<small>Para empresas</small></a>`);
$("atalhos").innerHTML = atalhos.join("");
$("rodape").innerHTML = `<a href="${CONTATOS.linkedin}" target="_blank" rel="noopener">LinkedIn</a>` +
  (ok(CONTATOS.email) ? ` · <a href="mailto:${CONTATOS.email}">${esc(CONTATOS.email)}</a>` : "");
$("ano").textContent = new Date().getFullYear();

// Menu mobile
const menu = $("menu"), btn = $("menuBtn");
btn.addEventListener("click", () => { const a = menu.classList.toggle("aberto"); btn.setAttribute("aria-expanded", a); });
menu.addEventListener("click", (e) => { if (e.target.tagName === "A") { menu.classList.remove("aberto"); btn.setAttribute("aria-expanded", false); } });

// Botão "Solicitar conversa" pré-seleciona "Empresa"
document.querySelectorAll("[data-quero]").forEach((a) => a.addEventListener("click", () => { $("tipo").value = a.dataset.quero; $("tipo").dispatchEvent(new Event("change")); }));
$("tipo").addEventListener("change", () => { $("rowEmp").hidden = $("tipo").value !== "Empresa"; });

// Formulário: valida e abre o app de e-mail com a mensagem pronta (sem servidor)
$("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if ($("site").value) return; // honeypot anti-spam
  let valido = true;
  ["nome", "email", "tipo", "msg"].forEach((id) => {
    const el = $(id), v = el.value.trim();
    const bad = !v || (id === "email" && !/^\S+@\S+\.\S+$/.test(v));
    el.parentElement.querySelector(".erro").textContent = bad ? "Campo obrigatório ou inválido." : "";
    if (bad) valido = false;
  });
  $("erroLgpd").textContent = $("lgpd").checked ? "" : "É necessário concordar para enviar.";
  if (!$("lgpd").checked) valido = false;
  if (!valido) return;
  if (!ok(CONTATOS.email)) { alert("O e-mail de destino ainda não foi configurado."); return; }
  const corpo = [`Nome: ${$("nome").value}`, `E-mail: ${$("email").value}`, `Telefone: ${$("tel").value}`, `Eu sou: ${$("tipo").value}`,
    $("tipo").value === "Empresa" ? `Empresa: ${$("empresa").value}` : "", "", $("msg").value].filter((l, i) => l || i > 4).join("\n");
  location.href = `mailto:${CONTATOS.email}?subject=${encodeURIComponent($("assunto").value || "Contato pelo site")}&body=${encodeURIComponent(corpo)}`;
  $("ok").style.display = "block";
});
