import Navbar from "./Navbar"



const Layout= ({children})=> (
    <div>
        <p>
          <Navbar/>
          {children}
        </p>
    </div>
)

export default Layout;