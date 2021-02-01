import React from 'react'
import { Wrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import { faPenNib} from '@fortawesome/free-solid-svg-icons'
import { faFeatherAlt} from '@fortawesome/free-solid-svg-icons'
import { faHandPointer} from '@fortawesome/free-solid-svg-icons'
import { faLightbulb} from '@fortawesome/free-solid-svg-icons'
import { faWindowMaximize} from '@fortawesome/free-solid-svg-icons'


export const CvNews = () => {
    return (
        <Wrapper>
           <div className="main">
               <div className="top">
                   <div className="left-top">
                       <div className="title-name">
                           <h1>HILI NOY</h1>
                       </div>
                       <div className="ocupation">
                           <div><span>Ilustration</span></div>
                           <div><span>Design</span></div>
                           <div><span>Motion</span></div>
                       </div>
                   </div>
                   <div className="right-top">
                       <div className="container-list">
                           <div><span>Web</span></div>
                           <div> <span>www.keanurv.god</span></div>
                       </div>
                       <div className="container-list">
                           <div><span>Phone</span></div>
                           <div><span>123456789</span></div>
                       </div>
                       <div className="container-list">
                           <div><span>Email</span></div>
                           <div> <span>keanu-god-rv@rv.god</span></div>
                       </div>
                   </div>
               </div>
               <div className="main-skills">
                   <div className="title">
                       <h1>Skills</h1>
                   </div>
                   <div className="main-three">
                       <div className="skills">
                           <div className="icon"><FontAwesomeIcon icon={faPencilAlt} /></div>
                           <div className="text-skills">
                               <div className="title">
                                   <h1>ILLustration</h1>
                               </div>
                               <div className="text">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, reiciendis?
                               </div>
                           </div>
                       </div>
                       <div className="skills">
                           <div className="icon"><FontAwesomeIcon icon={faPenNib} /></div>
                           <div className="text-skills">
                               <div className="title">
                                   <h1>Concept Art</h1>
                               </div>
                               <div className="text">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, reiciendis?
                               </div>
                           </div>
                       </div>
                       <div className="skills">
                           <div className="icon"><FontAwesomeIcon icon={faFeatherAlt} /></div>
                           <div className="text-skills">
                               <div className="title">
                                   <h1>Branding</h1>
                               </div>
                               <div className="text">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, reiciendis?
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="main-three">
                       <div className="skills">
                           <div className="icon"><FontAwesomeIcon icon={faHandPointer} /></div>
                           <div className="text-skills">
                               <div className="title">
                                   <h1>Motion Graphics</h1>
                               </div>
                               <div className="text">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, reiciendis?
                               </div>
                           </div>
                       </div>
                       <div className="skills">
                           <div className="icon"><FontAwesomeIcon icon={faLightbulb} /></div>
                           <div className="text-skills">
                               <div className="title">
                                   <h1>Concept Development</h1>
                               </div>
                               <div className="text">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, reiciendis?
                               </div>
                           </div>
                       </div>
                       <div className="skills">
                           <div className="icon"><FontAwesomeIcon icon={faWindowMaximize} /></div>
                           <div className="text-skills">
                               <div className="title">
                                   <h1>Web Design</h1>
                               </div>
                               <div className="text">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, reiciendis?
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="main-edu-exp">
                   <div className="main-education">
                       <div className="title">
                           <h1>Education</h1>
                       </div>
                       <div className="list">
                           <ul>
                               <li><span>Lorem  Lorem ipsum, dolor sit amet consectetur adipisicing elit. <strong> Nesciunt ut, sint suscipit, eos impedit enim voluptas </strong> sequi, laudantium quaerat alias expedita accusantium quos deleniti fugiat. ipsum dolor sit amet consectetur adipisicing elit. Iusto, laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nam.</span></li>
                               <li><span>Quas perferendis, non reprehenderit Lorem ipsum dolor, sit <strong>amet consectetur adipisicing elit. Et, </strong>molestiae. Inventore ipsa amet nesciunt? Qui. ipsa nihil ut enim consequuntur beatae!</span></li>
                               
                           </ul>
                           <ul>
                               <li><span><strong>Eos perferendis voluptate</strong> sint accusamus repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quibusdam voluptatem totam numquam fuga sequi molestiae a facilis, aperiam alias vel soluta sapiente libero delectus. a nulla itaque odit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, magni!</span></li>
                               <li><span><strong>Excepturi odit reiciendis magnam quaerat rem,</strong> deleniti error recusandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, molestiae facere consectetur commodi tenetur deserunt nemo fugit perferendis dolores maiores! inventore?</span></li>
                           </ul>
                       </div>
                   </div>
                   <div className="main-experience">
                        <div className="title">
                           <h1>Education</h1>
                       </div>
                       <div className="list">
                           <ul>
                               <li><span><strong> Lorem ipsum dolor </strong></span></li>
                               <li><span><strong>Eos perferendis voluptate</strong> sint accusamus repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quibusdam voluptatem totam numquam fuga sequi molestiae a facilis, aperiam alias vel soluta sapiente libero delectus. a nulla itaque odit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, magni!</span></li>
                               <li><span><strong>Excepturi odit reiciendis magnam quaerat rem,</strong> deleniti error recusandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, molestiae facere consectetur commodi tenetur deserunt nemo fugit perferendis dolores maiores! inventore?</span></li>
                           </ul>
                           
                       </div>
                   </div>
               </div>
               <div className="soft-skills">
                   <h1>Software Skills</h1>
                   <div className="medition">
                       <div><span>Photoshop</span></div>
                       <div className="barra">
                       </div>
                   </div>
                   <div className="medition">
                       <div><span>ILLustrator</span></div>
                       <div className="barra">
                       </div>
                   </div>
                   <div className="medition">
                       <div><span>After Effect</span></div>
                       <div className="barra">
                       </div>
                   </div>
                   <div className="medition">
                       <div><span>Permanence</span></div>
                       <div className="barra">
                       </div>
                   </div>
               </div>
           </div>
        </Wrapper>
    )
}