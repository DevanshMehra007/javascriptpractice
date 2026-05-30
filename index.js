// console.log('Hello World'); 
// console.log(10+10);
// console.log(10-10);
// console.log(10/0);
// console.log(10 + " 10 ");
// console.log(10 * '10');

// const a="Rishab"
// const b="Kumar"
// console.log(a+" "+b);


// const a='Dev'
// console.log(typeof(a));

// const b=Number('number')
// console.log(typeof(b));

// const c=9
// const d='10'  
//     console.log(dev);
    
// })

// const arr=["Dev", 20 , 462041 , "Minal Recidency "]

// for(let i=0; i<arr.length; i++)
// {
//     console.log(arr[i]);
    
// }

// for (i of arr)
// {
//     console.log(i);
    
// }

// for(i in arr)
// {
//     console.log(i);
    
// }

// arr.forEach((i)=>{
//     console.log(i);
    
// })

// for(let i=0; i<=10;i++)
// {
//     console.log(i);
// }

// for(let i=0; i<=20;i++){
//     if(i%2==0){
//         console.log(i);
        
//     }
// }

// let nums=[2,4,6,8]
// let sum=0;
// for(let i=0;i<nums.length;i++)
// {
//     sum=sum+nums[i];
// }
// console.log(sum);

// let student = {name: "Alex",age: 20, grade: "A"}

// for(i in student)
// {
//     console.log(student[i]);
    
// }


// let fruits=["banana","apple","mango"];

// for(i of fruits)
// {
//     console.log(i);
    
// }


// let numbers=[1,2,3,4]

// numbers.forEach((i)=>{
//     console.log(i*2);
    
// })

// let a=[`hello`];
// a.forEach((i)=>{
//     console.log(i);
     
// })

// const x=10;
// const data=`my age is ${x}`
// console.log(data);

// const a={
//     name1: "dev",
//     name2: "love",
//     name3: "jayant"
// }

// for(i in a)
// {
//     console.log(typeof(a[i]));  
// } 

// const arr=[1,2,3,4,5]
// for(i in arr)
// {
//     console.log(typeof(i));
    
// }
// const arr=[1,2,3,4,5,6,7,8,9]
// console.log(arr[parseInt(arr.length-1)-1]+arr[1]);


// arr.forEach( (i)=> {
//     console.log(i);
    
// })

// const obj={
//     fname: "John",
//     lname: "Doe",
//     age: 50,
//     city: "New York",
//     isActive:true,
//     Hello: function fullname()
//     {
//         c=`${this.fname}${this.lname}`
//         return c;
//     }, 
//     address:{
//         address_line_1:"Coding Thinker, Kasturba Nagar",
//         address_line_2:"Chetak bridge",
//         city:"Bhopal",
//         state:"MP",
//         pincode:462023
//     },
//     arr:[1,2,3,4,5],
//     data:[1,2,3,4,5]

// }

// console.log(obj.address.pincode );

// arr=[1,2,3,4,5]

// for(i=arr.length-1; i>=0 ; i--)
// {
//     console.log(arr[i]);
    
// }

// for(i in obj)
// {
//     if(!Array.isArray(obj[i]))
//     {
//           console.log(obj[i]);
//     }
// }

// arr=[1,2,3,4,5]
// for(let i of arr)
// {
//     console.log(i);
    
// }

// arr=[1,2,3,4,5]
// for(let i in arr)
// {
//     console.log(`My index is : ${i} , My value is : ${arr[i]}`);
    
// }
// arr=[1,2,3,4,5]
// arr.forEach((a,i)=>{
//     console.log(i+" : "+a);
    
// })

// const obj={
//     name: "DEV",
//     sub:"CSE",
//     year:3
// }

// for(i in obj)
// {
//     console.log(i);
    
// }
// =========== Not Working ========================
// for(i of obj)
// {
//     console.log(i);
    
// }

// obj.forEach((i,a) => {
//     console.log(i+" "+a);
    
    
// });

// for(i=0; i<obj.length; i++)
// {
//     console.log(obj.i);
    
// }================================================

// arr=[1,2,3]
// for(i=0; i<arr.length; i++)
// {
//     console.log(typeof(i));
// }

// for(i in arr)
// {
//     console.log(typeof(i));
// }


// function print()
// {
//     console.log("hello World");
    
// }
// for(i=0; i<100; i++)
// {
//     print()

// }

// function add(a,b)
// {
//     console.log(a+b);
    
// }
// add(2,4)

// function multi(a,b)
// {
//     console.log(a*b);
    
// }
// multi(2,4)


// function div(a,b)
// {
//     console.log(a%b);
    
// }
// div(2,4)

// function sub(a,b)
// {
//     console.log(a-b);
    
// }
// sub(2,4)

// function even(a)
// {
//     if(a%2==0)
//     {
//         console.log("even");
        
//     }
//     else{
//         console.log("odd");
        
//     }
// }
// even(9)

// let a=[1,2,3,4,5]
// function evenOdd(a)
// {
//     for(let i=0; i<5; i++)
//     {
//         if(a[i]%2==0)
//         {
//             console.log(a[i]+" is even ");
            
//         }
//         else{
//             console.log(a[i]+" is odd ");
//         }

//     }

// }
// evenOdd(a)

// function isPrime(a){
//     count=0;

//     for(i=1; i<a/2; i++)
//     {
//         if(a%i==0)
//         {
//             count++;
//         }

//     }
//     if(count==1)
//     {
//         console.log(`${a} is a prime number`);
        
//     }
//     else{
//         console.log( `${a} is not a prime number`);
       
//     }
    
// }

// isPrime(2)
// let a;
// function greet(a)
// {
//     a="Hello Everyone"
//     return a;


// }
// console.log(greet(a));

// const x=function greet()
// {
//     const a="hii everyone"
//     return a
// }
// console.log(x());


// const arrFun = () =>{
//     console.log("Hello");
// }
// arrFun() 

// const arr=[1,2,true,"Rishab",5, 6,{name:"Reshab"},[7,8]]

// const fun=(arr)=>{
 
//     for (const key in arr) {
//        console.log(`type of ${arr[key]} is ${typeof(arr[key])}`);
//     }
// }
// fun(arr)


// const obj={
//     name:"Dev",
//     batch:"FSD 12"
// }

// const a=JSON.stringify(obj)
// console.log(typeof a);

// const s=JSON.parse(a)
// console.log(typeof s);

// arr1=[1,2,3,4,5]
// arr2=[6,7,8,9]
// arr3=[];
// s=arr1.length+arr2.length
// let i;
// for( i = 0; i<arr1.length; i++)
// {
//     arr3[i]=arr1[i];
// }
// let j=0;
// for( i; i<s; i++)
// {
//     arr3[i]=arr2[j]
//     j++;
// }

// console.log(arr3);

const arr=[1,2,3,4,5]

const [x,y, ...rest]=arr

console.log(rest);

obj={
    name:"dev",
    batch:"fsd12"
}

obj1={
    name:"ansh",
    batch:"fsd12"
}

const a={...obj , ...obj1}
console.log(a);
