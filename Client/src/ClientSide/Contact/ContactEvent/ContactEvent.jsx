/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { IoCallSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const ContactEvent = () => {
    const [submitBtnDisable, setSubmitBtnDisable] = useState(true);
    const [clickSubmit, setClickSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log("name", name);
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // const validateForm = () => {
    //   let errors = {};
    //   let formIsValid = true;
  
    //   const emailPattern =
    //     /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
  
    //   const phoneNumberRegex =
    //     /^(?:(?:\+|00)([1-9]\d{0,2})[.\-\s]?)?(?!0+\s+,?$)[1-9]\d{9}\s?(?:#|(?:ext|int)\.? ?\d{1,5})?$/gm;
  
    //   const isValid = phoneNumberRegex.test(formData.mobileNumber);
  
    //   if (!formData.email) {
    //     formIsValid = false;
    //     errors["email"] = "Please enter your email address.";
    //   } else if (!emailPattern.test(formData.email)) {
    //     formIsValid = false;
    //     errors["email"] = "Please enter a valid email.";
    //   }
  
    //   if (!formData.mobileNumber) {
    //     formIsValid = false;
    //     errors["mobile"] = "Please enter your phone number.";
    //   } else if (!isValid) {
    //     formIsValid = false;
    //     errors["mobile"] = "The phone number is not valid.";
    //   }
  
    //   if (!formData.fName) {
    //     formIsValid = false;
    //     errors["fName"] = "Please enter your first name.";
    //   }
  
    //   if (!formData.lName) {
    //     formIsValid = false;
    //     errors["lName"] = "Please enter your last name.";
    //   }
  
    //   if (!formData.address) {
    //     formIsValid = false;
    //     errors["address"] = "Please enter your address.";
    //   }
  
    //   if (!formData.areaCode) {
    //     formIsValid = false;
    //     errors["areaCode"] = "Please enter your area code.";
    //   }
  
    //   if (!formData.message) {
    //     formIsValid = false;
    //     errors["message"] = "Please enter your message.";
    //   } else if (formData.message.length > 255) {
    //     formIsValid = false;
    //     errors["message"] = "Message cannot exceed 255 characters.";
    //   }
  
    //   setErrors(errors);
    //   return formIsValid;
    // };
  
    useEffect(() => {
      if (
        formData.fullName &&
        formData.phoneNumber &&
        formData.message &&
        formData.email
        // validateForm()
      ) {
        setSubmitBtnDisable(false);
      } else {
        setSubmitBtnDisable(true);
      }
    }, [
      formData.fullName,
      formData.phoneNumber,
      formData.message,
      formData.email,
      
    //   validateForm
    ]);
  
    useEffect(() => {
      if (clickSubmit == true) {
        // validateForm();
        true;
      }
    }, [
      formData.fullName,
      formData.phoneNumber,
      formData.message,
      formData.email,
      clickSubmit
    ]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setClickSubmit(true);
      sendContactUsInfo();
    //   console.log(formData);
    //   if (validateForm()) {
    //     setIsLoading(true);
    //     
    //   }
    };
  
    const sendContactUsInfo = async () => {
      console.log(formData);
      try {
        const response = await fetch(
         "http://localhost:3001/api/client/",
          {
            method: "POST",
            mode : "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          },
        );
  
        if (response.ok) {
          // Handle successful response
          console.log("Form submitted successfully");
        } else {
          // Handle error response
          console.error("Form submission failed");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setIsLoading(false);
        setSubmitBtnDisable(false);
      }
    };
    return (
        <div className='sectionGap'>
            <div className='lg:grid grid-cols-2 justify-between items-center'> 
                <div>
                    <p className='contactEventSmall'>Get In touch</p>
                    <h3 className='conatactEventTitle'>let's chat: contact Us for personalized assistance! </h3>
                    
                    <p className='contactDescription'>Nam mollis aliquet hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur augue purus, cursus maximus malesuada.</p>

                    <div className='contactTitleSubttitleParent'>
                        <div className='contactIconParent'>
                            <IoCallSharp className='conatctEventIcon'></IoCallSharp>
                        </div>
                        <div>
                            <h4 className='contactCTAtitle'>Have Quires ?</h4>
                            <p className='contactCTAsubtitle'>+91847512157</p>
                        </div>
                    </div>
                    <div className='contactTitleSubttitleParent pt-[25px]'>
                        <div className='contactIconParent'>
                            <MdEmail className='conatctEventIcon'></MdEmail>
                        </div>
                        <div>
                            <h4 className='contactCTAtitle'>Have Quires ?</h4>
                            <p className='contactCTAsubtitle'>emopract@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#7EA254] mt-[35px] py-[35px] md:py-[50px] lg:py-[70px] xl:py-[80px] 2xl:py-[120px] rounded-[10px]'>
                    <h3 className='eventCardTitle'>request for a session!</h3>
                    <form className='space-y-[20px] md:space-y-[25px] lg:space-y-[30px] xl:space-y-[30px] 2xl:space-y-[40px]' method='POST'>
                        <div className='inputParent'>
                            <label className='formTitle' htmlFor="fullName">Full Name</label>
                            <input className='contactInpufeild' type="text" name="fullName" onChange={handleChange}/>
                        </div>
                        <div className='inputParent'>
                            <label className='formTitle' htmlFor="phoneNumber">Phone Number</label>
                            <input className='contactInpufeild' type="text" name='phoneNumber' onChange={handleChange}/>
                        </div>
                        <div className='inputParent'>
                            <label className='formTitle' htmlFor="email">Email Address</label>
                            <input className='contactInpufeild' type="text" name='email' onChange={handleChange}/>
                        </div>
                        <div className='inputParent'>
                            <label className='formTitle' htmlFor="message"> Message</label>
                            <input className='contactInpufeild' type="text" name='message' onChange={handleChange}/>
                        </div>
                      
                            <div className='inputParent pt-[30px] pb-[15px] md:pt-[35px] md:pb-[20px] lg:pt-[40px] lg:pb-[20px] xl:pt-[40px] xl:pb-[20px]  2xl:pb-[30px]'>
                                <button className='contactSendBtn' onClick={(e) => handleSubmit(e)}>Send Now</button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactEvent;