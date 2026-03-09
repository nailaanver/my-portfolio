import collegeImg from "../assets/images/college.jpeg";
import ecommerseImg from "../assets/images/cohous.jpeg";
import bloodImg from "../assets/images/blood.jpeg";
import hostelImg from "../assets/images/hostel.jpeg";
import courseImg from "../assets/images/course.jpeg";
import portfolioImg from "../assets/images/3D-portfolio.jpeg";

const projects = [
  {
    title: "ACADAMICS",
    category: "College Management System",
    stack: ["Python", "Django", "HTML", "CSS"],
    image: collegeImg,
    demo: "https://college-project-pfpb.onrender.com",
    code: "https://github.com/nailaanver/college_project"
  },
  {
    title: "COHOUS",
    category: "E-commerse",
    stack: ["React"],
    image: ecommerseImg,
    demo: "https://e-commerce-app-new-mu.vercel.app/",
    code: "https://github.com/nailaanver/e-commerce-app"
  },
  {
    title: "LifeDrop",
    category: "Blood Bank Management System",
    stack: ["Python", "Django", "HTML", "CSS"],
    image: bloodImg,
    demo: "https://blood-bank-management-system-9pjk.onrender.com/",
    code: "https://github.com/nailaanver/blood_bank_management_system"
  },
  {
    title: "StayTrack",
    category: "Hostel Allocation System",
    stack: ["Python", "Django", "HTML", "CSS"],
    image: hostelImg,
    demo: "https://college-project-pfpb.onrender.com",
    code: "https://github.com/nailaanver/college_project"
  },
  {
    title: "CourseGate",
    category: "Course Registration Platform",
    stack: ["Python", "Django", "HTML", "CSS"],
    image: courseImg,
    demo: "https://course-registration-1.onrender.com",
    code: "https://github.com/nailaanver/course_registration"
  },
  {
    title: "3D-Portfolio",
    category: "Portfolio",
    stack: ["React", "Tailwind CSS"],
    image: portfolioImg,
    demo: "https://3-d-portfolio-jet-eight.vercel.app/",
    code: "https://github.com/nailaanver/3D-portfolio"
  },
];

export default projects;