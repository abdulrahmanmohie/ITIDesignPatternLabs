//visitor pattern is a way to add methods to an existing object withot changing the characterestics of that object through another object called visitor object using the 'accept' key and store new methods to apply as its value


function Person(name)
{
  this.name = name
}

Person.prototype = {
  getName: function()
  {
    return this.name
  },
  setName: function(nam)
  {
    this.name = nam
  },
  accept: function(visitorFunction)
  {
    visitorFunction(this)
  }
}

const newPerson = new Person("Abdo")
function AddName(per)
{
  per.setName("Mohammed")
}

newPerson.accept(AddName)
console.log(newPerson.getName())