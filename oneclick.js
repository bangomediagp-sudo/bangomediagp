//pra evitar abri whatsaap duas vezes
let bloqueado = false;

function bloquearClique() {
  if (bloqueado) return true;
  bloqueado = true;
  setTimeout(() => bloqueado = false, 1000);
  return false;
}

//botoes para scroll da pagina
document.addEventListener("DOMContentLoaded", () => {

  // SCROLL BOTÕES
  const scrollMap = {
    "btn-sobrenos": "sobre-nos",
    "btn-packs": "pacote",
    "btn-contacus": "contactar"
  };

  Object.keys(scrollMap).forEach(btnId => {
    const btn = document.getElementById(btnId);
    const target = document.getElementById(scrollMap[btnId]);

    if (btn && target) {
      btn.addEventListener("click", () => {
        target.scrollIntoView({ behavior: "smooth" });
      });
    }
  });

  // BOTÕES WHATSAPP
  const numeroWhatsApp = "258834381650";
  const mensagemPadrao =
    "Olá! 👋 Encontrei a BMGP através do vosso site e gostaria de falar com um consultor.";
  
  //bloqueiar abrir whatsaap duas vezes
  function abrirWhatsApp(mensagem) {
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.location.href = url;
}

  ["consultor-btn", "btn-2"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemPadrao)}`;
        window.location.href = url;
      });
    }
  });

  // CONTROLO DOS PACOTES
  const pacotes = document.querySelectorAll(".pacotes");

  pacotes.forEach(pacote => {
    pacote.addEventListener("click", () => {
      pacotes.forEach(p => p.classList.remove("active"));
      pacote.classList.add("active");
    });
  });

});


//falando doa pacotes,levando o usyario para o whatsapp com uma mensagem personalizada
const numeroWhatsApp = "258834381650";

const mensagens = {
  start: "Olá! 👋 Vim do site da BMGP e gostaria de saber mais sobre o Plano Básico.",
  pro: "Olá! 👋 Encontrei a BMGP pelo site e gostaria de mais detalhes sobre o Plano Pro.",
  elite: "Olá! 👋 Tenho interesse no Plano Elite e gostaria de falar com um consultor."
};

document.querySelectorAll(".saberMais").forEach(botao => {
  botao.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();

    const pacote = botao.closest(".pacotes");
    if (!pacote) {
      console.warn("Botão sem pacote pai");
      return;
    }

    const plano = pacote.dataset.plano;
    if (!mensagens[plano]) {
      console.warn("Plano sem mensagem:", plano);
      return;
    }

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagens[plano])}`;
    window.location.href = url;
  });
});
