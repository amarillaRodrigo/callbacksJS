const elFormulario = document.getElementById('register-user-form')

elFormulario.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(elFormulario)
    const data = Object.fromEntries(formData)
    
    const password = data.password
    const confirmPassword = data.confirmPassword
    
    if (password !== confirmPassword) {
        alert('Error: Passwords do not match')
    } else {
        // Simulate data submission
        console.log('Data submitted:', data)
    }
})