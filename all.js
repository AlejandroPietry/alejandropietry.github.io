function EnviarMensagemWpp(){
    var mensagem = document.getElementById("message").value;
    var nomePessoa = document.getElementById("fullname").value;

    console.log(mensagem)
    console.log(nomePessoa)
    if(mensagem == "" || nomePessoa == ""){
        return null
    }
    else{
        window.open("https://api.whatsapp.com/send?phone=5591991367966&text=" + mensagem +"\ att: " + nomePessoa);
    }

}