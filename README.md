# New-Compass-Website---Django
Breakdown:

Figma: 

https://www.figma.com/file/p1K0abrtoNepqqQ8O3YWQj/Compass-Rebranding-Plan?node-id=0%3A1 


Frontend:
We can start the project with a minimum frontend (like just <h1>home page</h1>) and finish the frontend when the backend is finished and redy to go.


Backend:

Sign up form
Database, tutors profiles
Log in form
Flask
Heroku

Tutors Profiles:
name, subjects, contact info, price, time-zone, pronouns, description, status,  reviews, 

Tutors Profile Example



Question: What information do you want to collect from the tutors and from the students(for the database)?
tutor:
name
email
phone number
account type(tutor/student/admin/dveloper)
number of days availble for tutoring
number of students/subjects they can tutor at a time
tutoring experience 1-10
Are they high school students/university students/ employees?
most recent transcript (if they are a student)
resume (if they are an employee and etc)
subjects they want to tutor (math/english/french/sciences/cs)
time zone (they can choose from what we give them)
image (for portolio)
personality (optional)
if they can do group or individual lessons or both
	students:
General Registration (making an account):
student name
student email
parent name
parent email
student grade
school (optional)
time zone
personality (optional)
Tutoring Session Registration:
number of lessons per month and week
subjects (2 max)
if they prefer group or individual lessons
consent form (just a checkmark)
Free 30-Minute Assessment Registration (usually happens before tutoring session registration):
question
date that works for them
consent that both parent and student will attend (check mark)
	admin:
For admin we can provide team members including devs with username and passwords, so that we don’t have random people loging in.
We can manually add team members, so that they will only be required to log in.
Log in:
username
password

How do we want to use payments? 
Student will be need to receive an invoice with payment after the first free lesson (the first lesson with the tutor is always free):
Maybe the invoice could appear in the dashboard + they could be send an automatic email (somehow)
In their dashboard, they will be able to complete a payment. There could be a button that will lead to a page that will indicate how much they will have to pay and they will pay.
We could connect to Stripe to do this.
Tutors will be paid halfway through their tutoring session (if the student registered for 8 lessons in 2 months, they will be paid after each 4 lessons)
Bronze Status Tutors: 25% commission 
Silver Status Tutors: 15% commission
Gold Status Tutors: 10% commission
Emirals Status Tutors: 5% commission
When it’s time for payment, tutor could compelte a form to request payment. We could make an algorithm that would check their hours and if it is actually time for payment. In the case that it is, Stripe will pay them from the company’s account.
Tutors would have to setup an account on Stripe through the platform so that they are paid automatically. 

models stored in the database:
Users
Tutors
Students
Admin
Developer (i personally don’t think we need developers, we could just all use admin) (I will explain the admin user idea later, it is an important role for future dvelopnets for the website)
Tutors(Inherites from user)
Students(Inherites from users)
Classes (Inherites from tutors and students)
Science
Math
English
…
Payments Logs
Payment Information(Inherites from users) **Might be a bit risky
You should never store payment information details in a database, because any database breach would mean that whoever got the database now also has everyone who’s provided the details money
**if we use stripe, then technically we won’t have to store any payment info, cuase that will be on Stripe’s side. I can demonstrate that when we meet next time.
What if we use mongodb atlas as our backend server?(I will explain it later)

For Mariya: I will develop a booklet with the business plan for Compass rebranding. It will also be posted on the new website. Some companies do that to attract investors.

Website structure:
(base.html)
/home (home.html {Inherits from base.html})
/about-us (about_us.html  {Inherits from base.html})
/sign-up (sign_up.html  {Inherits from base.html})
/sign-in (sign_in.html  {Inherits from base.html})
/logout (redirects to “/home”)
/profile (profile.html  {Inherits from base.html}):
/tutor (tutor_profile.html  {Inherits from profile.html})
/student (student_profile.html  {Inherits from profile.html})
/find-tutor (find-tutor.html {Inherits from base.html})
/payment (payment.html  {Inherits from base.html}) 
