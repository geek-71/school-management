import { DisplayCount } from "../components"
import { ImProfile } from "react-icons/im";
function Home() {
  const data = {
    icon:<ImProfile/>,
    title:"Total",
    value:100
  }
  return (
    <>
    <h2>Home</h2>
    <div className="container flex justify-evenly m-10">
      <DisplayCount data={data}/>
      <DisplayCount data={data}/>
      <DisplayCount data={data}/>
      <DisplayCount data={data}/>
    </div>
    </>
  )
}

export default Home