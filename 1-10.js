// 1. 다음 배열에서 400, 500을 삭제하는 code를 입력하세요.
var nums = [100, 200, 300, 400, 500];

// 내 답 : splice(a,b)를 사용해 index a 번부터 b의 길이만큼 숫자를 제거하는 코드
nums = splice(3,2);
console.log(nums);

// 기존 답 : pop을 이용해 마지막 index를 뽑아 제거하는 코드
nums.pop();
nums.pop();
console.log(num);


// 2. <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.
var arr = [200, 100, 300];

// pass > splice의 세 개의 매개 변수를 이용하여, 2번 자리에 0개의 요소를 제거하고 10000이라는 요소를 추가함.
arr.splice(2, 0, 10000);
console.log(arr);

// 출력 [100, 200, 10000, 300]


// 3. 다음의 출력 값으로 올바른 것은?
var arr = [100, 200, 300];
console.log(typeof(arr));

// 답 : object -> 객체이기 때문


// 4. 다음 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?

// 1)  입력 : a = 1,   출력 : number
// 2)  입력 : a = 2.22,   출력 : boolean
// 3)  입력 : a = 'p',   출력 : string
// 4)  입력 : a = [1, 2, 3],   출력 : object

// 답 :  2) -> 2.22도 number로 출력됨 boolean은 true, false 두 가지


// 5. 다음 코드의 출력 값으로 알맞은 것은?
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i; // a = a + i
}

console.log(a+b);

// 답 : 16 -> i < 5 일 동안 i를 2씩 증가시키므로, a += i 는 11, 14의 순서로 증가하며 b를 더해 16이 됨


// 6. 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다. 앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.
// 1)  NaN
// 2)  1
// 3)  ""
// 4)  0
// 5)  undefined

// 답 : 2) 1 -> 1은 true로 반환


// 7. 다음 중 변수명으로 사용할 수 없는 것 2개를 고르시오.

// 1)  age
// 2)  Age
// 3)  let
// 4)  _age
// 5)  1age

// 답 : 3), 5) -> 예약어나 숫자가 처음 오는 것은 변수명으로 사용할 수 없음 $, _, 문자로 시작해야 함


// 8. 자바스크립트 객체를 다음과 같이 만들었다. 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다.)
var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(['weight']);

// 답 : 84 -> 배열에서 중복값이 있을 때 마지막에 입력된 값으로 덮어씌워짐


// 9. 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오. (concat을 활용한 출력 방법)
데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second); // 답

console.log(result);

// 출력 : 2019/04/26 11:34:27

// 10. 별 찍기
// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

var star = ''; // 문자열로 찍겠다는 것
for (var i = 0; i < 5; i++) {
    for (var j = 4; j > i; j--) {
        star += ' ';
    }
    for (var k = 0; k <= (i * 2); k++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);


const n = prompt('숫자를 입력하세요.'); // 이걸 추가해줘야 입력값을 줄 수 있다
let tree = '';

for(let i=1; i<=n; i++){
  let star = '';
  for(let j=1; j<=n-i; j++){
    star += ' ';
  }
  for(let k=1; k<=2*i-1; k++){
    star += '*';
  }
  tree += star + '\n';
}

console.log(tree);