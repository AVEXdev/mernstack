import React, { useContext } from 'react'
import './NavigationBar.css'
import Logotype from '../../shared/images/logotype.png'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../shared/design/provider/UserProvider'
import { Profile } from '../profile/Profile'

export const NavigationBar = () => {
    const history = useHistory();
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const displayUserIfAuthenticated = () => {
        return (authenticatedUser)
            ? <div className="profile"> <Profile /> </div>
            : <span onClick={() => history.push('/signin')} className="signIn">Sign in</span>
    }

    return (
        <div className="navigationBarWrapper">
            <img onClick={() => history.push('/')}
                className="logotype"
                src={Logotype}
                alt="Error..." />
            {displayUserIfAuthenticated()}
        </div>
    )
}