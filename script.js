const facts = [
    "When Alexander Graham Bell invented the telephone he had three missed calls from Chuck Norris.",
    "Chuck Norris went skydiving and his parachute failed to open, so he took it back the next day for a refund.",
    "Chuck Norris has a grizzly bear carpet in his room — the bear isn’t dead it is just afraid to move.",
    "The Virgin Mary once saw an image of Chuck Norris in her grilled cheese sandwich.",
    "Chuck Norris counted to infinity. Twice.",
    "Chuck Norris can divide by zero.",
    "Chuck Norris is Darth Vader’s father.",
    "When Chuck Norris does a pushup he’s not pushing himself up — he’s pushing the Earth down.",
    "Why is the universe expanding? Everything is trying to get away from Chuck Norris.",
    "The flu gets a Chuck Norris shot every year.",
    "Chuck Norris ordered a Big Mac at Burger King and got one.",
    "There is no theory of evolution. Just a list of creatures Chuck Norris has allowed to live.",
    "Chuck Norris once visited the Virgin Islands. They are now just “the Islands.",
    "When the Boogeyman goes to sleep every night, he checks his closet for Chuck Norris.",
    "Chuck Norris knows Victoria’s secret.",
    "Ghosts tell Chuck Norris stories.",
    "Chuck Norris can unscramble eggs.",
    "Chuck Norris and Superman once fought each other on a bet. The loser had to start wearing his underwear on the outside of his pants.",
    "When Batman is in trouble, he turns on the Chuck Norris signal.",
    "Chuck Norris was once on Celebrity Wheel of Fortune and was the first to spin. The next 29 minutes of the show consisted of everyone standing around awkwardly, waiting for the wheel to stop.",
    "Latin insulted Chuck Norris. It is now a dead language.",
    "While vacationing in France, Chuck Norris went out for a casual bike ride and accidentally won the Tour de France.",
  
];

function getRandomFact(facts) {
  return facts[Math.floor(Math.random() * facts.length)];
}

const randomFact = getRandomFact(facts);
document.getElementById('fact').innerHTML = 'randomFact';
