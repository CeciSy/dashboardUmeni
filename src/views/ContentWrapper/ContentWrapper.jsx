import React from "react";
import ContentRowTop from "../../components/ContentRowTop/ContentRowTop";
import Footer from "../../components/Footer/Footer";


function ContentWrapper() {
       

   return(
    <div id="wrapper" className="d-flex flex-column">

			{/* <!-- Main Content --> */}
			<div id="content">
            
            {/* <!-- Content Row Top --> */}
				<ContentRowTop/>

            {/* <!-- Content Row Top --> */}
				<Footer/>
			{/* <!--End Content Row Top--> */}
			</div>
		
            {/* <!-- End of MainContent --> */}

                      
    </div>
   )
}
export default ContentWrapper