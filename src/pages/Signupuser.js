import React from 'react'

const Signupuser = () => {
  return (
    <div >
        <h1 className='text-center'>Signup to get your blood</h1>
        <form className="needs-validation w-[70%] mx-auto  mt-5" novalidate>
            <div className="form-row">
                <div className="col-md-4 mb-3 flex flex-col w-full">
                    <div className="col-md-4 mb-3">
                    <label for="validationTooltip01" >First name</label>
                    <input type="text" className="form-control" id="validationTooltip01" placeholder="First name"  required/>
                    <div className="valid-tooltip">
                        Looks good!
                    </div>
                    </div>
                    <div className="col-md-4 mb-3">
                    <label for="validationTooltip02">Last name</label>
                    <input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" required/>
                    <div class="valid-tooltip">
                        Looks good!
                    </div>
                    </div>
                </div>
                <div>
                    <p>Please select your Gender:</p>
                    <div className='flex flex-row gap-2'>
                    <input type="radio" id="html" name="fav_language" value="HTML"/>
                    <label for="html">Male</label>
                    <input type="radio" id="css" name="fav_language" value="CSS"/>
                    <label for="css">Feamale</label>
                    <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                    <label for="javascript">Other</label>
                    </div>

                </div>
                <div className="col-md-4 mb-3 mt-3">
                    <label for="validationTooltipUsername">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                        </div>
                        <input type="text" className="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required/>
                        <div className="invalid-tooltip">
                        Please choose a unique and valid username.
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
            <div className='flex flex-col gap-3'>
                <label for="cars">Choose your Blood Group</label>
                <select name="cars" id="cars" className='w-[20%] border-black border'>
                    <option value="onegative">O negative</option>
                    <option value="opositive">O positive</option>
                    <option value="anegative">A negative</option>
                    <option value="apositive">A positive</option>
                    <option value="bnegative">B negative</option>
                    <option value="bpositive">B positive</option>
                    <option value="abnegative">AB negative</option>
                    <option value="abpositive">AB positive</option>
                </select>
            </div>
            <button className="btn btn-primary mt-[2rem]" type="submit">Submit form</button>
        </form>
    </div>
  )
}

export default Signupuser