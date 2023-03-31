const nome = document.getElementById('inputNome')
const email = document.getElementById('inputEmail')
const senha = document.getElementById('inputSenha')

function validarFormulario(event){
    event.preventDefault()

    if(nome.value === '' || email.value === '' || senha.value === ''){
        alert('Preencha todos os campos!!')
        return
} else {
        console.log({
            nome: value,
            email: value,
            senha: value
        })
   }
}