import fatherhood from './../../../assets/fatherhood.svg';
import ItemField from './input/ItemField';
// import { Link } from "react-router-dom";
import LoginInput from './input/LoginInput';



function Login() {

  return (
    <>
      <div className="container mx-auto h-[80vh] gap-50">
        <div className="w-[100%]">
          <img src={fatherhood} alt="img" width="100%" />
        </div>
        
        <div className="w-[100%]">
           {/* style="min-height: 85vh;" */}
           <div className='marginTop'>
              <p className="text-[#419b41] font-medium">
                <span className="font-semibold text-[#ff8181]">Welcome</span> Back
              </p>
              <p className="text-[#000000]">Sign in to Continue your Journey.</p>
           </div>
          <div className="mt-[20px]">
            {/* tutor or parent student field */}
            <ItemField />
          
            {/*Login input field html*/}
            <LoginInput />






          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
