// Store the wallet amount to your local storage with key "amount"
// console.log("index page");
let obj=localStorage.getItem("amount")||0;
document.getElementById("wallet").innerText=obj;

 function myfunction(){
    //   console.log("inside function")
   //  document.getElementById("amount").value;
    let money = document.getElementById("amount").value;
    let rupees = +money;
    let balance = localStorage.getItem("amount") ;
    let bal = +balance;
    let sum = rupees + bal;
    

console.log(sum);
// console.log(balance);
// console.log(money);
//  money = money + money;
 let wallet = document.getElementById("wallet") ;
 wallet.innerHTML=sum;
 localStorage.setItem("amount", JSON.stringify(sum));

    


 }