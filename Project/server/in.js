// function checkcounter() {
//   let count = 0;
//   function counter() {
//     return count++;
//   }
//   return counter
// }
// let counter = checkcounter();
// counter();
// counter();

// console.log(counter());
// let counterextra = checkcounter();
// counterextra();
// console.log(counterextra());
////////


// function username(a)
// {
//   let greetings="helo"
//   return function great()
//   {
//     return greetings+ a+ ' is created'
//   }
// }
// let welcome=username("john")
// let weclomejack=username("wick")

// console.log(welcome())
// console.log(weclomejack())


// function sum(a){
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   }
// }
// let helo=sum(1)

// console.log(helo(5)(6))
////Symbol////
// const mysymbol=Symbol('mysymbol')
// let vaar={"name":"john",[mysymbol]:"unique","address":{
//   "city":"kamalia"
// }}
// let xyz=JSON.parse(JSON.stringify(vaar))

// xyz.name="wick"
// xyz.address.city="lahore"
// console.log("original:",vaar)
// console.log("Copied:",xyz)
// console.log("symbol:",vaar[mysymbol])

////IIFE///
// (function sayhi(){
//   console.log("helo",x)
// })(x=100)
// var x
///NAmed FUNCTION EXPRESSION/////
// let sayheloo=function fx(user){
//   if(user)
//   {
//     return "hello "+user
//   }
//   else
//   return fx("anonymous")
// }
// console.log(sayheloo())
////iterators and literalsa///
// let obj={
//   start:1,
//   end:5,
//   [Symbol.iterator]() {

//       let that=this;
//       let i=this.start;
//       return {
//         next:function () {
//           return { value: i, done: i++ > that.end }
//         }
//       }
//   }
// }
//   console.log(...obj)
// let num=[1,2,3]
// let iterator=num[Symbol.iterator]()
// console.log(num)
/////DECRORATORS/////
// function heavy(x)
// {
//   console.log(x + " heavy")
//   return x + ':heavy'
// }

// function memoizer(fx)
// {
//   let map=new Map()

//   return function(x){
 
//   if(map.has(x))
//   {
//     return map.get(x)
//   }
//   else
//   {
//      let result=fx(x)
//      map.set(x,result)
//      return result
//   }
    

//   }
// }
// let memoizedValue=memoizer(heavy)
// console.log("initial "+memoizedValue(4))
// console.log("initial "+memoizedValue(4))
// console.log("initial "+memoizedValue(3))
// console.log("initial "+memoizedValue(3))
// console.log("initial "+memoizedValue(1))

////map/////f
// let map =new Map()
// let person={1:1234}
// let personCheck={"name":"sheraz"}
// map.set('1',"sheraz")
// map.set(1,1234)
// map.set(person,personCheck)
// map.set(true,"bool1")

// console.log(map.get('1'))
// console.log(map.get(1))
// console.log(map.get(person))
// console.log(map.get(true))
// let x=[...map.keys()]
// let y=[...map.values()]
// console.log(x)
// console.log(y)

///Yield/////
// function *generator()
// {
//   yield 1;
//     yield 2;
//       yield 3;
  
// }
// let check=generator()
// console.log("new", ...check)
// console.log(check.next())
// console.log(check.next())
// console.log(check.next())
// console.log(check.next())
/////infinte generator////
// function *generator()
// {
//   let i=0
  
//   while(true)
//   {
//     yield i
//     i++
//   }
  
// }
// let check=generator()


// console.log(check.next())
// console.log(check.next())
// console.log(check.next())
// console.log(check.next())

///iterator through generator for fixed range ///

// let obj={
//   start:1,
//   end:5,
//   *[Symbol.iterator]() {
//     for(let value=this.start;value<=this.end;value++)
//     yield value
      
//   }

// }
//   console.log(...obj)


///iterator through generator for different range ///
// function range(start,end)
// {
// return {
//   start:1,
//   end:5,
//   *[Symbol.iterator]() {
//     for(let value=start;value<=end;value++)
//     yield value
      
//   }

// }
// }
//   console.log(...range(1,5))

///yield other example//
// function *range(start,end)
// {


  
//     for(let value=start;value<=end;value++)
//     {
//     yield value
      
//   }
// }
// let generator=range(1,5)
// console.log(...generator)
// generator.next()
//   console.log(...range(1,5))
//     console.log(...range(6,10))

////////other example////
// function *range()
// {
//   let result=yield 1
//   console.log(result)
//     let result1=yield 2
//   console.log(result1)
//     let result2=yield 3
//   console.log(result2)
// }
// let generator=range()
// let r1=generator.next()
// console.log(r1)
// let r2=generator.next(r1.value)
// console.log(r2)
// let r3=generator.next(r2.value)
// console.log(r3)
// console.log(generator.next(r3.value))



/////objcts////////
// let obj={
//   name:"sheraz",
//   city:"lahore",
//   addres:{
//     home:"karachi"
//   }
// }
// // let vaar=Object.assign({},obj)
// // let vaar={...obj}
// let vaar=JSON.parse(JSON.stringify(obj))
// vaar.name="ahmed"
// vaar.addres.home="kon"
// console.log("shalow copy:",vaar)
// console.log("original copy:",obj)

////inheritance,hasown property///
// let animal={
//     name:"sheraz",
//     walk:function(){
//       console.log("walk")
//     }
//   }
//   let dogs={
//     barks:"okay",
//   }
//   dogs.__proto__=animal
//   console.log(dogs.barks)
//   console.log(dogs.name)
//   for(let key in dogs)
//   {
//      console.log("keys r",key)
//     if(dogs.hasOwnProperty(key))
//     {
//     console.log("keys has own",key)
//     }
//   }
//   for(let key of Object.keys(dogs))
//   {
//     console.log("new keys",key)
//   }
/////prototype//
// let sheraz={
//     name:"sheraz"
//   }
//   function User1(name)
//   {
//     this.name=name;
  
//     console.log("this",this.name)
//      console.log("other",this.name)
//   }
//   let user=new User1("john")
//   let user1=new User1("wick")
//   console.log("new object",user.name)
//   console.log("predefined object",sheraz)