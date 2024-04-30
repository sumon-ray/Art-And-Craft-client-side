import {useContext} from 'react';
import {Navigate,useLocation} from 'react-router-dom'
import { UserContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const{user,loading} = useContext(UserContext);
    const location = useLocation()
    if(loading){
        return <h1 className="text-3xl">Loading</h1>
    }
    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/'} />
    }
    return (
        <div>   
         {children}
        </div>  
    );
};

export default PrivateRoute;









