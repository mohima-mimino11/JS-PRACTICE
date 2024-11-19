const person = {
  name: 'Mimino',
  age: 25,
  profession: 'software engineer',
  salary: 25000,
  married : false,
  "fav places" : ['bandorban', 'saintmartin', 'kuakata']
}

// console.log(person);

person.salary = 30000;
person['age'] = 27;
person['fav places'] = ['maldives', 'bali', 'paris'];

// console.log(person);

const keyName = 'profession';
console.log(person[keyName]);

const propName = 'profession';
person[propName] = 'DevOps Engineer';
console.log(person);

