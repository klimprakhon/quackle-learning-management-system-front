import { useRef, useState } from "react";
import Button from "../../../components/Button";
import UploadImageIcon from "../../../icons/UploadImage.svg";
import enrollmentApi from "../../../APIs/enrollment";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function PaymentConfirmForm({ studentId, courseId, setLoading }) {
  const navigate = useNavigate();
  const fileItem = useRef();
  const [file, setFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);

      // Set the file state
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);

      if (!file) {
        toast.error("Please select a file to upload.");
        setLoading(false);
        return;
      }

      // create FormData object
      const formData = new FormData();
      formData.append("courseId", courseId);
      formData.append("studentId", studentId);
      formData.append("paymentSlip", file);

      // send data to backend
      await enrollmentApi.createEnrollment(formData);

      // console.log("Payment confirmation submitted:", response.data);

      toast.success(
        "Payment confirmation submitted. It will take 2-3 days for processing."
      );

      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setFile(null);
      setLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center gap-3"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center items-center">
        <label className="bg-green-100 text-green-800 hover:bg-green-200 px-3 py-2 rounded-lg text-sm font-semibold flex w-fit justify-center items-center gap-1">
          <input
            type="file"
            className="hidden w-10"
            ref={fileItem}
            onChange={handleFileChange}
          />
          Upload Payment Slip
          <img src={UploadImageIcon} className="size-5" />
        </label>
      </div>
      {previewImage ? (
        <div className="flex flex-col justify-center items-center gap-2">
          <h3>Preview:</h3>
          <img
            src={previewImage}
            alt="Payment Slip Preview"
            className="w-[250px] h-[300px]"
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-2">
          <h3>Preview:</h3>
          <img
            src="https://placehold.co/250x300"
            alt="Placeholder Image"
            className="placeholder-image"
          />
          <p>Upload your payment slip to see the preview here</p>
        </div>
      )}

      <Button title="Submit Payment Confirmation" type="submit" width="50" />
    </form>
  );
}

export default PaymentConfirmForm;
