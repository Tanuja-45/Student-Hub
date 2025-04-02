import React from 'react'
import { useNavigate } from 'react-router-dom'


function Curriculum_home() {
  let navigate=useNavigate() 

  function handleAcademicAtlas()
  {
    navigate('/syllabus')
  }

  function handleTextTreasure()
  {
    navigate('/Textbooks')
  }


  return (
   <div>
     <div className="button-card-row mt-3 row ">
            <div className='col-md-6 mb-4'>
            <div className="button-card card-light-pink p-2">
                <img src="https://ctl.mesacc.edu/wp-content/uploads/2022/10/syllabus.png" alt="" style={{maxWidth:'300px',maxHeight:'300px'}} />
                <h4>Academic Atlas</h4>
                <p>Easily track your subjects, assignments, and academic goals in one place.</p>
                <div className="btn btn-custom" onClick={handleAcademicAtlas}>Explore Academic Atlas</div>
            </div>
            </div>
            <div className='col-md-6 mb-4'>
            <div className="button-card card-light-pink p-2">
              <img src="https://www.thoughtco.com/thmb/mjTy33kvR48JJstO2uyujH-K8pE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/175426893-56a25a2a5f9b58b7d0c93cc1.jpg" alt="" style={{maxWidth:'300px',maxHeight:'300px'}} />
                <h4>Text Treasures</h4>
                <p>Easily track your subjects, assignments, and academic goals in one place.</p>
                <div className="btn btn-custom" onClick={handleTextTreasure}>Explore Text Treasures</div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Curriculum_home