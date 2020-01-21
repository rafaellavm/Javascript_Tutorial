///////////////////////////////// Length
document.getElementById('btnTamanhoString').addEventListener('click', function () {

  var texto = document.querySelector('p#ParagrafoTamanhoDoTexto input').value;
  document.querySelector('p#ParagrafoTamanhoDoTexto span').textContent = "O tamanho do texto é " + texto.length;

});

///////////////////////////////// Match()
document.getElementById('btnRecorrenciaString').addEventListener("click", RetornarOcorrenciasDaString);

function RetornarOcorrenciasDaString() {

  var elemento = document.querySelector('p#RetornarTodasStringsEspecíficas');
  var textoDoSpan = elemento.querySelector('span').textContent;
  var spanOcorenciaString = elemento.querySelector('span#spanOcorenciaString');

  if (spanOcorenciaString != null) {
    elemento.removeChild(spanOcorenciaString);
  }

  var span = document.createElement("span");
  span.setAttribute("id", "spanOcorenciaString");
  var node = document.createTextNode("O resultado é: " + textoDoSpan.match(/ain/gi));
  span.appendChild(node);
  elemento.appendChild(span);
}

///////////////////////////////// indexOf() - string.indexOf(searchvalue, start)
/*O método indexOf() retorna o índice da primeira ocorrência do valor especificado em searchValue dentro do objeto String para o qual foi chamado, começando a busca a partir de start. Retorna -1 se o valor não for encontrado. 
O método indexOf é sensível a letras maiúsculas e minúsculas.
*/

document.getElementById('btnResultadoDoIndexOf').addEventListener('click', RetornarResultadoDoIndexOf);

function RetornarResultadoDoIndexOf() {

  LimparAlertaMensagem();

  var elemento = document.querySelector('p#RetornarResultadoDoIndexOf');
  var primeiroInput = elemento.querySelectorAll('input')[0];
  var segundoInput = elemento.querySelectorAll('input')[1];
  var lblTextoPrincipal = elemento.querySelectorAll('label')[0].textContent;
  var lblTextoSomenteNumeros = elemento.querySelector("label[for='lblTextoSomenteNumeros']");
  var textoDoAlerta = "";
  var validarPrimeiroInput = false;
  var validarSegundoInput = false;

  validarPrimeiroInput = (primeiroInput.value.length > 0 && lblTextoPrincipal.includes(primeiroInput.value)) ? true : false;
  validarSegundoInput = (segundoInput.value.length > 0) ? true : false;

  if (!validarPrimeiroInput){
    textoDoAlerta = "Campo vazio ou não possui a string digitada no texto";
    Teste();
  }

  if (!validarSegundoInput) {
    textoDoAlerta = (textoDoAlerta == "" || textoDoAlerta == null) ? "Campo com o número da posição não preenchido" : textoDoAlerta + " / Campo com o número da posição não preenchido";
  }
  if (!validarPrimeiroInput || !validarSegundoInput) {
    CriarAlertaMensagem(lblTextoSomenteNumeros, textoDoAlerta, 'red');
    CriarEspacoAposElemento();
  }
  else {
    CriarAlertaMensagem(lblTextoSomenteNumeros, " A palavra digitada foi encontrada a partir da posição " + lblTextoPrincipal.indexOf(primeiroInput.value) + " do texto", 'green');
    CriarEspacoAposElemento();
  }
}

function CriarAlertaMensagem(elemento, texto, corDaMensagem) {

  var span = document.createElement("span"); //cria o span
  span.setAttribute("id", "spanMensagem"); //seta um atributo para o span criado
  span.style.color = corDaMensagem;
  var textoDoSpanAlerta = document.createTextNode(texto);
  span.appendChild(textoDoSpanAlerta); //coloca o texto dentro do span criado

  elemento.parentNode.insertBefore(span, elemento.nextSibling); //coloca o span criado logo após o elemento específico
}

function Teste() {
  
  var paragrafo = document.querySelectorAll('p#RetornarResultadoDoIndexOf')[0];
  //console.log('paragrafo = ', paragrafo);
  var elementos = paragrafo.children;
 
  /*for (var i = 0; i < elementos.length - 1; i++) {

    console.log(elementos[i]); 
  }  
   for (var i = 0; i < paragrafo.length; i++) {    
    var a = paragrafo[i].children;
    console.log(a);
    
    while (a.nextElementSibling) {
      a = a.nextElementSibling;
     
      /*if (a.localName) {
        if (a.localName == 'br') {
          a.parentElement.removeChild(a);
          break;
        }
        else if (a.localName == 'h1')
          break;
      }
    }
  }*/
}

function CriarEspacoAposElemento() {
  elemento = document.getElementById('spanMensagem');
  elemento.insertAdjacentHTML('beforebegin', '<br /><br />');
}

function LimparAlertaMensagem() {
  var spanAlerta = document.querySelector('span#spanMensagem');

  //document.querySelector('p#RetornarResultadoDoIndexOf').children

  //console.log(spanAlerta);
  //var brEspaco = document.getElementById('brEspaco');

  //console.log(brEspaco);

  if (spanAlerta != null)
    spanAlerta.remove();

}