function ativaBotao(){
    var texto = document.getElementById('input-texto').value;
    var textofinal = '';

  
    if (texto.length == ""){
        alert('Campo vazio ou inválido. Digite novamente');
    }else{
        //var textocript = document.getElementById('input-texto').value;
        const regex = new RegExp("^[ 0-9a-zA-Z\b]+[A-Za-z0-9_\w]+$");

            if(!regex.test(texto)){
                document.getElementById('input-texto').value='';
                alert("Digite novamente");
            }else{
                textofinal = texto;

            }
    }

       var troca = textofinal
        .replace(/[e]/gi, 'enter')
        .replace(/[i]/gi, 'imes')
        .replace(/[a]/gi, 'ai')
        .replace(/[o]/gi, 'ober')
        .replace(/[u]/gi, 'ufat');
        
    document.getElementById("msg").value = troca;
}

function copiarTexto(){

    let copiarTexto = document.querySelector("#msg");
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999)
    document.execCommand("copy");
    return copiarTexto
}

function descriptarDados(){
    var textoDescrip = document.getElementById('input-texto').value;

          
    if (textoDescrip.length == ""){
        alert('Campo vazio ou inválido. Digite novamente');
    }else{
        //var textocript = document.getElementById('input-texto').value;
        const regex = new RegExp("^[ 0-9a-zA-Z\b]+[A-Za-z0-9_\w]+$");

            if(!regex.test(textoDescrip)){
                document.getElementById('input-texto').value='';
                alert("Digite novamente");
            }10;
        //textofinal = texto.length;
    }

       var trocaDesc = textoDescrip
        .replace(/enter/, 'e')
        .replace(/ai/, 'a')
        .replace(/imes/, 'i')
        .replace(/ober/, 'o')
        .replace(/ufat/, 'u');
        
    document.getElementById("msg").value = trocaDesc;
}
