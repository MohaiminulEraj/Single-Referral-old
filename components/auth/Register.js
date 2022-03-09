import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import ButtonLoader from '../layout/ButtonLoader'
import styles from '@/styles/AuthForm.module.css'
// import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'
// import Image from 'next/image'

const Register = () => {
    // const dispatch = useDispatch()
    const router = useRouter()
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const { email, password } = user
    // const [avatar, setAvatar] = useState('/images/default_avatar.jpg');
    // const [avatarPrevew, setAvatarPrevew] = useState('/images/default_avatar.jpg');
    // const { success, error, loading } = useSelector(state => state.auth)

    // useEffect(() => {

    //     if (success) {
    //         router.push('/account/login')
    //     }

    //     if (error) {
    //         toast.error(error);
    //         dispatch(clearErrors())
    //     }

    // }, [dispatch, success, error])

    // const [fullname, setFullname] = useState('')
    // const [username, setUsername] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // setLoading(true);
        if (password !== passwordConfirm) {
            toast.error('Password do not match!')
            return;
        }
        const userData = {
            fullname, username, email, password
        }
        dispatch(registerUser(userData))
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div className="container">

            <form className="row" onSubmit={handleSubmit}>
                <div className="col-md-6 my-3">
                    <div className="form-group">
                        <label htmlFor="email" >Email Address</label>
                        <input className="form-control" type="email" id="email" name="email" value={email} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control" type="password" id="password" name="password" value={password} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordConfirm" > Confirm Password</label>
                        <input className="form-control" type="password" id="passwordConfirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                    </div>
                </div>
                <div className="col-md-6 my-4">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label style={{ fontWeight: "bold" }} className="form-check-label" htmlFor="inlineRadio1">Profile Membership (VIP + Free)</label>
                        <br />
                        <small>(Seek out a life partner and earn financial benefits)</small>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label style={{ fontWeight: "bold" }} className="form-check-label" htmlFor="inlineRadio2">Affiliate Marketing (Free)</label>
                        <br />
                        <small>(Refer to others for sign up and get paid weekly)</small>
                    </div>
                    <table style={{ textAlign: "center" }} className="table table-bordered">
                        <thead>
                            <tr>
                                <th colSpan="4">Rate of Referral Rewards: C$ 100</th>
                            </tr>
                            <tr>
                                <th style={{ textAlign: 'start' }} scope="col">Description</th>
                                <th scope="col">VIP</th>
                                <th scope="col">Free</th>
                                <th scope="col">Affiliate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ textAlign: 'start' }}>Package Value</td>
                                <td>C$ 300</td>
                                <td>C$ 0</td>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'start' }}>Package Duration</td>
                                <td>300 Days</td>
                                <td>0 Days</td>
                                <td>N/A</td>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'start' }}>Contact User</td>
                                <td>Unlimited</td>
                                <td>View Only</td>
                                <td>N/A</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='form-group form-check'>
                        <input className="form-check-input" type="checkbox" id="ageCheck" onChange={onChange} required />
                        <label className="form-check-label" htmlFor="ageCheck">I am 18 years old or over.</label>
                    </div>

                    <div className='form-group form-check'>
                        <input className="form-check-input" type="checkbox" id="gridCheck" onChange={onChange} required />
                        <label className="form-check-label" htmlFor="gridCheck">
                            I accept the <Link href="/account/login"><a target="_blank">terms and conditions</a></Link> for membership.
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-danger btn-block mt-0">REGISTER</button>
                {/* <button type="submit" className="btn btn-danger btn-block" disabled={loading ? true : false} >{loading ? <ButtonLoader /> : 'REGISTER'} </button> */}
            </form>

            <p className='mt-3'>
                Already have an account? <Link href="/account/login">Login</Link>
            </p>
        </div>
    )
}

export default Register
