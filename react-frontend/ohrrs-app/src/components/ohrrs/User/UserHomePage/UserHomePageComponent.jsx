import { Component } from 'react';
import AuthenticationService from '../Authentication/AuthenticationService';

class UserHomePageComponent extends Component
{
  render()
  {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return (
      <div className="userHomePageComponent" style={{ backgroundColor: '#FBCDF2' }}>

        {/* Masthead*/}
        <header className="" >
          <div className="">
          </div>
        </header>

        {/* Services*/}
        <section className="page-section" id="services">
          <div className="container" >
            
          </div>
        </section>

        {/* About*/}
        <section className="page-section" id="about">
        <h2 className="section-heading text-uppercase">Hotel Reservation System</h2>
        
        </section>
            <header className="masthead" >
          <div className="container">
            <div className="masthead-subheading">Welcome To Your Dream Hotel</div>
            <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
            <a className="btn btn-warning btn-xl text-uppercase" href="/login">Tell Me More</a>
          </div>
        </header>

        <section className="page-section bg-light" id="team">
          <div className="container-fluid">
            <div className="row">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">WELCOME ALL TO THE HOTEL</h2>
              <div><p className="large text-muted"> Our team, are working together to provide the customers manage their tasks with Sucessfully.<h4 className="section-subheading text-muted">DETAIL CHECK</h4>.</p></div>
          </div>
              
            </div>
          </div>
          <div className='container-fluid'>
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />


          </div>
        </section>

        {/* Contact*/}
        <section className="page-section" id="contact">
          <div className="container">
            <div className="text-center">
              
            </div>
            
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <div className="row align-items-stretch mb-5">
                <div className="col-md-6">
                  <div className="form-group">
                    {/* Name input*/}
                    
                       {/* isUserLoggedIn && sessionStorage.getItem('authenticatedUser')} placeholder={
                        isUserLoggedIn && "Your Name *"}  */}
                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                  </div>
                  <div className="form-group">
                    {/* Email address input*/}
                    
                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                  </div>
                  <div className="form-group mb-md-0">
                    {/* Phone number input*/}
                    
                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-group-textarea mb-md-0">
                    {/* Message input*/}
                   
                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                  </div>
                </div>
              </div>
              {/* Submit success message*/}
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center text-white mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
              </div>
              {/* Submit error message*/}
              <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
              {/* Submit Button*/}
              
            </form>
          </div>
        </section>

    </div>    
    );
  }
}



export default UserHomePageComponent;