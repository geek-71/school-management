import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { links } from "../data/dummy";

function Sidebar() {
  let isOpen = true
  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto bg-blue-40 w-1/5 px-10 ">
      {isOpen && <>
        <div className="flex mt-3 items-center justify-between">
          <div className="logo">Admin</div>
          <button type="button" onClick={() => {
            isOpen = !isOpen;
            console.log(isOpen);
          }
            
          } ><IoMdCloseCircleOutline className="h-6 w-6" /></button>
        </div>
        <div className="links mt-6">
          <NavLink className="flex items-center gap-2 mt-2 capitalize" to="/"><span><IoMdHome /></span>Home</NavLink>
         {
          links.map((category) => (
            <div key={category.title}>
              <p className="m-3 mt-4 uppercase">{category.title}</p>
              { category.links.map(link => (
                <NavLink key={link.name} to={`/${link.name}`} className="flex items-center gap-2 mt-2 capitalize"> <span>{link.icon}</span>{link.name}</NavLink>
              ))}
            </div>
          )
          )
         }
          
        </div>
      </>}
    </div>
  )
}

export default Sidebar