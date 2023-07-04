import React, { useState } from 'react';

function Connect() {
  const [showForm, setShowForm] = useState(false);

  const handleConnectClick = () => {
    setShowForm(true);
  };

  return (
    <div style={{border: '1px solid white', width: '50%', height: '60%', flex: '1', margin: '25px 0px 0px 15px'}}>
      {showForm && (
        <div>
          <form>
            <div className="mb-3">
              <label htmlFor="InputEmail1" className="form-label">
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
                <label htmlFor='InputTextFeild' className='form-label'>
                  Add your text
                </label>
              <textarea 
               className='form-control'
               type='text '
               placeholder='Enter your text'
               /> 
            </div>
          </form>
        </div>
      )}
        <button className='button-effect' onClick={handleConnectClick}>Connect</button>
    </div>
  );
}

export default Connect;
