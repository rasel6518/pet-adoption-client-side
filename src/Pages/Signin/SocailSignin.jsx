import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocailSignin = () => {
    const { googleSignin, githubSignin } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const handleGoogleSignin = () => {
        googleSignin()
            .then(r => {
                console.log(r.user);
                const userInfo = {
                    email: r.user.email,
                    name: r.user.displayName,
                    image: r.user.photoURL,


                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/')
                    })
            })

    }
    const handlegithubSignin = () => {
        githubSignin()
            .then(r => {
                console.log(r.user);
                const userInfo = {
                    email: r.user.email,
                    name: r.user.displayName,
                    image: r.user.photoURL,
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/')
                    })

            })

    }
    return (
        <div>

            <div className=" flex justify-center gap-2 text-center">
                <button onClick={handleGoogleSignin} className="p-3  hover:border-2 border-black "> <FaGoogle className="text-3xl"></FaGoogle></button>
                <button onClick={handlegithubSignin} className="p-3 hover:border-2 border-black  "> <FaGithub className="text-3xl"></FaGithub></button>
            </div>
        </div>
    );
};

export default SocailSignin;