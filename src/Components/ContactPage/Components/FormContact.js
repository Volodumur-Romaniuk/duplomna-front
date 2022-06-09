import './FormContact.css'

function FormContant(){
    return (
        <div className="formcontact">
            <div className="form">
                <img src="	https://alethemes.com/alesushi/wp-content/uploads/sites/105/2021/12/formbg.jpg" alt="" className="backgroung-form" />
                <div className="info-form">
                    
                    <div className="elements-form">
                    <div className="text-title">
                        <p className="title2 josefin-sans ">VISIT US</p>
                        <p className="title3  josefin-sans">France, Marseille, Main street 53, FR-MR 00584
                                onlineorder@cosushi.com | info@cosushi.com 
                        </p>
                    </div>
                    <div className="row-button   josefin-sans">
                            <input  placeholder="Your Name *"  type="text" required/>
                            <input placeholder="Your Email *"  type="text"required/>
                            <input placeholder="Your Commnent *"  type="text"required/>

                            <div className="slider-buttons btn josefin-sans">
                             
                                <button className="josefin-sans"> Send Message</button>
                            </div>
                        </div>

                    </div>
                    
                </div>


            </div>

        </div>
    );
}
export default FormContant;