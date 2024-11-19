
import React, { useRef, useState} from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactUs() {

  const [name, setName] = useState("");  
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [error, setError] = useState(null);

  const textareaRef = useRef(null);
  const charCountRef = useRef(null);
  const maxLength = 150;

  function updateCharacterCount() {
    if (textareaRef.current && charCountRef.current) {
      var charCount = textareaRef.current.value.length;
      charCountRef.current.textContent = `${maxLength - charCount} characters left.`;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    setError(null);// Reset error state

    if (name.trim() && message.trim()) {
      // Get the current date and time
      const date_time = new Date().toLocaleString();

      fetch("http://127.0.0.1:5555/addfeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, email : email, subject : subject, phone : phone, message: message, date_time: date_time })
      })
        .then((response) => {
          return response.json();
        })
      // Add new message to the testimonials array
      setFeedback((prevMessages) => [
        ...prevMessages,
        { name, email, subject, phone, message, date_time },
      ]);
      alert("Message submitted successfully. Thank you!");

      // Clear form fields after submission
      setName("");
      setEmail("");
      setSubject("");
      setPhone("");
      setMessage("");

      // confirm if message was submitted
      console.log("name:", name);
      console.log("email:", email);
      console.log("subject:", subject);
      console.log("phone:", phone);
      console.log("message:", message);
      console.log("date_time:", date_time);
    } else {
      // show error message
      console.log("Please fill in all fields");
    }
  }


  return (
    <div className="animate-swipeUp w-full m-auto pt-2 max-w-none" >
      <div className="rounded overflow-hidden shadow-none px-6 py-1" style={{
        marginBottom: "10px",
        marginTop: "10px",
      }}>
        {/* <div className="bg-gray-100 py-1">
          <h1 class="text-5xl font-bold text-center text-gray-800 mb-2">
            Contact
            <hr
              class="border-t-2 border-red-700  mb-1 py-2"
              style={{ width: "10%", margin: "15px auto" }}
            />
          </h1>
        </div> */}

        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-9 mt-1">
          <div className="rounded overflow-hidden shadow-sm px-6 py-1">
            <div className="icon text-3xl text-center">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div className="cont">
              <p className="text-center">
                <br /><strong>Nairobi, Kenya. </strong><br /><br /> 
              </p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-sm px-6 py-2">
            <div className="icon text-3xl text-center">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="cont">
              <p className="text-center">
                <br /> <strong>+254 716-461951 </strong><br /> <br />Monday - Friday from 7am - 5pm
              </p>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-sm px-6 py-2">
            <div className="icon text-3xl text-center">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="cont">
              <p className="text-center">
                <a href="mailto:admin@gmail.com" style={{ color: "blue" }}>
                  <br /><u><strong>frankkashere@gmail.com</strong></u> <br /> <br />
                </a>
                Contact me any time!
              </p>
            </div>
          </div>
        </div>
        <div className="row">

          <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7" style={{
            maxWidth: "1200px",
            marginBottom: "10px",
            marginTop: "0px",
          }}>

            <div className="col-lg-7 col-span-2" >

              <div className="contact-from mt-10" style={{ padding: "10px", }}>
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <hr
                    class="border-t-2 border-red-700  mb-2 py-2"
                    style={{ width: "10%", margin: "15px" }}
                  />
                </div>
                <div className="main-form pt-45">
                  <form
                    id="contact-form"
                    action="#"
                    method="post"
                    data-toggle="validator"
                    onSubmit={handleSubmit}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="singel-form form-group">
                          <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            data-error="Name is required."
                            required
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="singel-form form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Enter email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            data-error="Valid email is required."
                            required
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="singel-form form-group">
                          <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            data-error="Subject is required."
                            required
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="singel-form form-group">
                          <input
                            name="phone"
                            type="text"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            data-error="Phone is required."
                            required
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="singel-form form-group ">
                          <textarea
                            name="message"
                            placeholder="Message (150 maximum characters)"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            data-error="Please, leave us a message."
                            required
                            ref={textareaRef}
                            onInput={updateCharacterCount}
                            maxLength={maxLength}
                            style={{ resize: "vertical" }}
                            spellCheck={true}
                          ></textarea>
                          <div className="help-block with-errors"></div>

                        </div>
                        <div className="mt-2" ref={charCountRef}>{maxLength} characters left.</div>
                      </div>
                      <p className="form-message"></p>
                      <div className="col-md-12">
                        <div className="singel-form">
                          <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>


            <div className="rounded overflow-hidden shadow-none">

              <div className="px-5 mt-10 bg-gray-50 py-2" >
                <div className="section-title">
                  <h2>Message me</h2>

                  <hr
                    class="border-t-2 border-red-700  mb-2 py-2"
                    style={{ width: "10%", margin: "15px" }}
                  />
                </div>
                <div className="contact-address-container">
                  <p>
                    To send me a message, please enter your details and the message in the fields on the left of your screen.
                  </p>
                  <p>
                    I shall respond to your message as soon as possible.
                  </p>
                  <p>
                    I highly value your feedback and suggestions.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;

