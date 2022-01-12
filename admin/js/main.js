const body = document.querySelector('body');
const radioBtn = document.getElementsByName('theme');

let theme = localStorage.getItem('theme');
theme = theme == null ? 'peach' : theme;    

radioBtn.forEach(button => {
    button.addEventListener('change', () => {
        localStorage.setItem('theme', button.value);
        body.setAttribute('data-theme', localStorage.getItem('theme'))
    });
    if(theme == button.value) button.checked = true;
});

body.setAttribute('data-theme', theme);

const main = document.querySelector('main');

let createModal = () => {
    let modal = document.createElement('section');
    let modalHeader = document.createElement('div');
    let modalBody = document.createElement('div');
    let modalFooter = document.createElement('div');
    let button = document.createElement('button');
    button.innerHTML = 'Close';

    modal.classList.add('modals');
    modalHeader.classList.add('modal_header');
    modalBody.classList.add('modal_body');
    modalFooter.classList.add('modal_footer');

    modal.append(modalHeader);
    modal.append(modalBody);
    modalFooter.append(button);
    modal.append(modalFooter);
    main.append(modal);
}

let closeModal = () => {
    document.querySelector('.modals button').addEventListener('click', () => {
        document.querySelector('.modals').style.display = 'none';
        main.classList.remove('blur_bg');
    });
}

let openModal = (header, body) => {
    document.querySelector('.modals').style.display = 'flex';
    document.querySelector('.modal_header').innerHTML = header;
    document.querySelector('.modal_body').innerHTML = body;
    main.classList.add('blur_bg');
    closeModal();
}

// createModal();