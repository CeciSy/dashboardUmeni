import "./assets/css/app.css"
import SideBar from "./components/SideBar/SideBar"
import Footer from "./components/Footer/Footer"
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
		
		{/* <!-- Footer --> */}
		<Footer/>
		{/* <!-- End of Footer --> */}
	</div>
  );
}

export default App;
