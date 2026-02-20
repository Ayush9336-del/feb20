In this assignment, I created backend API endpoints using Next.js. Instead of using a separate backend like Express, I used Next.js API routes to build full-stack functionality inside the same project.

First, I created a data.json file in the root directory. This file acts like a small database and stores two main collections: teachers and students.

I then created an API endpoint to fetch all teachers. This endpoint reads data from the JSON file using the Node.js file system module and returns the teachers list in JSON format.

After that, I created another API endpoint to fetch all students in a similar way.

Next, I implemented a dynamic API route to fetch students under a specific teacher. For this, I added a teacherId field to each student in the JSON file to establish a relationship between teachers and students. Then I filtered the students based on the teacher ID passed in the URL.

I also created a POST API endpoint to add a new teacher to the list. This endpoint accepts teacher details from the request body, generates a new ID, pushes the new teacher into the teachers array, and updates the JSON file.