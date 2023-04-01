# JavaScript Objects

## Learning Objectives

1. Create objects
2. Accessing object properties and values
3. Being able to use multiple object operators or methods
4. Being able to use some powerful array functions

### What is JavaScript Object?

- are used to store keyed collections of various data and more complex entities.

### How do we create JavaScript Object?

` // "object literal" syntax
  const person = {};
  // "object constructor" syntax
  const person = new Object();`

1. `{...}` - objects are enclosed with curly braces
2. `{key: "value"}` - we just don't store data like an array, we need a key-value pair

ex. create a new object that defines a user

`const user = {
  name: "John",
  age: 30
};`

ex. create a new object that defines an animal

`const animal = {
  type: "dog",
  color: "brown",
  breed: "Golden Retriever"
  age: 5,
  isFriendly: true,
  food: ["dog food", "meat", "fish", "vegetable"],
  bark: function() {
    console.log("arf");
  }
};`

### How do we access JavaScript Objects properties and values

- By calling the object follow up with a dot (.) and the name of the key/property
  ex. `animal.type` => "dog"

### How do we change the value of a key/property in an object?

- By calling the object follow up with a bracket (`[]`) and the name of the key/property
  ex. `animal["age"] = 6`

### How do we delete keys/values in an object?

- By using the `delete` operator

  ex. `delete animal.bark`
