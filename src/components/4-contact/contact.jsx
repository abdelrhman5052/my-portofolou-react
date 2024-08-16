import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/Animation - 1723669196755.json";
import contactAnimation from "../../../public/animation/Animation - 1723671980660.json"

const Contact = () => {
  const [state, handleSubmit] = useForm("xblrkrzb");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex" style={{justifyContent: "space-between"}}>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input
              autoComplete="off"
              type="email"
              name="email"
              id="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="textarea"> Your message</label>
            <textarea
              name="message"
              id="textarea"
              placeholder="massege"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="btn">
            {state.submitting ? "submitting..." : "submit"}
          </button>

          {state.succeeded && (
            <p
              className="flex loo"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: "90px", marginRight: "-15px" }}
                animationData={doneAnimation}
              />
              your message has sent successfully
            </p>
          )}
        </form>

        <div className="animation">
          <Lottie className="contact-animation" style={{ height: "350px" , marginLeft: "-30px"}} animationData={contactAnimation} />
          </div>
      </div>
    </section>
  );
};

export default Contact;
