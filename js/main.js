// menu.js
const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const closeBar = document.querySelector('.close-btn');
const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeModal');
  const message = document.getElementById('modal-message');

const mailInput = document.getElementById('mail');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const sendBtn = document.getElementById('sendbtn');
const resetBtn = document.getElementById('reset-btn');


btn.addEventListener('click', () => {
  menu.classList.toggle('active');
});


closeBar.addEventListener('click', () => {
  menu.classList.remove('active');
});

  function openModal(text) {
    message.textContent = text;
    modal.classList.add('active');
  }

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });


function openModal(text, type = "success") {
  modal.querySelector('.modal').style.borderTop =
    type === "error" ? "5px solid red" : "5px solid green";
  message.textContent = text;
  modal.classList.add('active');
}

 emailjs.init("hKvsoyYx4TFw_MRmU");

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_0tf56yt",
          "template_s3wwcqe",
          this
        )
        .then(() => {
          openModal("Solicitud enviada correctamente");
          this.reset();
        })
        .catch(() => {
          openModal("Error al enviar la solicitud");
        });
    });


resetBtn.addEventListener('click', () => {
    mailInput.value = '';
    nameInput.value = '';
    messageInput.value = '';
});




 