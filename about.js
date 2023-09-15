import React from 'react'
import BackgroundImage from '../../assets/images/bg.jpg';

function about() {
  return (
    <header style={HeaderStyle}>
    
       
    <div className='about'>
        <div>
        <h1 className='h1' style={{paddingTop:"100px"}}>E-ᗷOOK E᙭ᑕᕼᗩᑎGE</h1>
        </div>
        <br></br><br></br>
        <center>
        <div className='h3'>
        <h3> Welcome to E-BOOK EXCHANGE, <br></br>
           where knowledge knows no boundaries and sharing stories is our passion!</h3>
           <br></br>
           <h3>E-BOOK EXCHANGE was born out of a love for reading and a desire to foster a global community of book enthusiasts. We understand that books have the power to inspire, educate, and entertain. Whether you're an avid reader, a student, or simply someone who appreciates a good story, E-BOOK EXCHANGE is here to make your reading experience even more rewarding.</h3>
    <br></br>
   <h3>We invite you to become a part of the E-BOOK EXCHANGE community. Share your passion for reading, connect with fellow book lovers, and embark on a journey of literary exploration. Together, we can make the world a more book-friendly place, one e-book at a time.
   <br></br><br></br>
   E-BOOK EXCHANGE allows you to swap e-books with other users, giving you access to a diverse range of titles across various genres. Share your favorite stories, discover hidden gems, and expand your literary horizons.
</h3></div></center>
   
    </div>
    </header>
  )
}
const HeaderStyle = {
  width: '100%',
  height: '110vh',
  background: `url(${BackgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
}
export default about