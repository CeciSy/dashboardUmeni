import "./assets/css/app.css"
import Mandalorian from "./assets/images/mandalorian.jpg"
import JordanWalke from "./assets/images/jordan-walke.png"
import SideBar from "./components/SideBar/SideBar"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div id="wrapper">

		{/* <!-- Sidebar -->*/}
            <SideBar/>
		{/* <!-- End of Sidebar --> */}
            
		{/* <!-- Wrapper --> */}
		<div id="wrapper" className="d-flex flex-column">

			{/* <!-- Main Content --> */}
			<div id="content">

				{/* <!-- Topbar --> */}
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					{/* <!-- Sidebar Toggle (Topbar) --> */}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					{/* <!-- Topbar Navbar --> */}
					<ul className="navbar-nav ml-auto">

						{/* <!-- Nav Item - Alerts --> */}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i className="fas fa-bell fa-fw"></i>
								{/* <!-- Counter - Alerts --> */}
								<span className="badge badge-danger badge-counter">3+</span>
							</a>
						</li>

						{/* <!-- Nav Item - Messages --> */}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i className="fas fa-envelope fa-fw"></i>
								{/* <!-- Counter - Messages --> */}
								<span className="badge badge-danger badge-counter">7</span>
							</a>
						</li>

						<div className="topbar-divider d-none d-sm-block"></div>

						{/* <!-- Nav Item - User Information --> */}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">Jordan Walke</span>
								<img className="img-profile rounded-circle" src={JordanWalke} alt="Jordan Walke - Creador de React" width="60"/>
							</a>
						</li>

					</ul>

				</nav>
				{/* <!-- End of Topbar --> */}

				{/* <!-- Content Row Top --> */}
				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard Vinos</h1>
					</div>
				
					{/* <!-- Content Row Vinos--> */}
					<div className="row">

						{/* <!-- Totales --> */}
						
					</div>
					{/* <!-- Fin de Totales --> */}
					
	
					{/* <!-- Content Row último vino en la Base de Datos --> */}
					<div className="row">
						{/* <!-- Último vino en la Base de Datos --> */}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último vino en la Base de Datos</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style= {{width: "40rem"}} src={Mandalorian} alt=" Star Wars - Mandalorian "/>
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
						{/* <!-- End content row last movie in Data Base --> */}

						{/* <!-- Cepas en la base de datos --> */}
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Cepas en la Base de Datos</h5>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Malbec
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Cabernet Sauvignon
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Cabernet Franc
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Syrah
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Petit Verdot
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Pinot Noir
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Chardonnay
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Sauvignon Blanc
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Torrontés
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-dark text-white shadow">
												<div className="card-body">
													Semillón
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!--End Content Row Top--> */}
			<div><h2>Listado Vinos</h2></div>
			</div>
			{/* <!-- End of MainContent --> */}

			{/* <!-- Footer --> */}
				<Footer/>
			{/* <!-- End of Footer --> */}

		</div>
		{/* <!-- End of Wrapper --> */}
	</div>
  );
}

export default App;
