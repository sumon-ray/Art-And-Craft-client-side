import React,{useContext} from 'react';
import {useLocation,useNavigate} from 'react-router-dom'
import { UserContext } from '../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const{registerUser,updateUserProfile}=useContext(UserContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state || '/'
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value; 
        console.log(name) 
        const email = form.email.value; 
        const photo = form.photo.value; 
        const password = form.password.value; 
        // console.log(name, email, photo, password);
        registerUser(email,password,name,photo)
        .then(result=>{ 
            updateUserProfile(result.user,name,photo)
            console.log(result.user)
            toast.success('regesterd successfully')
            navigate(from)
        })
        .catch(()=>{
            toast.warning('already registerd this gmail')
        })
    };
    
    return (
        <div className="flex flex-col mx-auto my-4 max-w-md p-6 rounded-md sm:p-10 dark:bg-slate-500 text-black">
        <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
            {/* <p className="text-sm ">Sign in to access your account</p> */}
        </div>
        <form onSubmit={handleSubmit}  className="space-y-12">
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                    <input type="text" name="name" id="name" placeholder="your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                    <input type="text" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm">PhotoURL</label>
                    <input type="text" name="photo" id="photo" placeholder="Add photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">Password</label>
                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-slate-700-600">Forgot password?</a>
                    </div>
                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                </div>
            </div>
            <div className="space-y-2">
                <div>
                    <button  type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign Up</button>
                </div>
                <p className="px-6 text-sm text-center ">Don't have an account yet? 
                    <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-red-400">Sign up</a>
                </p>
            </div>
        </form>
    </div>
    );
};

export default Registration;