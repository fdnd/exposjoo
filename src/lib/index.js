export const openRegisterForm = () => {
  const registerForm = document.querySelector('.register-form')
  if (registerForm) {
    if (registerForm.showModal) {
      registerForm.showModal()
    } else {
      registerForm.setAttribute('open', '')
    }
  }
}
export const closeRegisterForm = () => {
  const registerForm = document.querySelector('.register-form')
  if (registerForm) {
    if (registerForm.close) {
      registerForm.close()
    } else {
      registerForm.removeAttribute('open')
    }
  }
}