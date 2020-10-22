//[[Prototype]]의 값은 Prototype(프로토타입) 객체이며
// __proto__ accessor property로 접근할 수 있다.
// __proto__ 프로퍼티에 접근하면
// 내부적으로 Object.getPrototypeOf가 호출되어 프로토타입 객체를 반환한다.


var student = {
    name: 'Lee',
    score: 90
}
console.log(student.__proto__ === Object.prototype); // true


// 모든 객체는 자신의 프로토타입 객체를 가리키는 prototype 인터널 슬롯을 갖으며
//상속을 위해 사용된다.

function Person(name) {
    this.name = name;
}

var foo = new Person('Lee');

console.dir(Person); // prototype 프로퍼티가 있다.
console.dir(foo);    // prototype 프로퍼티가 없다.


console.dir(student);
console.log(student.hasOwnProperty('name')); // true
console.log(student.__proto__ === Object.prototype); // true
console.log(Object.prototype.hasOwnProperty('hasOwnProperty'));


function Person(name, gender){
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
        console.log('Hi! my name is' + this.name);
    };
}

var foo = new Person('Lee','male');

console.dir(Person);
console.dir(foo);