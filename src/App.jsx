import { BrowserRouter,Routes,Route } from "react-router-dom";
import { FcSettings } from "react-icons/fc";
import { Sidebar } from "./components"
import { Staffs, Notices, User, Profile, Settings, Students,Home,StudentRegn,StudentsDetails,StaffDetails,StaffRegn} from "./pages"
function App() {
  const isSidebarOpen = true;
  return (
   <div>
      <BrowserRouter>
      <div className="application flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar />
        <div className="setting fixed bottom-6 right-6">
          <FcSettings className="h-8 w-8" />
        </div>
        <div className={`${isSidebarOpen?'w-4/5':'flex-2 w-full'} mx-8`}>
          <Routes>
            {/* home  */}
            <Route path="/" element={<Home />} />
            {/* Dashboard */}
            <Route path="/students" >
              <Route index element={<Students/>} />
              <Route path="register" element={<StudentRegn />} />
              <Route path="approve/:id" element={<h1>Hi Approved</h1>} />
              <Route path=":id" element={<StudentsDetails />} />
            </Route>  
            <Route path="/staffs" >
            <Route index element={<Staffs/>} />
              <Route path="register" element={<StaffRegn />} />
              <Route path="approve/:id" element={<h1>Hi Approved</h1>} />
              <Route path=":id" element={<StaffDetails />} />

            </Route>
            <Route path="/Notices" element={<Notices />} />
            {/* User  */}
            <Route path="/User" element={<User />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            {/* Registration  */}
            {/* <Route path="register" element={<StudentRegn />} /> */}

          </Routes>
        </div>
      </div>
    </BrowserRouter>
   </div>
  )
}

export default App
