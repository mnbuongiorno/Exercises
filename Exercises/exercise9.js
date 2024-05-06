// A pesar de que cree contar con el 90% de asistencias y tener un promedio mayor a 7/ 10, no cree llegar al 75% de los TPS entregados ya que necesita dividir las tareas que hará semanalmente. 
// Cofla debe trabajar 8 hs por dia durante 2 semanas entre las cuales tiene que: Estudiar 24 hs, hacer TPs 24 hs, trabajar 56 hs y mantener el hogar 8 hs.

//Organizar las actividades diaramente
//Utilizar la consola para organizar todo.
//El tiempo por tarea no debe superar las 4 hs.



// 30  mins por dia para las tareas del hogar.
// 100 mins tps
// 10  mins descanso
// 100 mins estudiar
// 240 mins trabajo 


let work = "Work 240 minutes";
let study = "Study 100 minutes";
let PW = "PW 100 minutes";
let homeTasks = "Home tasks 30 minutes";
let rest = "Rest 10 minutes"


console.log('Tasks');

for (let i = 0; i < 14; i++){
    if (i == 0) {
        console.groupCollapsed("Week 1")
    }
    console.group('Day '+ (i+1));
    console.log(work);
    console.log(rest);
    console.log(study);
    console.log(PW);
    console.log(homeTasks);
    console.groupEnd();
    if (i == 7){
            console.groupEnd();
            console.groupCollapsed("Week 2")
    }
}

console.groupEnd();
console.groupEnd();


