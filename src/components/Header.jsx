
export default function Header() {
   
    return (
        <>
            <header className="bg-gray-800 w-full h-28">
                    <div className="">
                        <h1 className="text-white ml-10 font-bold text-xl ">YvlSpotify</h1>
                    </div>
                    <div className=" flex justify-end ">
                        <input className="w-2/12 rounded-2xl mt-2 mr-4 p-2 bg-transparent border-2 border-black text-white" type="text"  placeholder="Search"/>
                    </div>
       
            </header>
         
        </>


    )

}