import NavBar from "@/components/Nav";

export default function AddPost(){
    return(
        <>
        <NavBar/>
        <main className="">
            <div className="flex flex-col my-7 justify-center items-center">
                <h1 className="font-bold text-2xl">Add New Post Now!</h1>
                <h2>Made by : ALVIN</h2>
            </div>
            <form action="" className="flex flex-col justify-center items-center">
            <input 
                    type="img" 
                    id="img"
                    placeholder="Image here!" 
                    className="my-3 flex text-center border-solid border-4 shadow shadow-black rounded-lg size-60"/>
                <input 
                    type="text" 
                    id="title"
                    placeholder="Title here!" 
                    className="my-3 border-solid border-4 shadow shadow-black rounded-lg w-80"/>
                <input 
                    type="text" 
                    id="desc"
                    placeholder="Description here!" 
                    className="my-3 border-solid border-4 shadow shadow-black rounded-lg w-80"/>

                <button className="bg-green-600 my-2 border-black-400 text-white rounded-lg border-2 border-solid bg-green w-40">SUBMIT!</button>
            </form>
            
        </main>
        </>
    )
}