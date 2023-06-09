import React from "react"
import "./assets/css/app.css"
import SideBar from "./components/SideBar/SideBar"
import ContentWrapper from "./views/ContentWrapper/ContentWrapper";

function App() {
  return (
    <div id="wrapper">

		{/* <!-- Sidebar -->*/}
            <SideBar/>
		{/* <!-- End of Sidebar --> */}
            
		{/* <!-- Wrapper --> */}
		<ContentWrapper/>
		{/* <!-- End of Wrapper --> */}
		
	</div>
  );
}

export default App;
