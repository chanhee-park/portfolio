import React, { Component } from 'react';

class About extends Component {
  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio1 = this.props.data.bio1;
      var bio1_contents = this.props.data.bio1_contents;
      var bio2 = this.props.data.bio2;
      var bio2_contents = this.props.data.bio2_contents;
      var git_hub= this.props.data.git_hub;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

             <span>{bio1}</span><br />
             <p>{bio1_contents && bio1_contents.map(content =>{
                 return (<span> {content} <br/></span>);
             })}</p>
             <span>{bio2}</span><br />
             <p>{bio2_contents && bio2_contents.map(content =>{
                 return (<span> {content} <br/></span>);
             })}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
                     <span>{email}</span><br />
                      <a href={"https://github.com/HSeo-git"}>{git_hub}</a>
					   </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
