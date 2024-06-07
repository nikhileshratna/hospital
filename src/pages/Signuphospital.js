import React from 'react'

const Signuphospital = () => {
  return (
    <div >
        <h1 className='text-center'>Signup to recieve and donate your blood</h1>
        <form className="needs-validation w-[70%] mx-auto  mt-5" novalidate>
            <div className="form-row">
                <div className="col-md-4 mb-3 flex flex-col w-full">
                    <div className="col-md-4 mb-3">
                      <label for="validationTooltip01" className='w-full' >Enter Hospital Name</label>
                      <input type="text" className="form-control" id="validationTooltip01" placeholder="Hospital name"  required/>
                      <div className="valid-tooltip">
                          Looks good!
                      </div>
                    </div>
                </div>
            </div>
            <div className="form-row w-[40%]">
                <div className="col-md-6 mb-3">
                    <label for="validationTooltip03">Email Address</label>
                    <input type="email" className="form-control" id="validationTooltip03" placeholder="Email" required/>
                    <div className="invalid-tooltip">
                        Please provide a valid Email.
                    </div>
                </div>
                <div>
                    <div className="col-md-6 mb-3">
                        <label for="validationTooltip03">Enter Password</label>
                        <input type="password" className="form-control" id="validationTooltip03"  required/>
                        
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="validationTooltip03">Confirm Password</label>
                        <input type="password" className="form-control" id="validationTooltip03" required/>
                    </div>  
                </div>
                <div className="col-md-6 mb-3">
                    <label for="validationTooltip03">City</label>
                    <input type="text" className="form-control" id="validationTooltip03" placeholder="City" required/>
                    <div className="invalid-tooltip">
                        Please provide a valid city.
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                <label for="validationTooltip04">State</label>
                <input type="text" className="form-control" id="validationTooltip04" placeholder="State" required/>
                <div className="invalid-tooltip">
                    Please provide a valid state.
                </div>
                </div>
                <div className="col-md-3 mb-3">
                <label for="validationTooltip05">Zip</label>
                <input type="text" className="form-control" id="validationTooltip05" placeholder="Zip" required/>
                <div className="invalid-tooltip">
                    Please provide a valid zip.
                </div>
                </div>
            </div>
            <button className="btn btn-primary mt-[2rem]" type="submit">Submit form</button>
        </form>
    </div>
  )
}

export default Signuphospital