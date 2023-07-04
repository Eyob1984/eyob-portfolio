import React, { useState } from 'react';

function Connect() {
  const [showForm, setShowForm] = useState(false);
  const [char, setChar] = useState(250);

  const style = {
    width: '60%',
    height: '10rem'
  }
  const handleConnectClick = () => {
    setShowForm(true);
  };

  const handleChar = () => {
    setChar(char - 1)
  }

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
                style={{width: '60%'}}
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
               style={style}
               onChange={handleChar}
               /> 
            </div>
            <p>Maximum: {char}Char</p>
          </form>
        </div>
      )}
        <button className='button-effect' onClick={handleConnectClick}>Connect</button>
    </div>
  );
}

export default Connect;
