const college = {
  name: 'vnc',
  class: [11, 12],
  events: ['science fair', 'bijoy dibos', '21 Feb'],
  unique: {
    color: 'blue',
    result : {
      gpa: 5,
      merit: 'top'
    }
  }
}

console.log(college.unique.color);
console.log(college.unique.result.merit);
college.unique.result.merit = 'top top top most';
console.log(college.unique.result.merit);
college.events[1] = 'Shadinota Dibosh';
console.log(college.events);
console.log(college.events[1]);


