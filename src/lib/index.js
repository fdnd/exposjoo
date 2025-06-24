export const openModalBasedOnQuery = () => {
  const modal = document.querySelector('.register-form')
  const query = window.location.search
  if (modal) {
    if (query.includes('register')) {
      modal.showModal()
    }
  }
}

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