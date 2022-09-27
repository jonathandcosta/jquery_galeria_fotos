/*Seleciona todo o documento*/
$(document).ready(function () {
  /*Seleciona o button para realizar o efeito*/
  $("header button").click(function () {
    /*empurra o form para baixo*/
    $("form").slideDown();
  });

  /*button reset*/
  $("#botao-cancel").click(function () {
    $("form").slideUp();
  });
  /*adicionar nova imagem*/
  $("form").on("submit", function (e) {
    e.preventDefault();
    const enderecoDaNovaImagem = $("#endereco-imagem-nova").val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
    $(`<div class="overlay-imagem-link">
    <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">Ver imagem em tamanho real</a>
  </div>`).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn(1000);
    $(`#endereco-imagem-nova`).val("");
  });
});
