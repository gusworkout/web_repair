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

sendBtn.addEventListener('click', () => {
    const mail = mailInput.value;
    const name = nameInput.value;
    const message = messageInput.value;
    if(mail && name && message){
       openModal("Cita agendada correctamente");
        mailInput.value = '';
        nameInput.value = '';
        messageInput.value = '';
    } else {
        openModal("Por favor completa todos los campos", "error");
    }
});

resetBtn.addEventListener('click', () => {
    mailInput.value = '';
    nameInput.value = '';
    messageInput.value = '';
});