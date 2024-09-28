const email = document.getElementById('inputEmail')
const senha = document.getElementById('inputSenha')

function logar() {
    if(email.value == '' && senha.value == '' && email.value == '' || senha.value == '') {
        alert('Digite o login e a senha!')
    }else {
        if (email.value == 'robsondouglasf@outlook.com' && senha.value == 123456) {
            alert('Login com sucesso')
        }
    }
}