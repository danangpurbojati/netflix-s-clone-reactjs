import React, { useEffect } from 'react';
import app from '../../firebaseConfig';

const Testing = () => {
    const signUpButton = async () => {
        const email = 'joni';
        const password = '';

        try {
            const data = await app.auth().createUserWithEmailAndPassword(email, password);
            console.log('data', data);
        } catch (error) {
            console.log('signup error', error)
        }
    }

    const loginButton = async () => {
        const email = 'supra@gsda.com';
        const password = '123456';

        try {
            const data = await app.auth().signInWithEmailAndPassword(email, password);
            console.log('data login', data);
        } catch (error) {
            console.log(error)
        }
    }

    const logOutButton = async () => {
        try {
            await app.auth().signOut();
            console.log('keluar')
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        app.auth().onAuthStateChanged(user => {
            console.log('user', user);
        })
    }, [])

    return (
        <div style={{marginTop: 100}}>
            <h1>halaman testing</h1>
            <button onClick={signUpButton}>
                sign up test
            </button>
            <button onClick={loginButton}>
                loggin button
            </button>
            <button onClick={logOutButton}>
                log out
            </button>
        </div>
    )
}

export default Testing
