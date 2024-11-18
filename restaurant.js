const age = 72;
const price = 500;
if(age <= 12){
  console.log('you can eat for free.');
}else if(age >= 60){
  //  50% discount
  const discount = price * 50 / 100;
  const payAmount = price - discount;
  console.log('Sir your bill is ' + payAmount + ' taka.');
}else{
  console.log('you need to pay full bill of ' + price + ' taka.');
}