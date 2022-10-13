// 1. 다음 값의 평균과 분산을 구하세요
// 분산 => (각 값에 - 평균) ** 2
let arr1 = [10, 20, 30, 10, 20, 30, 40, 10]

// 평균
let avg = arr1.reduce((a, b) => a + b) / arr1.length
// 분산
arr1.forEach(i => console.log((i - avg)**2))


// 2. 다음 string의 평균 값을 구하세요
// hint code : '5, 4, 10, 2, 5'.split(',')
// '5, 4, 10, 2, 5'
let s = '5, 4, 10, 2, 5'.split(', ')
let sum = 0;
for (i of s) {
    sum += parseInt(i)
}
console.log(sum/s.length)


// 3. 다음 array의 각 자리수의 합을 구하세요.
// hint 문자열로 변환해서 풀어주세요!
// [11, 22, 33, 111, 2]
// 1+1, 2+2, 3+3, 1+1+1, 2
// 2, 4, 6, 3, 2
// 정답 : 17
let arr2 = [11, 22, 33, 111, 2]
let filtered = arr2.toString().split('').filter(e => e !==','); // ,와 일치하지 않는 것만 필터링 해서 남김
// let filtered = arr2.join('');
let sum2 = 0;
for (i of filtered) {
    sum2 += parseInt(i)
}
console.log(sum2);


// 4. 반복문만 사용하여 숫자단위 콤마 찍기 (예 1,000,000)
// 숫자단위 콤마 없애기 (예 1,000,000 -> 1000000)
// 문자열 뒤집기

let s = 'hello'
let rev = ''
for (i = 0; i < s.length; i ++) {
    rev = s[i] + rev // rev로 작성된 것 앞에 s[i]가 순차적으로 붙음.
}

let rev2 = ''
for (i = s.length - 1; i >= 0; i--) { // s.length = 5, s의 index는 4까지이므로 -1을 해준다
    rev2 += s[i]
}


// 5. 로또 번호 추첨기
let lotto = [];
while (lotto.length < 6) {
    let num = parseInt((Math.random()*45)+1)
    if(lotto.indexOf(num) == - 1)
    lotto.push(num)
}
console.log(lotto);


// 6. JSON 데이터 가공
// 다음 데이터로 table을 생성하기
// 버튼을 누르면 나이의 평균을 구하는 기능을 구현하기
let jsonData = [
    {
      "_id": "5e80777f673acf89c007ff91",
      "age": 27,
      "eyeColor": "green",
      "name": "Angelina Chang",
      "gender": "female",
      "email": "angelinachang@kangle.com",
      "phone": "+1 (938) 477-2821"
    },
    {
      "_id": "5e80777feee717674b817fd2",
      "age": 25,
      "eyeColor": "green",
      "name": "Deidre Cobb",
      "gender": "female",
      "email": "deidrecobb@kangle.com",
      "phone": "+1 (938) 477-2824"
    },
    {
      "_id": "5e80777fac368a4578dda85d",
      "age": 25,
      "eyeColor": "blue",
      "name": "Jolene Franks",
      "gender": "female",
      "email": "jolenefranks@kangle.com",
      "phone": "+1 (985) 536-3981"
    },
    {
      "_id": "5e80777ff3717874cbc78e44",
      "age": 31,
      "eyeColor": "brown",
      "name": "Waters Hardin",
      "gender": "male",
      "email": "watershardin@kangle.com",
      "phone": "+1 (938) 559-2224"
    },
    {
      "_id": "5e80777fe36842ea9e024fcd",
      "age": 34,
      "eyeColor": "green",
      "name": "Jody Chaney",
      "gender": "female",
      "email": "jodychaney@kangle.com",
      "phone": "+1 (878) 587-2602"
    },
    {
      "_id": "5e80777fafd591f57344eb33",
      "age": 31,
      "eyeColor": "green",
      "name": "Ortiz Maldonado",
      "gender": "male",
      "email": "ortizmaldonado@kangle.com",
      "phone": "+1 (986) 509-2753"
    },
    {
      "_id": "5e80777f20e48e9ada226862",
      "age": 25,
      "eyeColor": "brown",
      "name": "Stacy Burris",
      "gender": "female",
      "email": "stacyburris@kangle.com",
      "phone": "+1 (864) 577-3500"
    },
    {
      "_id": "5e80777faf334f84a2c90595",
      "age": 33,
      "eyeColor": "brown",
      "name": "Davenport Levy",
      "gender": "male",
      "email": "davenportlevy@kangle.com",
      "phone": "+1 (990) 600-2700"
    }
]