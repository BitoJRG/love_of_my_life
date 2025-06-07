function checkAnswer() {
  const r = document.getElementById("respuesta").value.trim().toLowerCase();
  const correctAnswer = "pobre";

  if (r === correctAnswer) {
    document.getElementById("blur").style.backdropFilter = "none";
    document.getElementById("blur").style.webkitBackdropFilter = "none";
    document.querySelector(".container").style.display = "none";
    document.querySelector("body").style.backgroundImage = "url('Imagenes/FondoNoDibujos.png')";
    dibujos();
  } else {
    alert("Trata de nuevo mi niña");
  }
}

function dibujos() {
  const positions = [
    { x: 28, y: 363, src: 'Imagenes/mantarraya.png', name: 'Mantarraya' },
    { x: 343, y: 46, src: 'Imagenes/tiburon_ballena.png', name: 'Tiburón ballena' },
    { x: 888, y: 536, src: 'Imagenes/medusa.png', name: 'Medusa' },
    { x: 1415, y: 102, src: 'Imagenes/tiburon_martillo.png', name: 'Tiburón martillo' },
    { x: 1180, y: 383, src: 'Imagenes/pez_payaso.png', name: 'Pez payaso' }
  ];

  // Each animal has only one image to display in modal (you'll replace these paths)
  const info = {
    'Mantarraya': 'Imagenes/1.png',
    'Tiburón ballena': 'Imagenes/2.png',
    'Medusa': 'Imagenes/3.png',
    'Tiburón martillo': 'Imagenes/5.png',
    'Pez payaso': 'Imagenes/4.png'
  };

  positions.forEach(pos => {
    const img = document.createElement('img');
    img.src = pos.src;
    img.alt = pos.name;
    img.title = pos.name;
    img.classList.add('animal', 'visible');
    img.style.left = pos.x + 'px';
    img.style.top = pos.y + 'px';

    img.onclick = () => {
      const imageUrl = info[pos.name];
      document.getElementById("modalBody").innerHTML = `
        <img src="${imageUrl}" alt="${pos.name}" style="width: 669px; height: 803px;" />
      `;
      document.getElementById("animalModal").style.display = "flex";
    };

    document.body.appendChild(img);
  });

  // Hide modal initially
  document.getElementById("animalModal").style.display = "none";
}

// Modal close logic
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".close-btn").onclick = function () {
    document.getElementById("animalModal").style.display = "none";
  };

  window.onclick = function (event) {
    const modal = document.getElementById("animalModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
