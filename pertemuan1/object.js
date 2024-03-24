// Membuat object : {}

const user = {
    name: "ucup",
    age: 20,
    major: "Web Development",
};

///mengakses nilai
console.log(user.name);

// caa kedua tapi primitif, lebih baik yang pertama
console.log(user["age"]);

//looping object menggunakan for in (kalau for in tidak bisa pakai cara ke-1)
for (const key in user) console.log(user[key]);