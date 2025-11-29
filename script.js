// Sample questions: each category has 25+ questions (here 5 per category for demo)
const quizData = {
  History: [
    { q: "Who was the first president of USA?", options: ["George Washington","Abraham Lincoln","Thomas Jefferson","John Adams"], answer: 0 },
    { q: "In which year did World War II end?", options: ["1945","1939","1918","1965"], answer: 0 },
    { q: "Who discovered America?", options: ["Columbus","Magellan","Vespucci","Cook"], answer: 0 },
    { q: "The Great Wall is located in?", options: ["China","India","Japan","Korea"], answer: 0 },
    { q: "Who was known as Iron Man of India?", options: ["Sardar Patel","Gandhi","Nehru","Tilak"], answer: 0 },
    { q: "Who was the first Prime Minister of India?", options: ["Jawaharlal Nehru","Sardar Patel","Indira Gandhi","Rajendra Prasad"], answer: 0 },
{ q: "The Berlin Wall fell in which year?", options: ["1989","1991","1985","1990"], answer: 0 },
{ q: "Who wrote the 'Iliad'?", options: ["Homer","Socrates","Aristotle","Plato"], answer: 0 },
{ q: "Which empire was ruled by Genghis Khan?", options: ["Mongol Empire","Ottoman Empire","Roman Empire","Persian Empire"], answer: 0 },
{ q: "The French Revolution began in which year?", options: ["1789","1776","1804","1799"], answer: 0 },
{ q: "Who was the first woman Prime Minister in the world?", options: ["Sirimavo Bandaranaike","Indira Gandhi","Margaret Thatcher","Golda Meir"], answer: 0 },
{ q: "The Titanic sank in which year?", options: ["1912","1905","1920","1918"], answer: 0 },
{ q: "Who was the leader of the Soviet Union during WWII?", options: ["Joseph Stalin","Lenin","Trotsky","Mikhail Gorbachev"], answer: 0 },
{ q: "Who discovered penicillin?", options: ["Alexander Fleming","Louis Pasteur","Marie Curie","Thomas Edison"], answer: 0 },
{ q: "The Great Fire of London occurred in which year?", options: ["1666","1600","1707","1688"], answer: 0 },
{ q: "Who was the last pharaoh of Ancient Egypt?", options: ["Cleopatra","Tutankhamun","Ramses II","Hatshepsut"], answer: 0 },
{ q: "The Cold War was mainly between which countries?", options: ["USA and USSR","USA and Germany","UK and France","China and Japan"], answer: 0 },
{ q: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci","Michelangelo","Raphael","Vincent van Gogh"], answer: 0 },
{ q: "The American Civil War ended in which year?", options: ["1865","1861","1870","1855"], answer: 0 },
{ q: "Who was known as the 'Mahatma'?", options: ["Mahatma Gandhi","Subhas Chandra Bose","Bhagat Singh","Jawaharlal Nehru"], answer: 0 },
{ q: "Which empire built the Colosseum?", options: ["Roman Empire","Greek Empire","Persian Empire","Egyptian Empire"], answer: 0 },
{ q: "Who invented the printing press?", options: ["Johannes Gutenberg","Isaac Newton","Benjamin Franklin","Thomas Edison"], answer: 0 },
{ q: "The Indian Rebellion against the British happened in?", options: ["1857","1942","1905","1885"], answer: 0 },
{ q: "Who was the founder of the Mughal Empire?", options: ["Babur","Akbar","Shah Jahan","Aurangzeb"], answer: 0 },
{ q: "Which ship carried the Pilgrims to America in 1620?", options: ["Mayflower","Santa Maria","Endeavour","Beagle"], answer: 0 }

   

  ],
  Music: [
    { q: "Who is the 'King of Pop'?", options: ["Michael Jackson","Elvis","Prince","Madonna"], answer: 0 },
    { q: "Which instrument has keys?", options: ["Piano","Guitar","Drums","Violin"], answer: 0 },
{ q: "Which instrument is commonly used in Indian classical music?", options: ["Sitar","Guitar","Violin","Piano"], answer: 0 },
{ q: "Which K-pop group released the song 'Dynamite'?", options: ["BTS","BLACKPINK","EXO","TWICE"], answer: 0 },
{ q: "Who composed the famous Bollywood song 'Tujhe Dekha To'?", options: ["Jatin-Lalit","A.R. Rahman","Pritam","Shankar-Ehsaan-Loy"], answer: 0 },
{ q: "Which instrument has keys, pedals, and strings?", options: ["Piano","Drums","Guitar","Flute"], answer: 0 },
{ q: "Who is the lead vocalist of the band Coldplay?", options: ["Chris Martin","Bono","Adam Levine","Bruno Mars"], answer: 0 },
{ q: "Which Indian playback singer is known as the 'Nightingale of India'?", options: ["Lata Mangeshkar","Asha Bhosle","K.S. Chithra","Shreya Ghoshal"], answer: 0 },
{ q: "Which Korean girl group is famous for the song 'How You Like That'?", options: ["BLACKPINK","Red Velvet","ITZY","TWICE"], answer: 0 },
{ q: "Which composer wrote the 'Four Seasons'?", options: ["Antonio Vivaldi","Mozart","Beethoven","Bach"], answer: 0 },
{ q: "Who sang 'Shape of You'?", options: ["Ed Sheeran","Shawn Mendes","Justin Bieber","Sam Smith"], answer: 0 },
{ q: "Which Indian instrument is similar to a lute and used in classical music?", options: ["Sitar","Tabla","Harmonium","Sarangi"], answer: 0 },
{ q: "Which band released the hit song 'Bohemian Rhapsody'?", options: ["Queen","The Beatles","The Rolling Stones","Pink Floyd"], answer: 0 },
{ q: "Which K-pop boy group released 'Butter'?", options: ["BTS","EXO","NCT","Stray Kids"], answer: 0 },
{ q: "Who is known as the 'Pop Queen'?", options: ["Madonna","Britney Spears","Lady Gaga","Katy Perry"], answer: 0 },
{ q: "Which Indian singer won a National Award for the song 'Bharat Humko Jaan Se Pyaara Hai'?", options: ["Kumar Sanu","Udit Narayan","Shankar Mahadevan","Sonu Nigam"], answer: 0 },
{ q: "Which classical music instrument uses a bow to play?", options: ["Violin","Tabla","Sitar","Flute"], answer: 0 },
{ q: "Who is the composer of the song 'Jai Ho' from Slumdog Millionaire?", options: ["A.R. Rahman","Shankar-Ehsaan-Loy","Pritam","Anu Malik"], answer: 0 },
{ q: "Which American singer is known for the album '1989'?", options: ["Taylor Swift","Adele","Billie Eilish","Katy Perry"], answer: 0 },
{ q: "Which K-pop girl group released 'DDU-DU DDU-DU'?", options: ["BLACKPINK","TWICE","Red Velvet","GFRIEND"], answer: 0 },
{ q: "Which musical note comes after G?", options: ["A","F","B","C"], answer: 0 },
{ q: "Who is the famous Indian playback singer of 'Chaiyya Chaiyya'?", options: ["Sukhwinder Singh","Sonu Nigam","Arijit Singh","Kumar Sanu"], answer: 0 },
{ q: "Which instrument is associated with jazz music?", options: ["Saxophone","Tabla","Sitar","Harmonium"], answer: 0 },
{ q: "Who is called the 'Queen of Soul'?", options: ["Aretha Franklin","Whitney Houston","Mariah Carey","Adele"], answer: 0 },
{ q: "When was the first music video made?", options: ["1975","1963","1981","1955"], answer: 1 }



    
  ],
  MoviesTV: [
    { q: "Forrest Gump starred which actor?", options: ["Tom Hanks","Brad Pitt","Leonardo","Johnny Depp"], answer: 0 },
    { q: "Who played Jack in 'Titanic'?", options: ["Leonardo DiCaprio","Brad Pitt","Johnny Depp","Tom Hanks"], answer: 0 },
{ q: "Which movie features the character 'Forrest Gump'?", options: ["Forrest Gump","Cast Away","Saving Private Ryan","The Green Mile"], answer: 0 },
{ q: "Who directed 'Inception'?", options: ["Christopher Nolan","Steven Spielberg","James Cameron","Quentin Tarantino"], answer: 0 },
{ q: "Which Bollywood movie has the song 'Chaiyya Chaiyya'?", options: ["Dil Se","Lagaan","Hum Aapke Hain Koun","Kabhi Khushi Kabhie Gham"], answer: 0 },
{ q: "Which actor played Iron Man in the Marvel movies?", options: ["Robert Downey Jr.","Chris Evans","Chris Hemsworth","Mark Ruffalo"], answer: 0 },
{ q: "Which TV series is about a chemistry teacher turned meth kingpin?", options: ["Breaking Bad","Friends","Game of Thrones","The Office"], answer: 0 },
{ q: "In which year was the first 'Harry Potter' movie released?", options: ["2001","2000","2002","1999"], answer: 0 },
{ q: "Who played Joker in 'The Dark Knight'?", options: ["Heath Ledger","Joaquin Phoenix","Jared Leto","Jack Nicholson"], answer: 0 },
{ q: "Which Bollywood actor starred in '3 Idiots'?", options: ["Aamir Khan","Shah Rukh Khan","Salman Khan","Hrithik Roshan"], answer: 0 },
{ q: "Which TV show features the character 'Walter White'?", options: ["Breaking Bad","Better Call Saul","Narcos","Money Heist"], answer: 0 },
{ q: "Who directed 'Avatar'?", options: ["James Cameron","Steven Spielberg","Christopher Nolan","Peter Jackson"], answer: 0 },
{ q: "Which actress played Hermione Granger in 'Harry Potter'?", options: ["Emma Watson","Emma Stone","Jennifer Lawrence","Natalie Portman"], answer: 0 },
{ q: "Which movie won Best Picture at the Oscars in 2020?", options: ["Parasite","1917","Joker","Ford v Ferrari"], answer: 0 },
{ q: "Which Bollywood movie features the character 'Rancho'?", options: ["3 Idiots","Taare Zameen Par","PK","Dil Chahta Hai"], answer: 0 },
{ q: "Which TV series is set in Westeros?", options: ["Game of Thrones","Vikings","The Witcher","Stranger Things"], answer: 0 },
{ q: "Who played Jack Sparrow in 'Pirates of the Caribbean'?", options: ["Johnny Depp","Orlando Bloom","Brad Pitt","Tom Cruise"], answer: 0 },
{ q: "Which movie features the song 'My Heart Will Go On'?", options: ["Titanic","The Bodyguard","Frozen","Moulin Rouge"], answer: 0 },
{ q: "Which Bollywood actor played in 'Dangal'?", options: ["Aamir Khan","Shah Rukh Khan","Salman Khan","Ranbir Kapoor"], answer: 0 },
{ q: "Which TV show is about a group of friends in New York?", options: ["Friends","How I Met Your Mother","Big Bang Theory","The Office"], answer: 0 },
{ q: "Who played the female lead in 'Pretty Woman'?", options: ["Julia Roberts","Meg Ryan","Sandra Bullock","Nicole Kidman"], answer: 0 },
{ q: "Which movie series features 'Frodo'?", options: ["The Lord of the Rings","Harry Potter","The Hobbit","Chronicles of Narnia"], answer: 0 },
{ q: "Who directed 'Pulp Fiction'?", options: ["Quentin Tarantino","Martin Scorsese","Steven Spielberg","Christopher Nolan"], answer: 0 },
{ q: "Which Bollywood movie has the famous line 'Kitne Aadmi The?'?", options: ["Sholay","Don","Deewar","Mughal-e-Azam"], answer: 0 },
{ q: "Which TV series features the character 'Eleven'?", options: ["Stranger Things","The Umbrella Academy","Riverdale","Locke & Key"], answer: 0 }

  ],
  Sports: [
   { q: "How many players are there in a football team?", options: ["11","10","9","12"], answer: 0 },
{ q: "Which country won the first FIFA World Cup?", options: ["Uruguay","Brazil","Germany","Argentina"], answer: 0 },
{ q: "Who holds the record for most goals in a single World Cup?", options: ["Just Fontaine","Miroslav Klose","Ronaldo","Pele"], answer: 0 },
{ q: "Which Indian cricketer is known as 'God of Cricket'?", options: ["Sachin Tendulkar","Virat Kohli","MS Dhoni","Rahul Dravid"], answer: 0 },
{ q: "In tennis, what comes after '40'?", options: ["Game","Deuce","Advantage","Set"], answer: 1 },
{ q: "Which sport uses a shuttlecock?", options: ["Badminton","Tennis","Table Tennis","Squash"], answer: 0 },
{ q: "Which country won the 2019 Cricket World Cup?", options: ["England","New Zealand","India","Australia"], answer: 0 },
{ q: "How long is an Olympic swimming pool?", options: ["50 meters","25 meters","100 meters","75 meters"], answer: 0 },
{ q: "Which sport is called the 'king of sports'?", options: ["Football","Cricket","Basketball","Tennis"], answer: 0 },
{ q: "Who has won the most Formula 1 championships?", options: ["Lewis Hamilton","Michael Schumacher","Ayrton Senna","Sebastian Vettel"], answer: 0 },
{ q: "Which Indian badminton player won Olympic gold in 2020?", options: ["PV Sindhu","Saina Nehwal","Kidambi Srikanth","Lee Chong Wei"], answer: 0 },
{ q: "How many minutes are there in a standard hockey match?", options: ["60","50","70","90"], answer: 0 },
{ q: "Which country hosted the 2016 Summer Olympics?", options: ["Brazil","China","UK","Russia"], answer: 0 },
{ q: "Which sport uses the terms 'spike' and 'set'?", options: ["Volleyball","Basketball","Handball","Football"], answer: 0 },
{ q: "Which Indian wrestler won gold at the 2010 Commonwealth Games?", options: ["Sushil Kumar","Yogeshwar Dutt","Bajrang Punia","Deepak Punia"], answer: 0 },
{ q: "How many points are needed to win a standard game of table tennis?", options: ["11","15","21","10"], answer: 0 },
{ q: "Who is known as 'The Flying Sikh'?", options: ["Milkha Singh","Usain Bolt","Carl Lewis","Hima Das"], answer: 0 },
{ q: "Which team won the first IPL tournament in 2008?", options: ["Rajasthan Royals","Chennai Super Kings","Kolkata Knight Riders","Mumbai Indians"], answer: 0 },
{ q: "In which sport is the Davis Cup contested?", options: ["Tennis","Badminton","Cricket","Table Tennis"], answer: 0 },
{ q: "Which country has won the most Olympic gold medals in hockey?", options: ["India","Pakistan","Netherlands","Australia"], answer: 0 },
{ q: "Which Indian cricketer is nicknamed 'Captain Cool'?", options: ["MS Dhoni","Virat Kohli","Sachin Tendulkar","Rahul Dravid"], answer: 0 },
{ q: "Which sport is Serena Williams famous for?", options: ["Tennis","Golf","Badminton","Squash"], answer: 0 },
{ q: "Which football player is known as 'CR7'?", options: ["Cristiano Ronaldo","Lionel Messi","Neymar","Kylian Mbappe"], answer: 0 },
{ q: "Which sport uses a puck?", options: ["Ice Hockey","Field Hockey","Football","Rugby"], answer: 0 },
{ q: "Which country hosted the 2018 FIFA World Cup?", options: ["Russia","Brazil","Germany","France"], answer: 0 }

    
  ],
  GeneralKnowledge: [
    { q: "Capital of France?", options: ["Paris","Rome","Berlin","Madrid"], answer: 0 },
{ q: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare","Charles Dickens","Mark Twain","Jane Austen"], answer: 0 },
{ q: "Which planet is known as the Red Planet?", options: ["Mars","Venus","Jupiter","Saturn"], answer: 0 },
{ q: "Who is the current Prime Minister of India?", options: ["Narendra Modi","Rahul Gandhi","Amit Shah","Manmohan Singh"], answer: 0 },
{ q: "What is the largest ocean in the world?", options: ["Pacific Ocean","Atlantic Ocean","Indian Ocean","Arctic Ocean"], answer: 0 },
{ q: "Which gas do plants absorb from the atmosphere?", options: ["Carbon Dioxide","Oxygen","Nitrogen","Helium"], answer: 0 },
{ q: "Which country gifted the Statue of Liberty to the USA?", options: ["France","UK","Germany","Italy"], answer: 0 },
{ q: "What is the currency of Japan?", options: ["Yen","Dollar","Euro","Rupee"], answer: 0 },
{ q: "Who invented the telephone?", options: ["Alexander Graham Bell","Thomas Edison","Nikola Tesla","Guglielmo Marconi"], answer: 0 },
{ q: "Which city is known as the 'City of Angels'?", options: ["Los Angeles","Paris","Mumbai","Bangkok"], answer: 0 },
{ q: "Which Indian state is called the 'Land of Five Rivers'?", options: ["Punjab","Haryana","Rajasthan","Gujarat"], answer: 0 },
{ q: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci","Michelangelo","Vincent van Gogh","Pablo Picasso"], answer: 0 },
{ q: "Which is the largest country in the world by area?", options: ["Russia","Canada","China","USA"], answer: 0 },
{ q: "Which is the longest river in the world?", options: ["Nile","Amazon","Yangtze","Mississippi"], answer: 0 },
{ q: "Who discovered gravity?", options: ["Isaac Newton","Albert Einstein","Galileo Galilei","Nikola Tesla"], answer: 0 },
{ q: "What is the chemical symbol for water?", options: ["H2O","CO2","NaCl","O2"], answer: 0 },
{ q: "Which planet is closest to the Sun?", options: ["Mercury","Venus","Earth","Mars"], answer: 0 },
{ q: "Which Indian festival is known as the festival of lights?", options: ["Diwali","Holi","Eid","Raksha Bandhan"], answer: 0 },
{ q: "Which country is famous for the Eiffel Tower?", options: ["France","Italy","Germany","Spain"], answer: 0 },
{ q: "Which is the tallest mountain in the world?", options: ["Mount Everest","K2","Kangchenjunga","Lhotse"], answer: 0 },
{ q: "Who wrote the Indian national anthem?", options: ["Rabindranath Tagore","Bankim Chandra Chatterjee","Subhash Chandra Bose","Sarojini Naidu"], answer: 0 },
{ q: "What is the smallest continent by area?", options: ["Australia","Europe","Antarctica","South America"], answer: 0 },
{ q: "Which is the fastest land animal?", options: ["Cheetah","Lion","Tiger","Leopard"], answer: 0 },
{ q: "Which organ in the human body purifies blood?", options: ["Kidneys","Liver","Heart","Lungs"], answer: 0 },
{ q: "Which element has the chemical symbol 'O'?", options: ["Oxygen","Gold","Iron","Hydrogen"], answer: 0 }

    // add 24 more
  ]
};

// ✅ CHANGES HERE: get category selected from Page 2
let category = localStorage.getItem('selectedCategory') || "History"; // default History if nothing selected
let questions = shuffleArray(quizData[category]).slice(0, 25); // shuffle questions within selected category
let index = 0;
let score = 0;

// Load question
function loadQuestion() {
  const q = questions[index];
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");

  questionEl.innerText = q.q;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    optionsEl.appendChild(btn);
  });

  // Hide skip button temporarily for animation
  document.getElementById("skip-btn").style.display = "inline-block";
  document.querySelector(".quiz-card").classList.remove("fadeOut");
  document.querySelector(".quiz-card").classList.add("fadeIn");
}

// Shuffle array
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Check answer
function checkAnswer(selected) {
  const correct = questions[index].answer;
  if (selected === correct) {
    score++;
    launchConfetti();
  } else {
    alert("Wrong Answer!");
  }
  nextQuestion();
}

// Skip question
function skipQuestion() {
  nextQuestion();
}

// Next question
function nextQuestion() {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Show score
function showResult() {
  document.querySelector(".quiz-card").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");
  document.getElementById("score").innerText = `You scored ${score} / ${questions.length}`;
}

// Restart quiz
function restartQuiz() {
  index = 0;
  score = 0;
  questions = shuffleArray(quizData[category]).slice(0,25);
  document.querySelector(".quiz-card").classList.remove("hidden");
  document.getElementById("result-box").classList.add("hidden");
  loadQuestion();
}

// Confetti animation
function launchConfetti() {
  const duration = 2 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}

// Start quiz
loadQuestion();
