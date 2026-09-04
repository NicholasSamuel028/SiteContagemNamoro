const inicioNamoro = new Date("2025-06-18T00:00:00");
const dataConhecimento = new Date("2025-04-20T00:00:00");
const natal = new Date("2025-12-25T00:00:00");

function formatarTempo(dataInicial, agora) {
  let diff = agora - dataInicial;

  const segundos = Math.floor(diff / 1000) % 60;
  const minutos = Math.floor(diff / (1000 * 60)) % 60;
  const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const anos = Math.floor(dias / 365);
  const meses = Math.floor((dias % 365) / 30);
  const diasRestantes = dias - (anos * 365 + meses * 30);

  return `${anos} anos, ${meses} meses, ${diasRestantes} dias, ${horas}h ${minutos}min ${segundos}s`;
}

function calcularContagemRegressiva(dataFutura, agora) {
  const diff = dataFutura - agora;

  if (diff <= 0) return "🎉 Já passou! Que lembrança linda!";

  const segundos = Math.floor(diff / 1000) % 60;
  const minutos = Math.floor(diff / (1000 * 60)) % 60;
  const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  return `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
}

function atualizarTemporizadores() {
  const agora = new Date();
  document.getElementById("tempoNamoro").textContent = formatarTempo(inicioNamoro, agora);
  document.getElementById("tempoConhecimento").textContent = formatarTempo(dataConhecimento, agora);
  document.getElementById("contagemNatal").textContent = calcularContagemRegressiva(natal, agora);
}

setInterval(atualizarTemporizadores, 1000);
atualizarTemporizadores();

function trocarTema() {
  const atual = document.documentElement.getAttribute("data-theme");
  if (atual === "dark") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}
