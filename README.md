# [Course Registration](https://boisterous-donut-f3c513.netlify.app)

# The Features are:

* **Select Any Courses:** You can select any courses from this website anytime.
* **Select Courses upto 20 credit:** You can select any courses upto 20 credit.this website won't allow to more than 20 credit.
* **Show Warning for duplicate Course:** If you want to add any duplicate course,the website won't allow on that.It reply a warning with a toast.
* **Show warning for more than 20 credit** This website won't allow to add more than 20 credit.It reply a warning with a toast.
* **Calculate total money:** This site will automatically calculate the many needed for selecting courses.


# How I managed the state in my assignment project:
- Declare a useState 'Courses' for all courses with an empty array.
- Take data from useEffect and set into courses.
- Create main component and divide into two part: 
   (1) Cards section 
   (2) Carts Section.
- Pass the Courses data to the Cards Component and set into Cards
- Showed every courses into the Cards section and handle the selecting button Event.
- Declare another useState 'selectedCourse' for selecting courses.
- Select courses and pass them into selectCourse by event handling
- Pass those selecting data to the Cart component and display selecting courses.
- Calculate Total price,total credit and Remaining credit from selecting courses and display those.
veral sections: