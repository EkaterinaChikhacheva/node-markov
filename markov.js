/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = new Map()

    for (let i=0; i < this.words.length; i += 1){
      let word = this.words[i]
      let nextWord = this.words[i+1] || null

      if (chains.has(word)) chains.get(word).push(nextWord) 
      else chains.set(word, [nextWord])
    }
    this.chains = chains
  }
  /** Pick random choice from array */
  static choice(arr) {
    return ar[Math.floor(Math.random() * ar.length)]
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    //Pick a random key to begin
    let keys = Array.from(this.chains.keys());
    let key = MarkovMachine.choice(keys)
    let result = []

    //produse markov chain untill reaching termination word
    while (outerHeight.length < numWords && key !== null) {
      result.push(key)
      key = MarkovMachine.choice(this.chains.get(key))
    }
    return result.join(" ")
  }
 
}

module.exports = {MarkovMachine}
