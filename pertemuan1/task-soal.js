const users = [
  { name: "Alice", age: 25, jurusan: "Informatika" },
  { name: "Bob", age: 22, jurusan: "Fisika" },
  { name: "Charlie", age: 21, jurusan: "Matematika" }, 
  { name: "David", age: 20, jurusan: "Kimia" }, 
  { name: "Eva", age: 19, jurusan: "Biologi" }, 
];

const all = () => {
  for (const user of users) {
    console.log(user);
  }
};

const store = (user) => {
  users.push(user);
  console.log;
  all();
};

const update = (index, user) => {
  users[index] = user;
  console.log;
  all();
};

const destroy = (index) => {
  users.splice(index, 1);
  console.log;
  all();
};

const main = () => {
  console.log("# Get All Users");
  all();

  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    jurusan: "Informatika" 
  };
  store(newUser);

  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    jurusan: "Bahasa Inggris" 
  };
  update(editedIndex, editedUser);

  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

module.exports = { users, all, store, update, destroy };
