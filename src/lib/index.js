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

export const generateRandomBorderRadius = () => {
  // Original values: 255px 15px 225px 15px / 15px 225px 15px 255px
  const originalValues = [255, 15, 225, 15, 15, 225, 15, 255]
  const values = originalValues.map(original => {
    // Add much more random variation: ±80px for larger values, ±30px for smaller values
    const variation = original > 100 ? Math.random() * 160 - 80 : Math.random() * 60 - 30
    return Math.max(5, Math.floor(original + variation)) // Ensure minimum of 5px
  })
  return `${values[0]}px ${values[1]}px ${values[2]}px ${values[3]}px / ${values[4]}px ${values[5]}px ${values[6]}px ${values[7]}px`
}