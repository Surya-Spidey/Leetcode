let num = [1, 2, 3, 4, 5];
function largest(num){
    let lar = num[0];
    for (let i = 0; i < num.length; i++) {
    if (num[i] > lar) {
        lar = num[i];
    }
}
return lar;     
}
let result = largest(num);