
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
const usuario = {
    nome: 'Maicon',
    idade: 28,
    endereco: {
        cidade: 'Carazinho',
        estado: 'SC',
    },
};

const {nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

//SPREAD
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);