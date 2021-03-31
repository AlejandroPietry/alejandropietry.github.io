function EnviarMensagemWpp(){
    var mensagem = document.getElementById("message").value;
    var nomePessoa = document.getElementById("fullname").value;

    if(mensagem == null || nomePessoa == null){
        return null
    }

    window.open("https://api.whatsapp.com/send?phone=5591991367966&text=" + mensagem + "att: " + nomePessoa);
}