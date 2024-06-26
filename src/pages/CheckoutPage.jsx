import HeroImage from "../assets/hero-image.jpeg";
import Input from "../components/Input";
import useAuth from "../hooks/useAuth";

import MasterCardIcon from "../assets/mastercard.svg";
import VisaIcon from "../assets/visa.svg";
import UnionPayIcon from "../assets/unionpay.svg";
import JCBIcon from "../assets/jcb.svg";
import PromptPayIcon from "../assets/promptpay.svg";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import courseApi from "../APIs/course";
import { useNavigate, useParams } from "react-router-dom";

function CheckoutPage() {
  const { authUser } = useAuth();
  const { courseId } = useParams();
  const navigate = useNavigate();

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

  const handleCheckout = () => {
    navigate(`/payment/${courseId}`);
  };

  return (
    <div className="py-20 px-36 flex flex-col gap-6">
      <h1 className="text-4xl font-bold">Checkout</h1>
      <div className="flex gap-8 w-10/12border border-red-400">
        <div className="bg-slate-100 p-8 pr-12 rounded-xl flex flex-col gap-6 w-3/5">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold border-l-8 border-green-600 p-2">
              Your Cart
            </h2>
            <div className="flex gap-6 px-4">
              <div>
                <img
                  src={info?.coverImage}
                  className="min-w-[200px] h-[120px] object-cover rounded-lg"
                />
              </div>
              <div className="flex w-full justify-between">
                <p className="text-xl font-bold">{info?.courseTitle}</p>
                <p>{info?.price} THB</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold border-l-8 border-green-600 p-2">
              Contact Detail
            </h2>
            <div className="flex flex-col gap-3 px-4">
              <div className="flex gap-4">
                <div className="w-full">
                  <h2 className="text-lg font-semibold">First Name: </h2>
                  <span className="text-md">{authUser.firstName}</span>
                </div>
                <div className="w-full">
                  <h2 className="text-lg font-semibold">Last Name:</h2>
                  <span className="text-md">{authUser.lastName}</span>
                </div>
              </div>
              <div>
                <div className="w-full">
                  <h2 className="text-lg font-semibold">Email: </h2>
                  <span className="text-md">{authUser.email}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold border-l-8 border-green-600 p-2">
              Payment Method
            </h2>
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-xl border-2 border-slate-300 p-6 w-3/5 flex gap-4">
                <input
                  type="radio"
                  id="credit-card"
                  name="payment-method"
                  disabled
                />
                <div>
                  <label htmlFor="credit-card">Pay with Credit Card</label>
                  <div className="flex gap-2">
                    <img
                      src={MasterCardIcon}
                      alt="Master Card"
                      className="w-16"
                    />
                    <img src={VisaIcon} alt="Visa" className="w-16" />
                    <img src={UnionPayIcon} alt="Union Pay" className="w-16" />
                    <img src={JCBIcon} alt="JCB" className="w-16" />
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border-2 border-slate-300 p-6 w-3/5 flex gap-4">
                <input
                  type="radio"
                  id="promptpay"
                  name="payment-method"
                  defaultChecked
                />
                <div>
                  <label htmlFor="promptpay">
                    Pay with PromtPay &#40;QR Code&#41;
                  </label>
                  <img src={PromptPayIcon} alt="Prompt Pay" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-6 rounded-xl flex flex-col gap-6 w-2/5 h-fit">
          <div>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-semibold border-l-8 border-green-600 p-2">
                Order Summary
              </h2>
              <div className="flex justify-between font-thin px-2">
                <p>Subtotal</p>
                <span>{info?.price} THB</span>
              </div>
              <div className="flex justify-between font-thin px-2 mb-2">
                <p>Discount</p>
                <span>0 THB</span>
              </div>
            </div>
            <hr className="border border-slate-300" />
            <div className="flex justify-between font-semibold text-xl px-2 mt-2">
              <h4>Total</h4>
              <span>{info?.price} THB</span>
            </div>
          </div>
          <div>
            <Button
              title="Checkout"
              level="extreme"
              icon
              onClick={handleCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
