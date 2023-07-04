import React from "react"
import "../andex.css"
import img from "../images/ladki.jfif"
import Content from "../Components/Content.js"

export default function Navbar() {
    return (
        <div className="cover">
            <div className="content">
        <div className="box">
                <div className="chota_box">
                <h3  className="main--text">Hello</h3>
                </div>
            </div>
            <div className="box1">
                <div className="chota_box1">
                <h3  className="main--text1">Myself Jiya Kumawat</h3>
                </div>
            </div>


     </div>
     
     <div className="container">
      <div className="box--new">
        <div className="chota_box--new">
          <img src={img} alt="hi" className="chota--img" />
          <div className="chota_box--content"></div>
          <p className="para">
            I am currently pursuing a Bachelor of Technology in Computer Science and Engineering, with a focus on honing my technical skills and expertise.
            Alongside my studies, I make sure to allocate time for activities that bring joy to my life.
            I firmly believe that having fun along the way is essential for personal well-being and maintaining a positive mindset.
            Computer science and engineering provide a vast array of opportunities for growth. I am enthused about the journey ahead in computer science and engineering and look forward to the challenges and triumphs that lie in store.
          </p>
        </div>
      </div>
      <div className="contentt">
        <Content />
      </div>
    </div>

           

     </div>
            


     
    
        
    )
}