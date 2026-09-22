
var person1 = new Object();

person1.name = '윤하원';
person1.age = 21;
person1.sayHello = function(){
console.log(' Hello~~'+this.name);
}
console.log(person1);
// 추후프로퍼티추가가능
person1.job = 'developer';
person1.hobby = 'movie';
console.log(person1);
person1.sayHello();

/**
 function Person(name, age){
this.name = name;
this.age = age;
this.sayHello = function(){
console.log(this.name + 'Hello!');
}
};
// 객체3개생성
var person1 = new Person('michelle', 27);
var person2 = new Person('frank', 36);
var person3 = new Person('demi', 27);
object_obj.js
console.log(person1);
console.log(person2);
console.log(person3);
 */