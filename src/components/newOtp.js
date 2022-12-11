import React, { useState } from "react";
import OTPInput, {  } from "otp-input-react";

function NewOtp(params) {
  const [OTP, setOTP] = useState("");
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="text-center">
            <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false}  />
          </div>
          {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
        </div>
      </div>
    </div>
  )
}

export default NewOtp;