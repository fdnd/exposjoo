export const openRegisterForm = () => {
  const registerForm = document.querySelector('.register-form')
  if (registerForm) {
    registerForm.showModal()
  }
}
export const closeRegisterForm = () => {
  const registerForm = document.querySelector('.register-form')
  if (registerForm) {
    registerForm.close()
  }
}