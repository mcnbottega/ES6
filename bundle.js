"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);      
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usario = 'Moises';
    }

    mostraUsuario(){
        console.log(this.usario);
    }
    

}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario();

const arr = [1, 2, 4, 5, 9];

const newArr = arr.map(function(item, index){
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
    return item === 4;
});

console.log(find);

const arr = [1, 2, 4, 5, 9];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const usuario = {
    nome: 'Maicon',
    idade: 28,
    endereco: {
        cidade: 'Carazinho',
        estado: 'SC',
    },
};

const {nome, idade, endereco: {cidade}} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);
*/
//REST
var usuario = {
  nome: 'Maicon',
  idade: 28,
  endereco: {
    cidade: 'Carazinho',
    estado: 'SC'
  }
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
console.log(resto); //SPREAD

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = arr1.concat(arr2);
console.log(arr3);
