import "./ContactComponent.css"
import contactpage from "/assets/Image/contactpage.png"
import gps from "/assets/Image/gps.png"
import phone from "/assets/Image/phone.png"
import clock from "/assets/Image/clock.png"
import * as yup from "yup"
import { useState } from 'react';

function ContactComponent(){
    const [formDate, setformDate] = useState({
        Name:"", email:"", Subject:"",
        message:"" });

        const [errorsObject, seterrorsObject] = useState({})

const userSchema = yup.object().shape({
  Name: yup.string().required("This field is required"), 
   
  email:yup.string().email('please enter a valid email address').required("This field is required"), 
  
  message:yup.string().required("This field is required"),
  
})

async function testvalidation() {
  try {
    const response = await userSchema.validate(formDate, {
      abortEarly: false,
    });
    console.log(response);
    
  } catch (err) {
    var errors = {};
    err.inner.forEach((error) => {
      console.log(`${error.path} : ${error.message}`);
      errors[error.path] = error.message;
    });
    seterrorsObject(errors);
    console.log(errors)
  }
}

        function Formonsubmit(event){
            testvalidation();
            event.preventDefault();
            
          };

        function Formonchange(event){
            const keyname = event.target.name;
            var keyvalue = event.target.value;
            
        
            setformDate({
              ...formDate,
              [keyname]: keyvalue
            })
            }

    return(
        <div id="allcontactdiv">
            <img src={contactpage} id="contactimg" />
            <div id="getdiv">
                <h1>Get In Touch With Us</h1>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>

            <div id="detcontactdiv">

                <div id="addphworkediv">
            <img src={gps} />
            <span >Address</span>
            <p>236 5th SE Avenue, New York NY10000, United States</p>

            <img src={phone} />
            <span>Phone</span>
            <p id="mobilenum">Mobile: +(84) 546-6789
            Hotline: +(84) 456-6789</p>

            <img src={clock} />
            <span>Working Time</span>
            <p id="worktime">Monday-Friday: 9:00 - 22:00
            Saturday-Sunday: 9:00 - 21:00</p>
                </div>

                <form id="inputdiv"  onSubmit={Formonsubmit}>
                    <p >Your name</p>
                    <input type="text" id="Name"
                    name="Name" value={formDate.Name} onChange={Formonchange}
                     placeholder="Abc" className={errorsObject.Name ? 'inputerror' : ''}/>
                    {errorsObject.Name ? <p className='errormessg'>{errorsObject.Name}</p> : null}

                    <p>Email address</p>
                    <input type="text"
                    id='email' name='email'  
                    value={formDate.email} onChange={Formonchange}
                     placeholder="Abc@def.com"className={errorsObject.email ? 'inputerror' : ''}/>
                    {errorsObject.email ? <p className='errormessg'>{errorsObject.email}</p> : null}

                    <p>Subject</p>
                    <input type="text" 
                    id='Subject' name='Subject'  
                    value={formDate.Subject} onChange={Formonchange}
                    placeholder="This is an optional"/>

                    <p id="messpargr">Message</p>
                    <textarea 
                    name='message' id='message'
                    value={formDate.message} onChange={Formonchange}
                    placeholder="Hi! i’d like to ask about" className={errorsObject.message ? 'inputerror' : ''}></textarea>
        {errorsObject.message ? <p className='errormessg'>{errorsObject.message}</p> : null}

                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactComponent