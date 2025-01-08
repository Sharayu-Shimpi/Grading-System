# Grading-System
The Grading System allows users to input their score and instantly see the grade. Based on predefined ranges, scores 90+ get an A, 80-89 get a B, 70-79 get a C, 60-69 get a D, and below 60 gets an F. This simple tool gives quick feedback, making it easy to assess performance in a clear, user-friendly way.
Create the Basic HTML Structure

Let's start with the HTML file to build the foundation of the Grading System.

✅ What to add in the HTML:
An input field for entering the student's score.
A button to check the grade.
A paragraph element to display the result.

👉 Explanation:
The input field lets the user enter their score.
The button will trigger a JavaScript function to check the grade.
The paragraph (<p>) element will display the result (like "Your grade is A").

✅ Step 2: Apply CSS to Style the Grading System
Now, let’s make the Grading System look better by adding some CSS to style the input field, button, and result display.

🎨 What to style:
The input field and button should be in one line.
The heading (h1) should be centered.
The result text should look clear and stand out.

👉 What the CSS does:
Centers everything on the page.
Styles the input field and button to look clean and modern.
Changes the button color when you hover over it.
Styles the result text to make it more readable.

✅ Step 3: Write the JavaScript Code for Grading System
Now, let's write the JavaScript logic to make the Grading System functional. The JavaScript will:
Take the score input from the user.
Check the score using if-else conditions to determine the grade.
Display the grade result dynamically.

🧩 Explanation:
document.getElementById("score").value: Gets the score entered by the user.
If-else conditions: Compares the score with different ranges and assigns a grade.
document.getElementById("result").textContent: Displays the grade result dynamically on the webpage.





