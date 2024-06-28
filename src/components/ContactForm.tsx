const ContactForm = () => {
  return (
    <div className="container ">
      <h2 className="text-center">Send us a message</h2>
      <div className="row ">
        <div className="col-4"></div>
        <div className="col-4">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputMessage" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleInputMessage"
                aria-label="With textarea"
              ></textarea>
            </div>
            <div className="mb-3 form-check"></div>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
