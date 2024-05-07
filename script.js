// Function to add input fields for each course
function addCourseInputs() {
  var numCourses = document.getElementById("numCourses").value;
  var courseInputsDiv = document.getElementById("courseInputs");
  courseInputsDiv.innerHTML = "";

  for (var i = 0; i < numCourses; i++) {
    var label = document.createElement("label");
    label.textContent = "Course " + (i + 1) + ": ";
    var input = document.createElement("input");
    input.type = "text";
    input.id = "course" + (i + 1);
    courseInputsDiv.appendChild(label);
    courseInputsDiv.appendChild(input);
    courseInputsDiv.appendChild(document.createElement("br"));
  }
}

// Function for calculating grades
const calculate = () => {
  var numCourses = document.getElementById("numCourses").value;
  var totalgrades = 0;

  for (var i = 0; i < numCourses; i++) {
    var courseInput = document.getElementById("course" + (i + 1)).value;
    totalgrades += parseFloat(courseInput) || 0;
  }

  var percentage = (totalgrades / (numCourses * 100)) * 100;
  var grades = "";

  if (percentage <= 100 && percentage >= 80) {
    grades = "A";
  } else if (percentage <= 79 && percentage >= 60) {
    grades = "B";
  } else if (percentage <= 59 && percentage >= 40) {
    grades = "C";
  } else {
    grades = "F";
  }

  var showdata = document.getElementById("showdata");
  if (totalgrades === 0) {
    showdata.innerHTML = "Please enter grades for all courses.";
  } else {
    if (percentage >= 39.5) {
      showdata.innerHTML = `Out of ${numCourses * 100} your total is ${totalgrades} and percentage is ${percentage.toFixed(2)}%.<br>Your grade is ${grades}. You are Pass.`;
    } else {
      showdata.innerHTML = `Out of ${numCourses * 100} your total is ${totalgrades} and percentage is ${percentage.toFixed(2)}%.<br>Your grade is ${grades}. You are Fail.`;
    }
  }
};
