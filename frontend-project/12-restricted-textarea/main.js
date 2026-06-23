const textArea = document.getElementById('input');
const charSet = document.getElementById('charset');
const limit = 250;

textArea.addEventListener('input', () => {
  const currentLength = textArea.value.length;

  charSet.textContent = `${currentLength}/${limit}`;

  if (currentLength >= limit) {
    textArea.classList.add('limit-reached');
    charSet.classList.add('limit-reached');
    textArea.style.outline = '1px solid #ff0000ff';
    charSet.style.color = '#ff0000ff';
  } else {
    textArea.classList.remove('limit-reached');
    charSet.classList.remove('limit-reached');
    textArea.style.outline = '1px solid #5B72EB';
    charSet.style.color = '#fff';
  }
});