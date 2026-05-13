import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { Key, LoaderIcon, Mail, MessageCircleIcon } from "lucide-react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLogin } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };
  return (
    <div className="w-full flex items-center justify-center p-4 bg-slate-900">
      <div className="relative w-full max-w-6xl md:h-[800px] h-[650px]">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row">
            {/* FORM CLOUMN - LEFT SIDE */}
            <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-slate-600/30">
              <div className="w-full max-w-md">
                {/* HEADING TEXT */}
                <div className="text-center mb-8">
                  <MessageCircleIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />

                  <h2 className="text-2xl font-bold text-slate-200 mb-2 animate-pulse">
                    Welcome Back
                  </h2>

                  <p className="text-slate-400 font-semibold">
                    Login to your account to continue
                  </p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* email */}
                  <div>
                    <label className="auth-input-label">Email</label>
                    <div className="relative">
                      <Mail className="auth-input-icon" />

                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="input"
                        placeholder="example@gmail.com"
                      />
                    </div>
                  </div>
                  {/* password */}
                  <div>
                    <label className="auth-input-label">Password</label>
                    <div className="relative">
                      <Key className="auth-input-icon" />

                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            password: e.target.value,
                          })
                        }
                        className="input"
                        placeholder="Enter Your Password"
                      />
                    </div>
                  </div>
                  {/* SUBMIT BUTTON */}
                  <button className="auth-btn" type="submit" disabled={isLogin}>
                    {isLogin ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Login"
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-400">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-pink-500 hover:underline font-semibold"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* IMAGE COLUMN - RIGHT SIDE */}
            <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
              <div>
                <img
                  src="/login.png"
                  alt="People using mobile devices"
                  className="w-full h-auto object-contain"
                />

                <div className="mt-6 text-center">
                  <h3 className="text-xl font-medium text-cyan-400">
                    Chat is Easy Now
                  </h3>

                  <div className="mt-4 flex justify-center gap-4">
                    <span className="auth-badge">Real-Time</span>
                    <span className="auth-badge">Secure</span>
                    <span className="auth-badge">Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
};

export default LoginPage;
