# Course Registration


# The Features available for Course Registration Project are:
  ## 1. Select Courses:
   - You can select any courses from this website
  ## 2. Select Courses upto 20 credit
   - Show how many credit are selected and credit remaining.
  ## 3. Show Warning for duplicate Course
   - Don't allow to select multiple courses.
  ## 4. Show warning for more than 20 credit
   - Don't allow to assign more than 20 credits.
  ## 5. Calculate total money
   - Have total price needed for selecting courses.

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