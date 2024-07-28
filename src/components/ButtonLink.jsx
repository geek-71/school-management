import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai";

function ButtonLink({title,color,link}) {
  return (
    <Link to={link}>
        <div className={`border text-center flex align-center rounded-md border-${color} px-4 text-xl text-${color}-500 gap-3`}>
        <AiOutlineUser />{title}
        </div>
    </Link>
  )
}

export default ButtonLink