// - crear una funcion que al pasarle como parametro la materia nos devuelva
// el profesor asignado
// el nombre de todos los alumnos
// - crear funcion que nos diga en cuantas clases está cofla
// nombrar las clases en las que está y los profesores de cada una.

const getInfo = (subject) => {
  subjects = {
    physics: ["Williams", "Peter", "Louis", "Cofla", "Marie"],
    programming: ["Buongiorno", "Peter", "John", "Louis"],
    logic: ["Lopez", "Peter", "John", "Louis", "Cofla", "Marie"],
    chemistry: ["Bogado", "Peter", "John", "Louis", "Cofla", "Marie"],
  };
  if (subjects[subject] !== undefined) {
    return [subjects[subject], subject, subjects];
  } else {
    return subjects;
  }
};

const showInfo = (subject)=>{
    let info = getInfo(subject);

if (info !== false) {
  let teacher = info[0][0];
  students = info[0];
  students.shift();
  document.write(`The teacher of ${info[1]} is ${teacher}.
    The students are: ${students}<br><br>`);
}

}

showInfo("physics")
showInfo("programming")
showInfo("logic")
showInfo("chemistry")


const numberOfClasses = (student) => {
    let information = getInfo();
    let presentClasses = [];
    let totalClasses = 0;
    for (info in information){
        if (information[info].includes(student)){
            totalClasses++;
            presentClasses.push(" " + info);
        }
    }
    return ` ${student} is in ${totalClasses} classes: ${presentClasses} <br>
    `;
} 

document.write(numberOfClasses("Marie"))
document.write(numberOfClasses("Cofla"))