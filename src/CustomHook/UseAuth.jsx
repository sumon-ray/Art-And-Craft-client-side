import React,{useContext} from 'react';
import { UserContext } from '../AuthProvider/AuthProvider';

const UseAuth = () => {
const all = useContext(UserContext)
return all
};

export default UseAuth;