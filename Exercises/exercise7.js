// crear una funcion para preguntarle a cofla en que materias se quiere inscribir
// si ya hay 20 alumnos inscriptos en la materia, negarle la inscripcion.
// si hay menos de 20 alumnos, inscribir a cofla y añadirlo a la lista de alumnos

let subjects = {
  physics: ["Williams", "Peter", "Louis", "Cofla", "Marie"],
  programming: ["Buongiorno", "Peter", "John", "Louis"],
  logic: ["Lopez", "Peter", "John", "Louis", "Cofla", "Marie"],
  chemistry: ["Bogado", "Peter", "John", "Louis", "Cofla", "Marie"],
};


const enroll = (student,subject) =>{
    let totalPeople = subjects[subject];
    if (totalPeople.length >= 21) {
        document.write(`<br>I'm sorry <b>${student}</b>, <b>${subject}</b> classes already full <br>`)
    } else {
        totalPeople.push(student)
        if (subject == "physics") {
            subjects = {
                physics: totalPeople,
                programming: subjects['programming'],
                logic: subjects['logic'],
                chemistry: subjects['chemistry']
            }
        }
        else if (subject == "programming") {
            subjects = {
                physics: subjects['physics'],
                programming: totalPeople,
                logic: subjects['logic'],
                chemistry: subjects['chemistry'],
            }
        }
        else if (subject == "logic") {
            subjects = {
                physics: subjects['physics'],
                programming: subjects['programming'],
                logic: totalPeople,
                chemistry: subjects['chemistry'],
            }
        }
        else if (subject == "chemistry") {
            subjects = {
                physics: subjects['physics'],
                programming: subjects['programming'],
                logic: subjects['logic'],
                chemistry: totalPeople,
            }
        }
        document.write(`<br>Congratulations <b>${student}</b>! You enrolled to <b>${subject}</b> <br>`)
    }
}

document.write(subjects['programming'])

enroll("Ned", "programming")

document.write(subjects['programming'])