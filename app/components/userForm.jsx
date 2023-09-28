
import addForm from "../_actions/action";

const UserForm = () =>{





    return (

        <>
        <form action={addForm} >

<div className="flex flex-col w-1/2 gap-4 ml-4 p-2">  
            <input type="text" name="username" placeholder="User Name" className="text-black border-4 border-indigo-500/75"/>
            <input type="email" name="email" placeholder="Email" className="text-black border-4 border-indigo-500/75"/>
            <button type="submit" className="bg-blue-700/90 hover:bg-blue-300 text-white rounded-md w-1/5 "> List Items </button>

            </div>
        </form>
        
        
        </>


    )
}


export default UserForm;
