function checkGrade() {
    const score = document.getElementById("score").value; // Get the score from input
    let grade;

    if (score >= 95) {
      grade = "A+";
    } else if (score >= 90) {
      grade = "A";
    } else if (score >= 80) {
      grade = "B";
    } else if (score >= 70) {
      grade = "C";
    } else if (score >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }

    document.getElementById("result").textContent = `Your grade is: ${grade}`; // Display result
  }

