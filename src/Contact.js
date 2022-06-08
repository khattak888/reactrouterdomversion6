import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    const goToHome = ()=>{
        navigate("/")
    }
  return (
    <>

    <section>
        <h1>Contact Page</h1>
        <p style={{backgroundColor:"black" , color:'green' , width:'600px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid</p>
<button onClick={()=>goToHome()}>Go to Home Page</button>
    </section>

</>
  )
}

export default Contact