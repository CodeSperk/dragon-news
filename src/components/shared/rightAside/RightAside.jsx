import { FaFacebookF, FaGithub, FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"


const RightAside = () => {
  return (
    <div className='space-y-8'>
      <div className="text-[var(--clr-heading)]">
        <h2 className="text-xl font-semibold mb-4 ">Login With</h2>
        
        <Link className='flex items-center gap-2 border rounded-sm border-[var(--clr-heading)] hover:border-blue-500 hover:text-blue-500 px-5 py-2 font-medium mb-4'>
        <FaGoogle/>Login With  Google
        </Link>

        <Link className='flex items-center gap-2 border rounded-sm border-[var(--clr-heading)] hover:border-blue-500 hover:text-blue-500 px-5 py-2 font-medium'>
        <FaGithub/>Login With  GitHub
        </Link>        
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4 text-[var(--clr-heading)]">Find Us On</h2>
        
        <Link className='flex items-center gap-2 border px-2 py-3 font-medium rounded-t-md hover:text-blue-500'>
        <FaFacebookF className='text[#3B599C] bg-[var(--bg-primary)] p-1 rounded-full text-2xl'/>Facebook
        </Link>

        <Link className='flex items-center gap-2 border-x px-2 py-3 font-medium rounder hover:text-blue-500'>
        <FaTwitter className='text-[#58A7DE] bg-[var(--bg-primary)] p-1 rounded-full text-2xl'/>Twitter
        </Link>

        <Link className='flex items-center gap-2 border px-2 py-3 font-medium rounded-b-md mb-4 hover:text-blue-500'>
        <FaInstagram className='text-orange-600 bg-[var(--bg-primary)] p-1 rounded-full text-2xl'/>Instagram
        </Link>
       
      </div>


      <div className='bg-[var(--bg-primary)] p-1'>
        <h2 className="text-xl font-semibold mb-4 p-3 text-[var(--clr-heading)]">Q-Zone</h2>
        
        <img src={qZone1} alt="" className='w-full'/>
        <img src={qZone2} alt="" className='w-full my-5'/>
        <img src={qZone3} className='w-full' alt="" />
       
      </div>

    </div>
  );
};

export default RightAside;