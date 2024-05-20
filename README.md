MEDIFY - Medical Center Slot Booking Platform

Project Overview:- 
MEDIFY is a React-based web application designed to help users find medical centers in specific states and cities across the USA and book appointments. This platform allows users to search for medical centers, view available appointment slots, and manage their bookings through a responsive and user-friendly interface.

Key Features:-

1. Landing Page
Top Navigation Bar: Access sections like Find Doctors, Hospitals, Medicines, etc.
Search Section: Users can select a state and city from dropdowns to view available medical centers.

2. Responsive Design: Fully responsive layout adhering to the provided Figma design.
Carousels: Implemented using the Swiper library.

3. Search Results Page

4. Medical Center Listings: Display available medical centers in the selected location with options to book appointments.

5. Booking Interface

6. Detailed Booking Section: Allows users to select a medical center and choose an appointment date from a calendar.
Appointment Slots: Users can book appointments within a timeframe from today up to one week in advance.

7. My Bookings Page
Personalized Bookings: Displays all user bookings with details like medical center name, appointment date, and time.

API Endpoints:- 
Get list of all states: https://meddata-backend.onrender.com/states

Get list of all cities for a state: https://meddata-backend.onrender.com/cities/:state (e.g., https://meddata-backend.onrender.com/cities/Alaska)

Get list of all medical centers based on state and city: https://meddata-backend.onrender.com/data?state=<state-name>&city=<city-name> (e.g., https://meddata-backend.onrender.com/data?state=Alaska&city=SOLDOTNA)

Local Setup and Deployment:- 
Prerequisites
Node.js
npm or yarn

Deployment:-
The application is deployed on Vercel. You can view the live version at: ""

Technologies Used
React: Front-end library for building user interfaces
Axios: For making API requests
Swiper: For implementing carousels
Material-UI (MUI): For UI components and styling
LocalStorage: To persist user data
Vercel: For deployment

Contributions:-
Feel free to submit pull requests or report issues. Contributions are welcome!
