const cookies = document.getElementById("cookies");

cookies.style.display = "none";


window.addEventListener('load', () => {
  setTimeout(() => {
    cookies.style.display = "flex";
    cookies.showModal();
  }, 3000);
});

document.querySelectorAll('.close-dialog').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('dialog').close();
    btn.closest('dialog').style.display = "none";
  });
});