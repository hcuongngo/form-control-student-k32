let students = getStudentsFromLocalStorage() || [];
renderStudents(students);

const addNewStudent = () => {
  let newStudent = getStudentInfo();
  console.log("newStudent", newStudent)
  students.push(newStudent)
  setStudentsToLocalStorage(students)
  console.log("students", students)
  renderStudents(students)
  document.getElementById("form-control-student").reset();
}

const resetStudents = () => {
  students = [];
  localStorage.removeItem("students")
  renderStudents(students)
}

const updateStudent = () => {
  console.log("update student")

  // sau khi edit => bam button update student
  // render ra thong tin moi duoc update
  // clear all field in form
  // save updated student xuong local storage
}
