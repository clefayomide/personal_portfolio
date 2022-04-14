import React, { useState } from "react";
import emailjs from "@emailjs/browser";
// eslint-disable-next-line
// import { app } from "../firebase_config";
// import { getDatabase, ref, set } from "firebase/database";
import Btn from "./Btn";
import FormInput from "./FormInput";
import PageRouteAndHeadingText from "./PageRouteAndHeadingText";
import TextAreaInput from "./TextAreaInput";

const Contact = () => {
  const [required] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successResponse, setSuccessResponse] = useState([]);
  const [errorResponse, setErrorResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const hasError = errorResponse.length > 0;
  const noError = successResponse.length > 0;
  // const date = new Date();
  // const getDate = `${date.getDate()}-${date.getMonth()}-${date.getUTCFullYear()}`;
  // const randomNumber = ((Math.random() * 145) / 45) * 120;

  const templateParams = {
    from_name: name,
    message: `${message}  ${email}`,
    user_email: email,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessResponse(["✅ Your message has been sent"]);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setLoading(false);
        },
        (err) => {
          console.log("FAILED...", err);
          setErrorResponse([`❗ An error occurred`]);
        }
      );
    setTimeout(() => {
      setErrorResponse([]);
      setSuccessResponse([]);
    }, 6000);

    // firebase initial code before switching to emailjs

    // try {
    //   const db = getDatabase();
    //   set(ref(db, "message/" + name), {
    //     id: randomNumber.toFixed(0),
    //     name: name,
    //     email: email,
    //     subject: subject,
    //     message: message,
    //     date: getDate,
    //   });
    //   setSuccessResponse(["✅ Your message has been sent"]);
    //   setName("");
    //   setEmail("");
    //   setSubject("");
    //   setMessage("");
    // } catch (error) {
    //   console.log(error);
    //   setErrorResponse([`❗ An error occurred: ${error.message}`]);
    // }
    // setTimeout(() => {
    //   setErrorResponse([]);
    //   setSuccessResponse([]);
    // }, 5000);
    // setLoading(false)
  };

  return (
    <section className="contact-section-container">
      <div className="contact-me-content">
        <div className="left-contact">
          <PageRouteAndHeadingText innerText="Contact Me" />
          <p className="peach">Let's work together</p>
          <p className="contact-me-peach">
            Got an idea or offer you'd like to share with me ? kindly send me a
            message and i'll be in touch with you
          </p>

          <div className="contact-address">
            <div className="contact-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
              </svg>
            </div>
            <div className="contact-desc">
              <p className="contact-location">Abuja, Nigeria</p>
              <p className="contact-email">
                <a
                  href="mailto:victorolorunfemi.py@gmail.com"
                  className="mailto"
                >
                  victorayomide32@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="right-contact">
          <form id="contactForm" onSubmit={handleSubmit}>
            {hasError ? (
              <p className="hasError">{errorResponse}</p>
            ) : noError ? (
              <p className="noError">{successResponse}</p>
            ) : (
              ""
            )}
            <FormInput
              className="name-input"
              type="text"
              required={required}
              placeholder="Your Name"
              name="name"
              id="name"
              value={name}
              setValue={setName}
            />
            <FormInput
              className="email-input"
              type="email"
              required={required}
              placeholder="Email Address"
              name="email"
              id="email"
              value={email}
              setValue={setEmail}
            />
            <FormInput
              className="subject-input"
              type="text"
              placeholder="Subject"
              name="subject"
              id="subject"
              value={subject}
              setValue={setSubject}
            />
            <TextAreaInput
              placeholder="Enter Your Message..."
              required={required}
              name="message"
              form="contactForm"
              id="message"
              value={message}
              setValue={setMessage}
            />
            <Btn
              innerText={loading ? "Sending..." : "Send"}
              className="send-msg-btn"
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
