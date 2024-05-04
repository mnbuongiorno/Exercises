//Terminó el primer semestre y Cofla no sabe si aprobará o no las materias, para lograrlo necesitará:
//90% de asistencia.
//Promedio 7/10.
//75% de los TPs entregados.

// Request data then tell approved or not
// Show in console with representative colors
// Table structure

// [asistencia, promedio, TPS]

const subjects = {
  physics: [90, 7, 4, "physics"],
  maths: [75, 6, 3, "maths"],
  programming: [100, 9, 4, "programming"],
  biology: [75, 5, 2, "biology"],
  logic: [90, 8, 4, "logic"],
  chemistry: [90, 7, 3, "chemistry"],
  philosophy: [100, 9, 4, "philosophy"],
};

const approved = () => {
  for (subject in subjects) {
    let assists = subjects[subject][0];
    let average = subjects[subject][1];
    let deliveredPW = subjects[subject][2];

    console.log(subjects[subject][3]);
    if (assists >= 90) {
      
      console.log("%c   Assists accomplished", "color:green");
    } else {
      console.log("%c   Unfulfilled assists", "color:red");
    }

    if (average >=7){
        console.log("%c   Passed average", "color:green")
    }
    else {
        console.log("%c   Failed average", "color:red")
    }
    if (deliveredPW >=3){
        console.log("%c   Delivered PW accomplished", "color: green")
    }
    else {
        console.log("%c   Unfulfilled delivered PW", "color:red")
    }
  }
};

approved()