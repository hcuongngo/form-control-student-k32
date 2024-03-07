const getStudentInfo = () => {
  let studentId = document.getElementById("student-id").value
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let math = document.getElementById("math").value;
  let physic = document.getElementById("physic").value;
  let chemical = document.getElementById("chemical").value;

  let newStudent = new Student(studentId, name, email, math, physic, chemical);
  return newStudent;
}

const editStudent = () => {
  console.log("edit student")

  // edit student: bam vo button edit -> parse student info on form
  // input id disabled => ko edit id
}

const deleteStudent = () => {
  console.log("delete student")

  // kiem tra student nao dang duoc click button delete => xoa student khoi array students
}

const renderStudents = (students) => {
  let contentHTML = "";
  for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];
    let contentTr = `
      <tr>
        <td>${currentStudent.id}</td>
        <td>${currentStudent.name}</td>
        <td>${currentStudent.email}</td>
        <td>${(Number(currentStudent.math) + Number(currentStudent.physic) + Number(currentStudent.chemical)) / 3}</td>
        <td>
          <button onClick="editStudent()">Sua</button>
          <button onClick="deleteStudent()" style="background-color:red;">Xoa</button>
        </td>
      </tr>
    `
    contentHTML += contentTr;
  }
  document.getElementById("table-body").innerHTML = contentHTML
}

const setStudentsToLocalStorage = (students) => {
  let jsonStudents = JSON.stringify(students);
  localStorage.setItem("students", jsonStudents)
}

const getStudentsFromLocalStorage = () => {
  let jsonStudents = localStorage.getItem("students");
  return JSON.parse(jsonStudents);
}