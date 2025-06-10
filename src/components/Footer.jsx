import React from 'react';
import f from '../assets/f.png';
import s from '../assets/s.png';
import t from '../assets/t.png';
import '../footer.css';


const App = () => {
  return (
    
     
   
      <footer className="color text-white pt-10 pb-5 px-4">
        <div className='container mx-auto'>

          <div className='upper'>

            <div className='first'>
              <h1 className='head'>Transparent</h1>
              <p className='tail'>STAY IN THE KNOW</p>
              <div className="icons">
                <img src={f} alt="icon1" className="w-5 h-5" />
                <img src={s} alt="icon2" className="w-5 h-5" />
                <img src={t} alt="icon3" className="w-5 h-5" />
              </div>
            </div>

            <div className='second'>
              <h1 className='topic'>PRODUCT</h1>
              <ul className='under'>
                <li>Live Conversation Platform</li>
                <li>Dialer</li>
                <li>Salesfloor</li>
                <li>Analytics</li>
                <li>Call Library</li>
                <li>Pricing</li>
              </ul>
            </div>

            <div className='third'>
              <h1 className='topic'>SOLUTIONS</h1>
              <ul className='under'>
                <li>Build Pipeline</li>
                <li>Increase Call Volume</li>
                <li>Decrease Ramp-time</li>
                <li>Coach</li>
                <li>For Sales Reps</li>
                <li>For Managers</li>
                <li>For Sales Leaders</li>
                <li>For Sales Operations</li>
              </ul>
            </div>

            <div className='fourth'>
              <h1 className='topic'>COMPANY</h1>
              <ul className='under'>
                <li>About us</li>
              </ul>
            </div>
          </div>

          <div className='stunderline lower'>
            <div className='fir'>
              <p>© 2024 Transparent. All Rights Reserved.</p>
              <ul className='list'>
                <li>Privacy policy</li>
                <li>Terms of service</li>
                <li>Technical Security</li>
              </ul>
            </div>
            <p className="text-sm">
               This Privacy Policy supplements our Terms of Service and any capitalized terms used, but not defined in this Privacy Policy, have the meaning given to them in our Terms of Service. Users can access the Services via our website at transparent.com. By using our Services, you are consenting to the collection, transfer, processing, storage, disclosure and other uses described in this privacy Policy.
            </p>
          </div>

        </div>
      </footer>
    
  )
}

export default App;