Before starting make sure to do npm init -y and install express, body-parser 

Survey should have 10 questions for you to choose. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.
Determine the user's most compatible friend using the following as a guide:
Convert each user's results into a simple array of numbers 
Compared the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.


Example: 


User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5
 
The closest match will be the user with the least amount of difference.

Once found the current user's most compatible friend, display the result as a modal pop-up.
 
 The modal should display both the name and picture of the closest match.
