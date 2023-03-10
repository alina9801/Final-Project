import React, {useEffect} from 'react'
import About from '../About'
import { useLocation, useNavigate, } from 'react-router-dom';
const InstitutionDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
            <div className="container d-flex justify-content-center">
                <img src={location.state.image[0]} alt="hotel" className="img-fluid my-3 w-75 " />
            </div>
            <div className="container">
                {/* <h1 className='primaryHeading'>{location.state.name}</h1> */}
                <h1 className='primaryHeading' style={{ color: 'rgb(191 28 28)' }}>{location.state.name}</h1>
                <p className='smallpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sapiente perferendis rerum architecto animi recusandae vero neque, sint ducimus. Sequi animi reiciendis soluta impedit dolorem maiores maxime, cupiditate necessitatibus et quaerat sed quia tempora veritatis, quae eveniet dolorum modi explicabo natus aliquam iusto similique! Voluptatum assumenda alias tenetur veritatis praesentium?</p>
                <p className='smallpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta in reiciendis quae et excepturi voluptatem est architecto suscipit quod. Quas suscipit repudiandae ea molestias numquam nisi eligendi reiciendis esse?</p>
            </div>
            <div className="container my-2">
                <div className="row my-3">
                    <div className="col-md-6">
                        <img src={location.state.image[1]} alt="hotel" className="img-fluid" />
                    </div>
                    {location.state.image[2] && <div className="col-md-6">
                        <img src={location.state.image[2]} alt="hotel" className="img-fluid" />
                    </div>}
                </div>
                <div className="row my-3">
                    {location.state.image[3] && <div className="col-md-4">
                        <img src={location.state.image[3]} alt="hotel" className="img-fluid" />
                    </div>}
                    {location.state.image[4] && <div className="col-md-4">
                        <img src={location.state.image[4]} alt="hotel" className="img-fluid" />
                    </div>}
                    {location.state.image[5] && <div className="col-md-4">
                        <img src={location.state.image[5]} alt="hotel" className="img-fluid" />
                    </div>}
                </div>
            </div>

            {/* <div className="container packages">
                <span>We offer following package</span>
                <div className='d-flex gap-2'>
                    <span>Per night</span>
                    <span className='fw-bold' style={{ color: 'rgb(191 28 28)' }}>45,000</span>
                </div>
            </div> }

            { <div className="container my-3">
                <button className="readmore mx-2">Book Now</button>
                <button className="readmore mx-2" onClick={() => { navigate('/Institutions') }}>Go Back</button>
            </div> */}

            <div className="container">
                <About />
            </div>
        </>
  )
}

export default InstitutionDetails
