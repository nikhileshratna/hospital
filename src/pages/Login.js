import React from 'react'

const Login = () => {
  return (
    <div className='w-[50%] mx-auto '>
        <h1>
          Login to get your blood
        </h1>
        <form >
          <div class="form-group flex flex-col gap-3">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group flex flex-col gap-3">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <button type="submit" class="btn btn-primary mt-3">Submit</button>
        </form>
    </div>
  )
}

export default Login