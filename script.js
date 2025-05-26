function atualizarContador() {
  const inicio = new Date("2024-01-04T21:00:00");
  const agora = new Date();
  const diff = agora - inicio;

  const segundos = Math.floor(diff / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const meses = Math.floor(dias / 30.44);
  const anos = Math.floor(meses / 12);

  const diasRestantes = Math.floor(dias % 30.44);
  const mesesRestantes = meses % 12;
  const horasRestantes = horas % 24;
  const minutosRestantes = minutos % 60;
  const segundosRestantes = segundos % 60;

  document.getElementById("contador").textContent =
    `${anos} anos, ${mesesRestantes} meses, ${diasRestantes} dias, ` +
    `${horasRestantes} horas, ${minutosRestantes} minutos e ${segundosRestantes} segundos`;
}

atualizarContador();
setInterval(atualizarContador, 1000);
