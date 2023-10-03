const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


/*function capitalizeFirstLetter(tutorials){
  for(let i = 0 ; i < tutorials.length ; i++){
    let str = tutorials[i].split(" ");
    for( let j = 0 ; j < str.length ; j++){
           str[j] = str[j][0].toUpperCase() + str[j].substring(1);
           tutorials[i]= str.join(" ")
           
      }
   
       console.log(tutorials[i]);
  }
  return tutorials;
} */
const titleCased = () => {

  function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
 
    return tutorials.map(sentence => {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => capitalizeWord(word));
    return capitalizedWords.join(' ');
  });
};

const capitalizedTutorials = titleCased();
console.log(capitalizedTutorials);

