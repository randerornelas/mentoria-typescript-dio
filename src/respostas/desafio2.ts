
enum Trabalho {
    Professora,
    Motorista
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Carla',
    idade: 29,
    profissao: Trabalho.Professora
};

let pessoa2: Humano = {
    nome: 'João',
    idade: 19,
    profissao: Trabalho.Motorista
};

let pessoa3: Humano = {
    nome: 'Camila',
    idade: 32,
    profissao: Trabalho.Professora
};

let pessoa4: Humano = {
    nome: "Diego",
    idade: 19,
    profissao: Trabalho.Motorista
}