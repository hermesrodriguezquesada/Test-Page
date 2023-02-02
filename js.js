const menuButton = document.querySelector('.menu-button');
const menuContainer = document.querySelector('.menu-container');

menuButton.addEventListener('click', function() {
  menuContainer.hidden = !menuContainer.hidden;
  if (menuContainer.hidden) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    menuButton.querySelector('span').textContent = 'Menú';
  } else {
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Cerrar menú');
    menuButton.querySelector('span').textContent = 'Cerrar';
  }
});

// JS dialog test1
const openDialogButton = document.querySelector('#openDialog');
const dialog1 = document.querySelector('#dialog1');
const closeDialog1Button = document.querySelector('#closeDialog1');
const closeDialog2Button = document.querySelector('#closeDialog2');

openDialogButton.addEventListener('click', function() {
  dialog1.style.display = 'block';
});

closeDialog1Button.addEventListener('click', function() {
  dialog1.style.display = 'none';
});

closeDialog2Button.addEventListener('click', function() {
  dialog1.style.display = 'none';
});


// JS dialog test2
const openDialogButtonn = document.querySelector('#openDialogButton');
const myDialog = document.querySelector('#myDialog');

openDialogButtonn.addEventListener('click', () => {
  myDialog.style.display = 'block';
});

myDialog.addEventListener('click', (event) => {
  if (event.target === myDialog) {
    myDialog.style.display = 'none';
  }
});



// JS dialog test3
const openIframeButton = document.getElementById("openIframeButton");
const iframe = document.getElementById("iframe");
const closeDialog3 = document.getElementById("closeDialog3");

openIframeButton.addEventListener("click", function() {
  iframe.style.display = "block";
});

closeDialog3.addEventListener("click", function() {
  iframe.style.display = "none";
});



