document.querySelectorAll('.galeria-grid img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const lightImg = document.getElementById('lightbox-img');
    lightImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

document.getElementById('lightbox').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});
