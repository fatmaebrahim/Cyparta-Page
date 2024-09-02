"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import Modal from "../Helper/Modal"; 
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

     
      localStorage.setItem("authToken", data.access);
      localStorage.setItem("email", email);
      router.push('/employees/profile')


    } catch (error) {
      setErrorMessage("Please check your email and password.");
      setModalOpen(true);
      console.error("Authentication error:", error);

      if (emailRef.current) emailRef.current.value = "";
      if (passwordRef.current) passwordRef.current.value = "";
      
     
      setEmail("");
      setPassword("");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    
  };

  return (
    <div className="w-full bg-[#F8F8F8] h-[1024px]">
      <Image
        src="https://s3-alpha-sig.figma.com/img/3842/b99f/e7003b653626b4899b379c517657a039?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5zOZ4eEOaQ7LAX1tvoMcy7FRGyExJ5Fz2NEND~sJrov7UvQN2IwgKINWt4h1RdcXC420db3sAQhUB7qpLwWMLzLM30ZOxbJF5uSR-UXKrRxU81VTEY7o2QJk8zUd9zd5cutDfqS3mdPD-InEZi7NomESEjwmHVK~9fQ2ZCWI3m64NbYWAcOrOLafmWsrg5-HAyEc1kQ8UtTpqpEShcCwSZmjRuf20pRy-FpOpN-9iTTphlPPeUewGV03bTuxln~574eXhcNNwlLIOANEFS6EJq~8Noihp7d1OQGV45NyisiTEKQrDznE2eEzQosbJV59qu~TI0oG-sqAJwF5vsibg__"
        alt="Cyparta Logo"
        priority
        width={225}
        height={102}
        className="scale-150 m-auto absolute top-[189px] left-[611px]"
      />

      <form
        onSubmit={handleSubmit}
        className="w-[616px] h-[489px] absolute top-[322px] left-[412px] bg-[#F8F8F8] rounded-xl shadow-[#9D9D9D] border border-[#E9E9E9] shadow-[0px_4px_4px_0px_rgba(157,157,157,0.2)]"
      >
        <div className="bg-[#F8F8F8] w-[515px] h-[344px] absolute left-[50px] top-[125px]">
          <div className="bg-[#F8F8F8] w-[545px] h-[92px] -left-[14px] -top-[41px] absolute">
            <label
              htmlFor="email"
              className="bg-[#F8F8F8] text-sm font-[600] text-[17px] text-[#262626] w-full h-[27px] leading-[31.86px]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              ref={emailRef}
              placeholder="nouran@cyparta.com"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#F8F8F8] w-full h-[55px] border border-[#333333] rounded-[10px] p-[16px]"
              required
            />
          </div>
          <div className="bg-[#F8F8F8] w-[545px] h-[92px] -left-[14px] top-[70px] absolute">
            <label
              htmlFor="password"
              className="bg-[#F8F8F8] text-sm font-[600] text-[17px] text-[#262626] w-full h-[27px] leading-[31.86px]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#F8F8F8] w-full h-[55px] border border-[#333333] rounded-[10px] p-[16px]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-[445px] h-[56px] top-[246px] left-[35px] absolute m-auto bg-[#262626] text-white rounded-[10px] transition-transform duration-300 ease-out hover:scale-105"
          >
            <p>Login</p>
          </button>
        </div>
      </form>

      <Modal isOpen={modalOpen} onClose={closeModal} message={errorMessage} />
    </div>
  );
}
