const btn = document.getElementById("save-reset");
const passwordField = document.getElementById("password");
const validationField = document.getElementById("validation");
const error=document.querySelector(".error")



const processFormData = (e) => {
  e.preventDefault();
  const password = passwordField.value;
  const validation = validationField.value;

  if (password === validation) {
    document.form.submit();
  } else {
    error.setAttribute("style", "display:block")
   
  }
};

btn.addEventListener("click", (e) => processFormData(e));

passwordField.addEventListener("click",()=>{error.setAttribute("style", "display:none")})
validationField.addEventListener("click",()=>{error.setAttribute("style", "display:none")})

