import { Form, Button } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import './Form.css'
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      FirstName: "",
      LastName: "",
      Email: "",
      Phone: "",
      Password: "",
      Gender: "",
      Hobbies: {},
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className=" container text-center text-dark ">
      <div className="row">
        <div className="col-5  m-auto">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="FirstName"
                {...register("FirstName",{required:true})}
              />
              <Form.Text className="text-danger">
               {errors && errors.FirstName && <p>FirstName required </p>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="LastName"
                {...register("LastName",{required:true})}
              />
              <Form.Text className="text-danger">
              {errors && errors.LastName && <p>LastName required </p>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label >Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="Email"
                {...register("Email",{required:true})}
              />
              <Form.Text className="text-danger">
              {errors && errors.Email && <p>Email required </p>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="Password"
                {...register("Password",{required:true})}
              />
                  <Form.Text className="text-danger">
              {errors && errors.Password && <p>Password required </p>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="Phone"
                {...register("Phone",{required:true})}
              />
               <Form.Text className="text-danger">
              {errors && errors.Phone && <p>Phone required </p>}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="me-2">Gender: </Form.Label>
              <Form.Check
                inline
                label="male"
                name="Gender"
                value="male"
                type="radio"
                {...register("Gender",{required:true})}
              />
              <Form.Check
                inline
                label="female"
                name="Gender"
                value="female"
                type="radio"
                {...register("Gender")}
              />
              <Form.Text className="text-danger">
              {errors && errors.Gender && <p>Gender required </p>}
              </Form.Text>
            </Form.Group>

            <Controller
              name="Hobbies"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select
                  isMulti
                  {...field}
                  options={[
                    { value: "Swimming", label: "Swimming" },
                    { value: "Reading", label: "Reading" },
                   
                  ]}
                />
              )}
             
            />
              <Form.Text className="text-danger">
              {errors && errors.Hobbies && <p>Gender required </p>}
              </Form.Text>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
