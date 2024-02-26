function criptografarTexto() {
    const texto = document.getElementById("textArea_entrada").value;
    const resultado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        document.getElementById("textArea_Saida").innerHTML = resultado;
}
function descriptografarTexto(){
    const texto = document.getElementById("textArea_entrada").value;
    const resultado = texto
        .replace(/ai/g,"a")
        .replace(/enter/g,"e")
        .replace(/imes/g,"i")
        .replace(/ober/g,"o")
        .replace(/ufat/g,"u");
        document.getElementById("textArea_Saida").innerHTML = resultado;

}
function limparCampo(){
    String = document.getElementById("textArea_entrada");
    String.value = "";
}
function copiarTexto(){
    let textoCopiado = document.getElementById("textArea_Saida");
    textoCopiado.select();
    document.execCommand('copy');
}