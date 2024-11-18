const school = 'Raj UK Uttara Model School';

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());



const subject = 'Chemistry';

const book = 'chemistry';

if(subject.toLowerCase() === book.toLowerCase()){
  console.log('I am reading book.');
  
}else{
  console.log('whatever');
  
}

const drink = ' water';
const liquid = '  water  ';

if(drink.trim() === liquid.trim()){
  console.log('water is everything.');
  
}else{
  console.log('sPLISH SplasH');
  
}
