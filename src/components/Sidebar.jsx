export default function Sidebar({children}){
    return(
        <aside className="bg-black w-1/4 flex flex-col justify-around items-center">
         <h3 className="text-white font-bold text-2xl">As melhores Playlists</h3>
          {children}
        </aside>
    )

}