import React, { Fragment } from 'react'

const privateData = () => {
    const arr = []
    return (
        <div>
            <div>
                <input type='checkbox' className='total'></input>
            </div>
            <div>
                <input type='checkbox' className='total'></input>
            </div>
            <div>
                <input type='checkbox' className='total'></input>
            </div>
            <div>
                <input type='checkbox' className='total'></input>
            </div>
            <div>
                <input type='checkbox' className='total'></input>
            </div>
            <div>
                <input type='checkbox' className='total'></input>
            </div>
        </div>
    )
}

const Join = () => {

    return (
        <Fragment>
            <form action='' method='get'>
                <div>
                    <label>id</label>
                    <input type='text' required></input>
                </div>
                <div>
                    <label>password</label>
                    <input type='password' required></input>
                </div>
                <div>
                    <label>password 확인하기</label>
                    <input type='password' required></input>
                </div>
                <button>가입하기</button>
            </form>
        </Fragment>
    )
}

export default Join