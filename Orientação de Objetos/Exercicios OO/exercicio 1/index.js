class WordCounter {
  constructor() {
    // Inicializa o contador de palavras com 0
    this.wordCount = 0;
  }

  countWords(str) {
    // Verifica se a string é válida (não é null ou indefinida)
    if (typeof str !== 'string') {
      throw new Error('O parâmetro deve ser uma string.');
    }

    // Remove espaços em branco no início e no fim da string
    const trimmedStr = str.trim();

    // Conta o número de palavras separadas por espaços em branco
    this.wordCount = trimmedStr.split(/\s+/).filter(word => word !== '').length;

    // Retorna o resultado
    return this.wordCount;
  }
}

// Exemplo de uso:
const wordCounter = new WordCounter();
const sentence = '   Olá,      mundo!  ';
console.log(wordCounter.countWords(sentence)); // Saída: 2 (duas palavras: "Olá," e "mundo!")