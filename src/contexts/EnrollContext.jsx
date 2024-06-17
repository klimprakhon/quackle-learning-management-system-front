import { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import enrollmentApi from "../APIs/enrollment";

export const EnrollContext = createContext();

function EnrollContextProvider({ children }) {
  const { authUser } = useAuth();
  const [enrollments, setEnrollments] = useState([]);
  const [isEnrollmentsLoading, setIsEnrollmentLoading] = useState(false);

  useEffect(() => {
    const fetchEnrollments = async () => {
      if (!authUser) return;
      try {
        setIsEnrollmentLoading(true);
        const studentId = authUser.id;
        const response = await enrollmentApi.checkEnrollment(studentId);
        // console.log(response.data);
        setEnrollments(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEnrollments();
  }, [authUser]);

  const checkEnrollment = (courseId) => {
    return enrollments.some((enrollment) => {
      return enrollment.courseId === courseId;
    });
  };

  return (
    <EnrollContext.Provider
      value={{ enrollments, setEnrollments, checkEnrollment }}
    >
      {children}
    </EnrollContext.Provider>
  );
}

export default EnrollContextProvider;
