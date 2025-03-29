////base and inheritance

//  class  Parent {
//     constructor(name,animal) {
//         this.name=name
//         this.animal=animal
//     }
//     print(){
//         console.log(`This is ${this.animal} and his name is ${this.name}`); 
//     }
// }

// class child extends Parent{
//     constructor(name,animal,food){
//         super(name,animal)
//         this.food=food
//     }
//     next(){
//         super.print()
//         console.log(`and it eats ${this.food}`);
        
//     }
// }

// let check = new child('Buggy','Dog','pedigiry')

// check.next()
   
// ///////////////////////////////////////////////////set method and get method

// class  Parnt {
//     constructor(name,animal) {
//         this.name=name
//         this.animal=animal
//     }
//     print(){
//         console.log(`This is ${this.animal} and his name is ${this.name}`); 
//     }
// }

// class childer extends Parnt{
//     constructor(name,animal,food){
//         super(name,animal)
//         this.food=food
//     }

//     set namer(name){ //this is set function or method
//         this.name=name
//     }

//     get get_name(){
//         return this.animal;
//     }

//     next(){
        
//         console.log(`and it eats ${this.food}`);
        
//     }
// }

// let checkr = new childer('Buggy','Dog','pedigiry')
// checkr.namer = 'Divakar' //set calling
// console.log(checkr.get_name)// get caling
// checkr.next()


///////////////////////////////////////////////Encapthulation with get set method like varable or property

// class Rblbank{
//     #privacy;
//     constructor(bool){
//         this.#privacy=bool;
//     }

//     set privacy_bank(data){
//         this.#privacy=data
//     }

//     get get_data(){
//         return this.#privacy;
//     }

//     check(){
//         console.log(`This bank ${this.#privacy}`)
//     }
// }

// let check = new Rblbank('High security')
// check.privacy_bank='low security' // set calling
// console.log(check.get_data)//get callig
// check.check();
   
//////////////////////////////////////////////////////////////////// Polimerism in JS oops

// class Sec_A{
//     constructor(name){
//         this.name=name
//     }

//     rewrite(){
//       return  console.log(`He is very bad person`);   
//     }
// }

// class Single_person extends Sec_A{
//     constructor(name){
//         super(name)
//     }

//     rewrite(){
//         console.log(`He is a good ${this.name}`)
//     }
// }

// let std = new Single_person('guna')

// std.rewrite()


/////////////////////////////////////////////////////////////////Static method and static property

// class Static{
//     static company_name ='Dckap palli';


//     static full_name(first,last){
//         return first+last
//     }

//     static course(){
//         return 'HTML, CSS, JAVA script'
//     }
// }

// class Join_company{
//     constructor(name,age,last) {
//         this.name=name
//         this.age=age
//         this.last=last
//     }

//     detail(){
//         console.log(`My name is ${Static.full_name(this.name,this.last)} and my office name is ${Static.company_name} i learned courses in this place is ${Static.course()}`)
//     }
// }

// let emp = new Join_company('Balachandar',22,'Sivakumar')

// emp.detail()


//////////////////////////////////////////////////////////Abstraction oops


class Std {
    constructor(name, pass){
        this.name=name
        this.pass = pass
    }

    #password(){
       return `This is my secreate pass word ${this.pass}`
    }

    detail(){
        console.log(`My name is ${this.name} and ${this.#password()}`);
        
    }
}

let student = new Std('Bala','ggr82t5404ru34')

student.detail()