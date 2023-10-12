class Livro {
  constructor(titulo, autor, disponivel) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = disponivel;
  }

  emprestar() {
    if (this.disponivel) {
      this.disponivel = false;
      console.log(`O livro "${this.titulo}" foi emprestado.`);
    } else {
      console.log(`O livro não está disponível para empréstimo.`);
    }
  }

  devolver() {
    if (!this.disponivel) {
      console.log(`O livro "${this.titulo}" foi devolvido.`);
      this.disponivel = true;
    } else {
      console.log(`O livro "${this.titulo}" já está disponível.`);
    }
  }

  consultarDisponibilidade() {
    return this.disponivel ? "Disponível" : "Indisponível";
  }
}

// Exemplo de uso da classe Livro:
let livro1 = new Livro("Aventuras Fantásticas", "Autor Desconhecido", false);
livro1.emprestar()
console.log("Disponibilidade do livro:", livro1.consultarDisponibilidade());

livro1.devolver()
console.log("Disponibilidade do livro:", livro1.consultarDisponibilidade());