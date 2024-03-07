// Função para salvar os dados do formulário em um arquivo json.
function saveForm(event) {
   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;

    // Prepara os dados para serem salvos como json
    var data = {
        name: name,
        email: email,
        city: city,
        state: state
    };

    // Cria um Blob com os dados em formato json.
    var text = JSON.stringify(data, null, 2);
    var blob = new Blob([text], { type: "application/json" });

    // Cria um link temporário e simula o clique para download.
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "form-data.json"; // Define o nome do arquivo para download.
    
    // Mensagem de alerta
    alert("Formulário enviado com sucesso! \n\n" + "Em breve retornaremos o contato.");
    
    // Dowload do arquivo
    a.click();

}



