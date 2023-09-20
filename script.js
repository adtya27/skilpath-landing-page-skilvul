function handleGetFormData() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const city = document.getElementById('city').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;

  return { name, email, city, zipCode, status };
}

function isNumber(input) {
  return !isNaN(input);
}

function checkboxIsChecked() {
  const statusCheckbox = document.getElementById('status');

  return statusCheckbox.checked;
}

function validateFormData(data) {
  if (data.name && data.city && data.email && data.zipCode && isNumber(data.zipCode) && checkboxIsChecked()) {
    return true;
  }

  return false;
}

function submit() {
  const warning = document.getElementById('warning');

  if (!validateFormData(handleGetFormData())) {
    warning.innerHTML = 'Periksa form anda sekali lagi';
  } else {
    warning.innerHTML = '';
  }
}

document.getElementById('submit-form').addEventListener('click', (event) => {
  event.preventDefault();
  submit();
});
