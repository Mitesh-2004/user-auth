import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otpStatus, setOtpStatus] = useState(false);

  async function sendOtp(e) {
    e.preventDefault();
    try {
      setOtpStatus(true);
      console.log("OTP sent");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {!otpStatus ? (
        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" onClick={sendOtp}>
            Get OTP
          </button>
        </form>
      ) : (
        <form>
          <input type="text" placeholder="Enter OTP" />
          <button type="button">Verify OTP</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
