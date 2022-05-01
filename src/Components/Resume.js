import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
            <p className="info">{education.degree}</p>
            {/*<span>&bull;</span><em className="date">{education.graduated}</em>*/}
        <p>{education.description}</p></div>
      })
      // var work = this.props.data.work.map(function(work){
      //   return <div key={work.company}><h3>{work.company}</h3>
      //       <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
      //       <p>{work.description}</p>
      //   </div>
      // })
      var project = this.props.data.project.map(function(project){
        return <div key={project.title}><h3>{project.title}</h3>
                <p className="info"><span>&bull;</span> <em className="date">{project.skill}</em></p>
                <em className="info">
                    {project.description.map(description => {return <span>&bull;{description}<br /></span>})
                    }</em><p />
        </div>
      })
      var skill = this.props.data.skill.map(function(skill){
        return <div key={skill.title}><h3>{skill.title}</h3>
            <p className="info">
                <em className="date">
                    {skill.details.map(detail => {
                    return <span>&bull;{detail}<br /></span>})
                    }</em></p>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row work">

          <div className="three columns header-col">
              <h1><span>Project</span></h1>
          </div>

          <div className="nine columns main-col">
              {project}
          </div>
      </div>

      <div className="row work">

          <div className="three columns header-col">
              <h1><span>Skill</span></h1>
          </div>

          <div className="nine columns main-col">
              {skill}
          </div>
      </div>

      {/*<div className="row work">*/}

      {/*    <div className="three columns header-col">*/}
      {/*        <h1><span>Experience</span></h1>*/}
      {/*    </div>*/}

      {/*    <div className="nine columns main-col">*/}
      {/*        {work}*/}
      {/*    </div>*/}
      {/*</div>*/}

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default Resume;
