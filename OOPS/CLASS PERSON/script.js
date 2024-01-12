class Person{
    constructor(firstname,lastname,Dob,location)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.Dob = Dob;
        this.location = location;
    }
}
var person1 = new Person("Vanitha", "Bharath Kumar", "20-03-2002" , "Thiruvallur");
var person2 = new Person("Rishi", "Bharath", "14-04-2001" , "chennai");
var person3 = new Person("Anu", "Rishi", "23-10-2002" , "chennai");
var person4 = new Person("Mohana", "Partha Sarathi", "24-08-1979" , "Tondaiyarpet");
var person5 = new Person("Keerthika", "Praveen", "20-09-2000" , "perambur");

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.Dob);
console.log(person1.location);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.Dob);
console.log(person2.location);

console.log(person3.firstname);
console.log(person3.lastname);
console.log(person3.Dob);
console.log(person3.location);

console.log(person4.firstname);
console.log(person4.lastname);
console.log(person4.Dob);
console.log(person4.location);

console.log(person5.firstname);
console.log(person5.lastname);
console.log(person5.Dob);
console.log(person5.location);

console.log(`All the Person Names are "person1" : ${person1.firstname}
"person2":${person2.firstname}
"person3":${person3.firstname}
"person4":${person4.firstname}
"person5":${person5.firstname}`)