// 1. prompt da kiritilgan songacha bo'lgan juft va toq sonlar yig'indisini toping va ular o'rtasidagi farqni ham console ga chiqaring
let num = prompt("son kiriting")
let toq = 0
let juft = 0
let sum = 0
 for( let i = 0; i <= num; i++){
         if( i % 2 == 0 ) {
            juft += i
         }else if(i % 2 !== 0){
            toq += i
         }
    }
    console.log("juft " + juft);
    console.log("toq " + toq);
    if(toq > juft){
        sum = toq - juft
    }else if(toq < juft){
        sum = juft - toq
    }
    console.log("sonlr orasidagi farq" + sum)

// 2. shunday function yarating ki argument sifatida berilgan songacha bo'lgan sonlarning yig'indisi qaytarsin (return qilsin)

function num( namber){
    let son = 0
for( let i = 0; i <= namber; i++){
        son += i
        console.log(son);

}
}
console.log(num(5) );

// 3. array ni ichidagi sonlar yig'indisini topib beradigan algorithm yarating array sonlardan tashkil topsin
let arr = [1, 2, 3, 4, 5]
let sum =0
for(let i = 0; i < arr.length ; i++){
    sum += arr[i]
    console.log(sum);
}
console.log(arr);

// 4. array ichidagi juft sonlar yig'indisini topadigan algorithm yarating
let arr = [1, 2, 3, 4, 5]
let sum =0
for(let i = 0; i < arr.length ; i++){
    if(arr[i] % 2 == 0){
        sum += arr[i]
        console.log(sum);
    }
}
console.log(arr);

// 5. shunday function yaratinki agument sifatida berilgan son array ichida bor yoki yo'qligini aniqlab bersin
let arr = [1, 2, 3, 4, 5]
let sum =0
function gems(a) {
    for(let i = 0; i < arr.length ; i++){
        if( a == arr[i]){
         console.log(arr[i], "son bor");
        }else if(a !== arr[i]){
            console.log("bunday son yo'q");
        }

    }
    return sum;
}

console.log(gems(4));

// 6. shunday function yaratinki agument sifatida berilgan son array ichida bor bo'lsa array dan olib tashlab agar bo'lmasa array ning oxiridan qo'shib qo'ysin
let arr = [1, 2, 3, 4, 5];
let sum = 0;
function gems(a) {
  for (let i = 0; i < arr.length; i++) {
    if (a == arr[i]) {
      sum = arr;
      arr.splice(i, 1);
    } else if (a !== arr[i]) {
      sum = arr.push(a);
    }
  }
  return sum;
}
console.log(gems(5));
console.log(arr);

// 7. array ichidagi birinchi va oxirgi sonlar o'rtasidagi farqni toping farq har doim musbat son chiqishi kerak
        //  1-variyant
let arr = [1, 2, 3, 4, 5]
let one = arr[0]
let two = arr[arr.length - 1]
let res = Math.abs(one - two)


console.log(one);
console.log(two);
console.log(res);



// 2-variyant
// let arr = [1, 2, 3, 4, 5]
// let one = arr[0]
// let two = arr[arr.length - 1]
// if(one > two){
//    return one -two
// }else if (one <two){
//    return two - one
// }




// console.log(one);
// console.log(two);
// console.log(res);