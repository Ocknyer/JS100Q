// 24. 대문자 변환하기
let name1 = prompt('이름 입력')
console.log(name1.toUpperCase());

// 25. 원의 넓이 구하기
let radius = prompt('반지름')
let circle = radius * radius * 3.14
console.log(circle);

let r = prompt('반지름')
function 원너비 () {
    return r * r * 3.14;
}
원너비()

// 26. 행성 문제2
// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.

let 행성 = prompt('행성의 한글 이름을 입력하세요.');
if (행성 = '수성') {
    console.log('Mercury');
} else if (행성 = '금성') {
    console.log('Venus');
} else if (행성 = '지구') {
    console.log('Earth');
} else if (행성 = '화성') {
    console.log('Mars');
} else if (행성 = '목성') {
    console.log('Jupiter');
} else if (행성 = '토성') {
    console.log('Saturn');
} else if (행성 = '천왕성') {
    console.log('Uranus');
} else if (행성 = '해왕성') {
    console.log('Neptune');
}

let 행성2 = {
    '수성' : 'Mercury',
    '금성' : 'Venus',
    '지구' : 'Earth',
    '화성' : 'Mars',
    '목성' : 'Jupiter',
    '토성' : 'Saturn',
    '천왕성' : 'Uranus',
    '해왕성' : 'Neptune'
}

const name = prompt('행성 이름 입력');
console.log(행성2[name]);

// 27. 객체 만들기
// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

// 두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요.

let 학생이름 = prompt('학생 이름').split(' ');
let 수학점수 = prompt('수학 점수').split(' ');
let obj = {};
for (let i = 0; i < 학생이름.length; i++) {
    obj[학생이름[i]] = parseInt(수학점수[i]);
}
console.log(obj);

// 28. 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 

// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

let 입력 = prompt('입력').split('');
for (let i = 0; i < 입력.length - 1; i++) {
    console.log((입력[i], 입력[i + 1]));
}

// 29. 진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

// 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYG'
let lower = 'abcdefghijklmnopqrstuvwxyg'

let 문자입력 = prompt('대문자나 소문자를 입력하세요')
if (upper.includes(문자입력)) {
    console.log('YES')
} else {
    console.log('NO')
}

let alphabet = prompt('알파벳을 입력하세요');

if (alphabet === alphabet.toUpperCase()) {
    console.log('YES');
} else {
    console.log('NO')
}

// 30. 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다. 그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요.

let outerStr = prompt('문자열을 입력하세요.');
let innerStr = prompt('내부 문자열을 입력하세요.');

console.log(outerStr.indexOf(innerStr));