import { useState } from 'react';

function LoginInput() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
        <div className="bg-white rounded-3 shadow-lg p-3 mt-4">
          <div className=" rounded-3 p-4">
              {/* style="box-shadow: rgba(59, 60, 61, 0.07) 0px 2px 10px 0px;" */}
            <div className="mb-3">
              <div className="input-float ">
                <input type="text" className="bg-light border-0 rounded-3" placeholder="Phone/Email" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                <label>Phone/Email<span className="text-danger">*</span></label>
                <p className="mb-0"></p>
                  {/* style="font-size: 12px; margin-left: 16px; color: red;" */}
              </div>
            </div>
            <div className="position-relative">
              <div className="input-float">
                <input type="password" className="bg-light border-0 rounded-3" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                <label>Password<span className="text-danger">*</span></label>
                <p className="mb-0"></p>
                  {/* style="font-size: 12px; margin-left: 16px; color: red;" */}
              </div>
              <span className="input-group-text shadow-none">
                  {/* style="background-color: transparent; border: none; position: absolute; right: 0px; top: -2px; cursor: pointer;" */}
                <i id="eye1" className="bi bi-eye-slash text-gray-700 fs-4"></i>
              </span>
            </div>
            <div className="d-flex justify-content-end align-item-center mb-4">
              <div className="text-dark text-thin ">Forget Password?</div>
                {/* style="font-size: 15px; font-weight: 400; cursor: pointer;" */}
            </div>
            <button className="btn btn-primary mb-4 w-100  rounded-3">Sign In</button>
              {/* style="padding: 10px 0px;" */}
            <p className="text-center">━━━━ Or ━━━━</p>
            <a className="btn btn-dark mt-2 w-100 rounded-3" href="/auth/register">Sign Up</a>
              {/* style="padding: 10px 0px;" */}
          </div>
        </div>
    </>
  );
}

export default LoginInput;