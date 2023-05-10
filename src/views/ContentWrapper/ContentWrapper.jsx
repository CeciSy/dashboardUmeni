import React from "react";
import ContentRowTop from "../../components/ContentRowTop/ContentRowTop";


function ContentWrapper() {
   return(
    <div id="wrapper" className="d-flex flex-column">

			{/* <!-- Main Content --> */}
			<div id="content">
            
            {/* <!-- Content Row Top --> */}
				<ContentRowTop/>
			{/* <!--End Content Row Top--> */}
			
            <div><h2>Listado Vinos</h2></div>
			</div>
			
            {/* <!-- End of MainContent --> */}

			

		</div>
   )
}
export default ContentWrapper