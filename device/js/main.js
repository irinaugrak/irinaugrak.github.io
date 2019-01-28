'use strict';

let contactsBtn = document.querySelector('.contacts-btn');
let modalWrite  = document.querySelector('.modal-write');
let modalWriteCloseBtn = document.querySelector('.modal-write .modal-close');
let modalWriteFio = document.querySelector('.modal-write .modal-write-fio');
let modalWriteEmail = document.querySelector('.modal-write .modal-write-email');
let modalWriteText = document.querySelector('.modal-write .modal-write-text');
let modalWriteForm = document.querySelector('.modal-write-form');
let openMap = document.querySelector('.contacts__map');
let modalMap = document.querySelector('.modal-map');
let modalMapClose = document.querySelector('.modal-map .modal-close');

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

try{
  storageName = localStorage.getItem('fio');
  storageEmail = localStorage.getItem('email');
}catch(err) {
  isStorageSupport = false;
}

// Обработчик клика на кнопку "Напишите нам"
contactsBtn.addEventListener('click', function(e) {
  e.preventDefault();
  modalWrite.classList.add('show');

  if(storageName) {
    modalWriteFio.value = storageName;
  }
  if(storageEmail) {
    modalWriteEmail.value = storageEmail;
  }

  if(!storageName) {
    modalWriteFio.focus();
  }else if(!storageEmail) {
    modalWriteEmail.focus();
  }else {
    modalWriteText.focus();
  }
})

// Кнопка "Закрыть" в форме "Напишите нам"
modalWriteCloseBtn.addEventListener('click', function (e) {
  modalWrite.classList.remove('show');
  modalWrite.classList.remove('form-error');
})

// Нажатие на клавишу ESC
window.addEventListener('keydown', function(e) {
  if(modalWrite.classList.contains('show')) {
    if(e.keyCode === 27) {
      e.preventDefault();
      modalWrite.classList.remove('show');
      modalWrite.classList.remove('form-error');
    }
  }
  if(modalMap.classList.contains('show')) {
    if(e.keyCode === 27) {
      e.preventDefault();
      modalMap.classList.remove('show');
    }
  }
})

// Отправка формы "Напишите нам"
modalWriteForm.addEventListener('submit', function (e) {
  if(modalWriteFio.value && modalWriteEmail.value) {
    if(isStorageSupport) {
      localStorage.setItem('fio', modalWriteFio.value);
      localStorage.setItem('email', modalWriteEmail.value);
      modalWriteFio.classList.remove('modal-error');
      modalWriteEmail.classList.remove('modal-error');
    }
    modalWrite.classList.remove('form-error');
  } else {
    modalWrite.classList.remove('form-error');
    void modalWrite.offsetWidth;
    modalWrite.classList.add('form-error');

    e.preventDefault();

    if(!modalWriteFio.value) {
      modalWriteFio.classList.add('modal-error');
    } else {
      modalWriteFio.classList.remove('modal-error');
    }
    if(!modalWriteEmail.value) {
      modalWriteEmail.classList.add('modal-error');
    } else {
      modalWriteEmail.classList.remove('modal-error');
    }

  }
})

// Карта
openMap.addEventListener('click', function(e) {
  e.preventDefault();
  modalMap.classList.add('show');
})
modalMapClose.addEventListener('click', function(e) {
  e.preventDefault();
  modalMap.classList.remove('show');
})






