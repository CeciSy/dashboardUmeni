import React from "react"
import LogoDH from "../../assets/images/logoUmeni.png"

function SideBar(){
    return(
<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src={LogoDH} alt="Digital House"/>
				</div>
			</a>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0"/>

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - Umeni</span></a>
			</li>
            {/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
    )
}

export default SideBar