
import Link from "next/link"
import UserForm from "../components/userForm"

const AboutPage = () =>{

    return(
        <div>
            <h1 className="text-4xl bg-white text-black flex justify-center ">
                About Page
            
            </h1>

            <UserForm/>
            <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Home
      </Link>
        </div>
    )
}

export default AboutPage