(function() {
    'use strict';

    let controlFio = document.querySelector('.form-control.contacts-fio');
    let controlEmail = document.querySelector('.form-control.contacts-email');
    let controlText = document.querySelector('.form-control.contacts-text');
    let personalCheckbox = document.querySelector('input[name=personal-data]');
    let personalCheckboxText = document.querySelector('.personal-data__checkbox-text');

    let contactForm = document.querySelector('.contacts-form');

    let isStorageSupport = true;
    let storageName = '';
    let storageEmail = '';

    try{
        storageName = localStorage.getItem('fio');
        storageEmail = localStorage.getItem('email');
    }catch(err) {
        isStorageSupport = false;
    }

    if(storageName) {
        controlFio.value = storageName;
    }
    if(storageEmail) {
        controlEmail.value = storageEmail;
    }

    // сабмит формы отправки сообщения
    contactForm.addEventListener('submit', function(e) {
        if(controlFio.value && controlEmail.value && personalCheckbox.checked) {
            if(isStorageSupport) {
                localStorage.setItem('fio', controlFio.value);
                localStorage.setItem('email', controlEmail.value);
            }
            controlFio.classList.remove('control-error');
            controlEmail.classList.remove('control-error');
            personalCheckboxText.classList.remove('error');
        } else {
            e.preventDefault();

            if(!personalCheckbox.checked) {
                personalCheckboxText.classList.add('error');
            } else {
                personalCheckboxText.classList.remove('error');
            }

            if(!controlFio.value) {
                controlFio.classList.add('control-error');
            } else {
                controlFio.classList.remove('control-error');
            }
            if(!controlEmail.value) {
                controlEmail.classList.add('control-error');
            } else {
                controlEmail.classList.remove('control-error');
            }
        }
    })

    // плавная прокрутка
    $(document).ready(function(){
        $('.nav').on('click','a', function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1000);
        });
    });
}())
