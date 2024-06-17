import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import courseApi from "../APIs/course";
import QRCode from "../assets/test-qrcode.png";
import PaymentConfirmForm from "../features/payment/components/PaymentConfirmForm";

function PaymentPage() {
  const { courseId } = useParams();
  const { authUser } = useAuth();

  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchCourseInfo = async () => {
      try {
        const response = await courseApi.getCourse(courseId);
        const { courseInfo } = response.data;
        setInfo(courseInfo);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourseInfo();
  }, [courseId]);

  return (
    <div className="flex justify-center py-10 gap-24">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl">Payment Confirmation for:</h2>
          <span className="text-2xl font-semibold">
            {info.courseTitle}: {info.subtitle}
          </span>
        </div>
        <div className="w-[300px] h-[300px]">
          <img src={QRCode} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="text-xl font-semibold">Upload Payment Confirmation</h2>
        <PaymentConfirmForm studentId={authUser?.id} courseId={courseId} />
      </div>
    </div>
  );
}

export default PaymentPage;
