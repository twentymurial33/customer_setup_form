
const form = document.getElementById('customerForm');

form.addEventListener('submit', function(e){
  e.preventDefault();
  //field values
  const lastName = document.getElementById('lastName').value;
  const firstName = document.getElementById('firstName').value;
  const email = document.getElementById('email').value;
  const businessLastName = document.getElementById('businessLastName').value;
  const businessFirstName = document.getElementById('businessFirstName').value;
  const businessEmail = document.getElementById('businessEmail').value;
  //validation checks
  if(lastName === '' || firstName === '' || email === ''){
    alert('Please fill out all fields');
  }else{
    alert('Form Submitted');
  }

  if(businessLastName === '' || businessFirstName === '' || businessEmail === ''){
    alert('Please fill out all fields');
  }else{
    alert('Form Submitted');
  }
})
