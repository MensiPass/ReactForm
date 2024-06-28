import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const ContactForm = () => {
  const schema = yup.object().shape({
    contactEmail: yup
      .string()
      .email()
      .required("This field is required and it has to be an email!"),
    contactMessage: yup.string().required("Message is required!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: {}) => {
    console.log(data);
  };
  return (
    <div className="container ">
      <h2 className="text-center">Send us a message</h2>
      <div className="row ">
        <div className="col-4"></div>
        <div className="col-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                {...register("contactEmail")}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <p className="text-danger m-2">{errors.contactEmail?.message}</p>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputMessage" className="form-label">
                Message
              </label>
              <textarea
                {...register("contactMessage")}
                className="form-control"
                id="exampleInputMessage"
                aria-label="With textarea"
              ></textarea>
              <p className="text-danger m-2">
                {errors.contactMessage?.message}
              </p>
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
