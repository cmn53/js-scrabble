const LETTER_VALUES = {
  'A': 1,
  'E': 1,
  'I': 1,
  'O': 1,
  'U': 1,
  'L': 1,
  'N': 1,
  'R': 1,
  'S': 1,
  'T': 1,
  'D': 2,
  'G': 2,
  'B': 3,
  'C': 3,
  'M': 3,
  'P': 3,
  'F': 4,
  'H': 4,
  'V': 4,
  'W': 4,
  'Y': 4,
  'K': 5,
  'J': 8,
  'X': 8,
  'Q': 10,
  'Z': 10
};
const BONUS = 50;

const Scrabble = {
  score(word) {
    if (word === undefined || word.length === 0 || word.length > 7) {
      throw new Error('Invalid input');
    }

    const letters = word.toUpperCase().split('');

    let score = 0;

    letters.forEach(function(letter) {
      if ( LETTER_VALUES[letter] === undefined ) {
        throw new Error('Invalid input: word may only contain letters');
      }
      score += LETTER_VALUES[letter];
    });

    if (letters.length === 7) {
      score += BONUS;
    }
    return score;
  },

  // highestScoreFrom(arrayOfWords) {
  //
  // },
};

// Scrabble.Player = class {
//
// };


module.exports = Scrabble;
