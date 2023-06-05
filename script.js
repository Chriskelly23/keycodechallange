const keycode = document.getElementById('keycode');

document.addEventListener('keypress', (event) => {
  const { code, key, charCode } = event;

  keycode.value = `Code: ${code} | Key: ${key} | CharCode: ${charCode}`;
  console.log(event.charCode);
});

