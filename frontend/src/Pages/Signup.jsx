import { useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api/Api';

function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const submit = async (e) => {
        e.preventDefault()
        try {
            const res = await API.post("/auth/register", form)
            alert("Signup successfull.")

        } catch (error) {
            alert("Signup error")

        }

    }
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <form className='flex flex-col gap-6 text-center' >
                <h1>Signup</h1>
                <input type="text" placeholder='Enter your Full Name'
                    onChange={e => setForm({
                        ...form,
                        name: e.target.value
                    })}

                    required />
                <input type="email" placeholder='Enter your email address'

                    onChange={e => setForm({
                        ...form,
                        email: e.target.value
                    })}

                    required />
                <input type="password" placeholder='Enter your password'
                    onChange={e => setForm({
                        ...form,
                        password: e.target.value
                    })}

                    required />
                <button type='submit'>Signup</button>
                <p>Already have an account ?
                    <Link to="/login">Login</Link>
                </p>

            </form>
        </div>
    )
}

export default Signup