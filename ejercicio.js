// Alumnos presentes y ausentes (p, a)
// Registro mensual final de p y a
// Maximo 10 % de A por semestre

let quantity = prompt("How many students are?");
let totalStudents = [];

for (i = 0; i < quantity; i++) {
  totalStudents[i] = [prompt("Student name " + (i + 1)), 0];
}

const presenteeism = (name, p) => {
  let present = prompt(name);
  if (present == "p" || present == "P") {
    totalStudents[p][1]++;
  }
};

for (i = 0; i < 30; i++) {
  for (student in totalStudents) {
    presenteeism(totalStudents[student][0], student);
  }
}


for (student in totalStudents) {
    let result = `${totalStudents[student][0]}:<br>
    ______Assistance: ${totalStudents[student][1]} <br>
    ______Absence: ${30 - totalStudents[student][1]}
    `;
    if (30 - totalStudents[student][1] > 18){
        result+= "Failed for non-attendance <br>";
    } else {
        resultado+="<br><br>"
    }
    document.write(result)
}