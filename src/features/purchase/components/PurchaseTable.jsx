import { useEffect, useState } from "react";
import enrollmentApi from "../../../APIs/enrollment";

function PurchaseTable() {
  const [enrollments, setEnrollments] = useState([]);
  const [openIndex, setOpenIndex] = useState(-1);

  useEffect(() => {
    const fetchAllEnrollments = async () => {
      const response = await enrollmentApi.getAllEnrollment();
      const allEnrollments = response.data;
      setEnrollments(allEnrollments);
    };
    fetchAllEnrollments();
  }, []);

  const handleOpen = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  const handleChangeStatus = async (enrollmentId, status) => {
    try {
      const response = await enrollmentApi.updateStatus({
        enrollmentId,
        status,
      });
      const updatedEnrollmentStatus = response.data;

      const updatedEnrollments = enrollments.map((enrollment) => {
        if (enrollment.id === enrollmentId) {
          return {
            ...enrollment,
            status: updatedEnrollmentStatus.status,
          };
        }
        return enrollment;
      });

      setEnrollments(updatedEnrollments);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="rounded-xl border mt-6">
      <div className="grid grid-cols-5 bg-slate-200 p-4 ">
        <span>Enroll ID</span>
        <span> Course ID</span>
        <span>Status</span>
        <span>Student Name</span>
        <span>Payment Slip</span>
      </div>
      {enrollments.map((enrollment, index) => {
        return (
          <div key={enrollment.id} className="grid grid-cols-5 bg-white p-4">
            <span>{enrollment.id}</span>
            <span>{enrollment.courseId}</span>
            <div>
              {enrollment.status === "PENDING" ? (
                <button
                  className="p-2 relative border border-yellow-500 rounded-xl bg-yellow-100 hover:font-semibold"
                  onClick={() => handleOpen(index)}
                >
                  {enrollment.status}
                </button>
              ) : enrollment.status === "ENROLLED" ? (
                <button
                  className="bg-green-300 relative rounded-xl p-2 border-green-700 hover:font-semibold"
                  onClick={() => handleOpen(index)}
                >
                  {enrollment.status}
                </button>
              ) : (
                <button
                  className="bg-red-300 relative rounded-xl p-2 border-red-700 hover:font-semibold"
                  onClick={() => handleOpen(index)}
                >
                  {enrollment.status}
                </button>
              )}

              {openIndex === index && (
                <div className="bg-slate-50 absolute p-2 rounded-md flex flex-col gap-1">
                  <option
                    className="hover:font-semibold cursor-pointer"
                    value="PENDING"
                    onClick={() => {
                      handleChangeStatus(enrollment.id, "PENDING");
                      setOpenIndex(-1);
                    }}
                  >
                    PENDING
                  </option>
                  <option
                    className="hover:font-semibold cursor-pointer"
                    value="CANCELED"
                    onClick={() => {
                      handleChangeStatus(enrollment.id, "CANCELED");
                      setOpenIndex(-1);
                    }}
                  >
                    CANCELED
                  </option>
                  <option
                    className="hover:font-semibold cursor-pointer"
                    value="ENROLLED"
                    onClick={() => {
                      handleChangeStatus(enrollment.id, "ENROLLED");
                      setOpenIndex(-1);
                    }}
                  >
                    ENROLLED
                  </option>
                </div>
              )}
            </div>
            <span>
              {enrollment.student.firstName} {enrollment.student.lastName}
            </span>
            <img src={enrollment.paymentSlip} className="w-[200px] h-[260px]" />
          </div>
        );
      })}
      <div></div>
    </div>
  );
}

export default PurchaseTable;
