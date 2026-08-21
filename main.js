// Lista de doces do cardápio
var doces = [
  {
    nome: "Brigadeiro Gourmet",
    foto: "https://images.pexels.com/photos/34263268/pexels-photo-34263268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 4.00,
    descricao: "Brigadeiro cremoso com chocolate belga e granulado especial.",
    categoria: "caseiros"
  },
  {
    nome: "Beijinho de Coco",
    foto: "https://images.pexels.com/photos/5665639/pexels-photo-5665639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 3.50,
    descricao: "Beijinho de coco fresco com cobertura de coco raspado.",
    categoria: "caseiros"
  },
  {
    nome: "Trufa de Chocolate",
    foto: "https://images.pexels.com/photos/31325605/pexels-photo-31325605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 5.00,
    descricao: "Trufa recheada com ganache de chocolate ao leite.",
    categoria: "caseiros"
  },
  {
    nome: "Bolo de Chocolate",
    foto: "https://images.pexels.com/photos/37418888/pexels-photo-37418888.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 12.00,
    descricao: "Fatia de bolo de chocolate com cobertura e calda quente.",
    categoria: "bolos"
  },
  {
    nome: "Bolo de Morango",
    foto: "https://images.pexels.com/photos/15823267/pexels-photo-15823267.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 12.00,
    descricao: "Bolo fofinho com morangos frescos e creme leve.",
    categoria: "bolos"
  },
  {
    nome: "Cupcake Especial",
    foto: "https://images.pexels.com/photos/20677473/pexels-photo-20677473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 9.00,
    descricao: "Cupcake com cobertura cremosa e frutas frescas no topo.",
    categoria: "bolos"
  },
  {
    nome: "Cheesecake de Morango",
    foto: "https://images.pexels.com/photos/10455820/pexels-photo-10455820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 14.00,
    descricao: "Cheesecake cremoso com calda de morangos frescos.",
    categoria: "tortas"
  },
  {
    nome: "Tiramisu",
    foto: "https://images.pexels.com/photos/17558644/pexels-photo-17558644.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 15.00,
    descricao: "Clássico tiramisu italiano com café e creme de mascarpone.",
    categoria: "tortas"
  },
  {
    nome: "Brownie com Sorvete",
    foto: "https://images.pexels.com/photos/38028980/pexels-photo-38028980.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 13.00,
    descricao: "Brownie de chocolate meio amargo com bola de sorvete.",
    categoria: "tortas"
  },
  {
    nome: "Sundae de Chocolate",
    foto: "https://images.pexels.com/photos/19087694/pexels-photo-19087694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 11.00,
    descricao: "Sorvete de chocolate com calda, cookies e nozes.",
    categoria: "gelados"
  },
  {
    nome: "Banana Split",
    foto: "https://images.pexels.com/photos/19087695/pexels-photo-19087695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 13.00,
    descricao: "Três bolas de sorvete, banana, chantilly e calda de chocolate.",
    categoria: "gelados"
  },
  {
    nome: "Pudim de Leite",
    foto: "https://images.pexels.com/photos/9238689/pexels-photo-9238689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 8.00,
    descricao: "Pudim cremoso de leite condensado com calda de caramelo.",
    categoria: "gelados"
  },
  {
    nome: "Macarons Sortidos",
    foto: "https://images.pexels.com/photos/36455119/pexels-photo-36455119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 18.00,
    descricao: "Caixa com 6 macarons franceses de sabores variados.",
    categoria: "especiais"
  },
  {
    nome: "Donuts Coloridos",
    foto: "https://images.pexels.com/photos/35081225/pexels-photo-35081225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 7.00,
    descricao: "Donuts com cobertura colorida e confeitos, perfeitos para festas.",
    categoria: "especiais"
  },
  {
    nome: "Pirulitos Gourmet",
    foto: "https://images.pexels.com/photos/3127883/pexels-photo-3127883.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 4.50,
    descricao: "Pirulitos artesanais em diversos sabores e cores.",
    categoria: "especiais"
  },
  {
    nome: "Caixa de Chocolates",
    foto: "https://images.pexels.com/photos/37857736/pexels-photo-37857736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 25.00,
    descricao: "Caixa presente com 12 chocolates finos sortidos.",
    categoria: "especiais"
  },
  {
    nome: "Torta de Limão",
    foto: "https://images.pexels.com/photos/8879735/pexels-photo-8879735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 14.00,
    descricao: "Torta de limão com merengue tostado e base crocante.",
    categoria: "tortas"
  },
  {
    nome: "Mousse de Chocolate",
    foto: "https://images.pexels.com/photos/4669249/pexels-photo-4669249.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 10.00,
    descricao: "Mousse aerado de chocolate ao leite servido em taça.",
    categoria: "gelados"
  },
  {
    nome: "Torta de Maçã",
    foto: "https://images.pexels.com/photos/2955816/pexels-photo-2955816.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 13.00,
    descricao: "Torta de maçã com massa folhada e canela, servida quente.",
    categoria: "tortas"
  },
  {
    nome: "Crepe de Morango",
    foto: "https://images.pexels.com/photos/15820610/pexels-photo-15820610.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 12.00,
    descricao: "Crepe recheado com morangos frescos e creme de baunilha.",
    categoria: "especiais"
  },
  {
    nome: "Cookies de Chocolate",
    foto: "https://images.pexels.com/photos/31323236/pexels-photo-31323236.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 6.00,
    descricao: "Cookies com gotas de chocolate e nozes, crocantes por fora.",
    categoria: "caseiros"
  },
  {
    nome: "Sorvete de Morango",
    foto: "https://images.pexels.com/photos/5535556/pexels-photo-5535556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 8.00,
    descricao: "Sorvete cremoso de morango com pedaços de fruta fresca.",
    categoria: "gelados"
  },
  {
    nome: "Flan de Caramelo",
    foto: "https://images.pexels.com/photos/24206906/pexels-photo-24206906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 9.00,
    descricao: "Flan cremoso com calda de caramelo dourado.",
    categoria: "gelados"
  },
  {
    nome: "Bolo Red Velvet",
    foto: "https://images.pexels.com/photos/6363069/pexels-photo-6363069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 15.00,
    descricao: "Fatia de bolo red velvet com cobertura de cream cheese.",
    categoria: "bolos"
  },
  {
    nome: "Fondue de Chocolate",
    foto: "https://images.pexels.com/photos/18784856/pexels-photo-18784856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    preco: 22.00,
    descricao: "Fondue de chocolate com morangos, banana e marshmallows.",
    categoria: "especiais"
  }
];

// Filtro atual
var filtroAtual = "todos";

// Carrinho de compras
var carrinho = [];

// Mostra os doces na tela
function mostrarDoces() {
  var lista = document.getElementById("lista-doces");
  var texto = "";

  for (var i = 0; i < doces.length; i++) {
    var doce = doces[i];

    // Se tem filtro e não bate, pula
    if (filtroAtual !== "todos" && doce.categoria !== filtroAtual) {
      continue;
    }

    texto += '<div class="doce-card">';
    texto += '<div class="doce-imagem-wrap">';
    texto += '<img src="' + doce.foto + '" alt="' + doce.nome + '" class="doce-imagem" loading="lazy">';
    texto += '<span class="doce-tag">' + nomeCategoria(doce.categoria) + '</span>';
    texto += '</div>';
    texto += '<div class="doce-info">';
    texto += '<h3>' + doce.nome + '</h3>';
    texto += '<p class="doce-descricao">' + doce.descricao + '</p>';
    texto += '<div class="doce-rodape">';
    texto += '<span class="doce-preco">R$ ' + doce.preco.toFixed(2).replace(".", ",") + '</span>';
    texto += '<button class="btn-adicionar" onclick="adicionarCarrinho(' + i + ')">';
    texto += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
    texto += 'Adicionar</button>';
    texto += '</div>';
    texto += '</div>';
    texto += '</div>';
  }

  lista.innerHTML = texto;
}

// Transforma o nome da categoria para exibir
function nomeCategoria(cat) {
  var nomes = {
    "caseiros": "Caseiro",
    "bolos": "Bolo",
    "tortas": "Torta",
    "gelados": "Gelado",
    "especiais": "Especial"
  };
  return nomes[cat] || cat;
}

// Filtra os doces por categoria
function filtrarDoces(categoria, botao) {
  filtroAtual = categoria;

  // Tira o ativo dos outros botões
  var botoes = document.getElementsByClassName("filtro-btn");
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove("ativo");
  }
  botao.classList.add("ativo");

  mostrarDoces();
}

// Adiciona um doce no carrinho
function adicionarCarrinho(indice) {
  var doce = doces[indice];

  // Verifica se o doce já está no carrinho
  var jaTem = false;
  for (var i = 0; i < carrinho.length; i++) {
    if (carrinho[i].nome === doce.nome) {
      carrinho[i].quantidade = carrinho[i].quantidade + 1;
      jaTem = true;
      break;
    }
  }

  if (jaTem === false) {
    carrinho.push({
      nome: doce.nome,
      foto: doce.foto,
      preco: doce.preco,
      quantidade: 1
    });
  }

  atualizarContador();

  // Animação no botão
  atualizarContador();
}

// Atualiza o número no botão do carrinho
function atualizarContador() {
  var total = 0;
  for (var i = 0; i < carrinho.length; i++) {
    total = total + carrinho[i].quantidade;
  }
  document.getElementById("contador-carrinho").innerHTML = total;
}

// Abre a janela do carrinho
function abrirCarrinho() {
  mostrarItensCarrinho();
  document.getElementById("carrinho-fundo").classList.add("aberto");
}

// Fecha a janela do carrinho
function fecharCarrinho(event) {
  if (event && event.target !== event.currentTarget) {
    return;
  }
  document.getElementById("carrinho-fundo").classList.remove("aberto");
}

// Mostra os itens dentro do carrinho
function mostrarItensCarrinho() {
  var div = document.getElementById("itens-carrinho");

  if (carrinho.length === 0) {
    div.innerHTML = '<div class="carrinho-vazio">' +
      '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' +
      '<p>Seu carrinho está vazio!</p></div>';
    document.getElementById("total-carrinho").innerHTML = "R$ 0,00";
    return;
  }

  var texto = "";
  var total = 0;

  for (var i = 0; i < carrinho.length; i++) {
    var item = carrinho[i];
    var subtotal = item.preco * item.quantidade;
    total = total + subtotal;

    texto += '<div class="item-carrinho">';
    texto += '<img src="' + item.foto + '" alt="' + item.nome + '" class="item-imagem">';
    texto += '<div class="item-info">';
    texto += '<h4>' + item.nome + '</h4>';
    texto += '<p>R$ ' + subtotal.toFixed(2).replace(".", ",") + '</p>';
    texto += '</div>';
    texto += '<div class="item-botoes">';
    texto += '<button onclick="mudarQuantidade(' + i + ', -1)">-</button>';
    texto += '<span>' + item.quantidade + '</span>';
    texto += '<button onclick="mudarQuantidade(' + i + ', 1)">+</button>';
    texto += '</div>';
    texto += '</div>';
  }

  div.innerHTML = texto;
  document.getElementById("total-carrinho").innerHTML = "R$ " + total.toFixed(2).replace(".", ",");
}

// Muda a quantidade de um item
function mudarQuantidade(indice, mudanca) {
  carrinho[indice].quantidade = carrinho[indice].quantidade + mudanca;

  if (carrinho[indice].quantidade <= 0) {
    carrinho.splice(indice, 1);
  }

  atualizarContador();
  mostrarItensCarrinho();
}

// Abre a tela de pagamento
function abrirPagamento() {
  if (carrinho.length === 0) {
    return;
  }

  var total = calcularTotal();
  document.getElementById("total-pagamento").innerHTML = "R$ " + total.toFixed(2).replace(".", ",");
  document.getElementById("carrinho-fundo").classList.remove("aberto");
  document.getElementById("pagamento-fundo").classList.add("aberto");
}

// Fecha a tela de pagamento
function fecharPagamento(event) {
  if (event && event.target !== event.currentTarget) {
    return;
  }
  document.getElementById("pagamento-fundo").classList.remove("aberto");
}

// Calcula o total do carrinho
function calcularTotal() {
  var total = 0;
  for (var i = 0; i < carrinho.length; i++) {
    total = total + (carrinho[i].preco * carrinho[i].quantidade);
  }
  return total;
}

// Finaliza o pedido
function finalizarPedido(event) {
  event.preventDefault();

  var msg = document.getElementById("msg-sucesso");
  var texto = document.getElementById("msg-sucesso-texto");
  texto.innerHTML = "Pedido realizado com sucesso! Obrigado pela preferência!";
  msg.classList.add("mostrar");

  carrinho = [];
  atualizarContador();

  document.getElementById("pagamento-fundo").classList.remove("aberto");
  event.target.reset();
  document.getElementById("campo-cartao").classList.add("mostrar");

  setTimeout(function() {
    msg.classList.remove("mostrar");
  }, 4000);
}

// Envia a mensagem do formulário de contato
function enviarMensagem(event) {
  event.preventDefault();

  var msg = document.getElementById("msg-sucesso");
  var texto = document.getElementById("msg-sucesso-texto");
  texto.innerHTML = "Mensagem enviada! Responderemos em breve.";
  msg.classList.add("mostrar");

  event.target.reset();

  setTimeout(function() {
    msg.classList.remove("mostrar");
  }, 4000);
}

// Expõe as funções para os onclick do HTML
window.adicionarCarrinho = adicionarCarrinho;
window.abrirCarrinho = abrirCarrinho;
window.fecharCarrinho = fecharCarrinho;
window.mudarQuantidade = mudarQuantidade;
window.abrirPagamento = abrirPagamento;
window.fecharPagamento = fecharPagamento;
window.finalizarPedido = finalizarPedido;
window.enviarMensagem = enviarMensagem;
window.filtrarDoces = filtrarDoces;

// Quando a página carrega
document.addEventListener("DOMContentLoaded", function() {
  mostrarDoces();

  // Mostra ou esconde os campos do cartão conforme a escolha
  var radios = document.getElementsByName("pagamento");
  for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function() {
      var campoCartao = document.getElementById("campo-cartao");
      if (this.value === "cartao") {
        campoCartao.classList.add("mostrar");
      } else {
        campoCartao.classList.remove("mostrar");
      }
    });
  }

  // Muda o cabeçalho quando rola a página
  window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Marca o link ativo do menu conforme a seção visível
  var secoes = document.querySelectorAll("section[id]");
  var links = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function() {
    var posicaoAtual = window.scrollY + 150;

    for (var i = 0; i < secoes.length; i++) {
      var secao = secoes[i];
      var topo = secao.offsetTop;
      var altura = secao.offsetHeight;

      if (posicaoAtual >= topo && posicaoAtual < topo + altura) {
        for (var j = 0; j < links.length; j++) {
          links[j].classList.remove("ativo");
        }
        var linkAtivo = document.querySelector('.nav-link[href="#' + secao.id + '"]');
        if (linkAtivo) {
          linkAtivo.classList.add("ativo");
        }
      }
    }
  });
});
