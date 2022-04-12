import { useState } from "react"
import { useForm } from "react-hook-form";

const FormExample = () => {
  const { register, handleSubmit } = useForm()
  const [login, setLogin] = useState("")

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setLogin({ 
  //     ...login,
  //     [name]: value
  //   })
  // } 

  console.log('login: ', login);

  return (
    <form className="w-50 m-5" onSubmit={handleSubmit((data) => setLogin(data))}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input {...register('email')} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input {...register('password')} type="password" name="password" className="form-control" id="exampleInputPassword1"  />
      </div>
      <div className="mb-3 form-check">
        <input {...register('checkme')} type="checkbox" className="form-check-input" name="checkme" id="exampleCheck1"  />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
 
export default FormExample;