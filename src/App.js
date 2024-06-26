import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { useState } from "react";
import { createContext } from 'react';
import './App.css';
import Login  from './pages/Login';
import Register from './pages/Register';
import  {Home}  from './pages/Home';
import { UserHome } from './pages/UserHome';
import {Users} from './pages/Admin/Users';
import {Currency} from './pages/Users/Currency';
import {Help} from './pages/Admin/Help';
import {AddUser} from "./pages/Admin/AddUser";
import {Settings} from './pages/Admin/Settings';
import {DeleteUser} from "./pages/Admin/DeleteUser";
import {Accounts} from './pages/Admin/Accounts';
import { Personalization } from './pages/Admin/Personalization';
import  PasswordRecovery from './pages/PasswordRecovery';
import { PasswordReset } from './pages/PasswordReset';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Otp } from './pages/Otp';
import {Payments} from './pages/Admin/Payments';
import { CreateAccount } from './pages/Users/CreateAccount';
import { Transaction } from './pages/Users/Transaction';
import { HomeUsers } from './pages/Users/HomeUsers';
import { AccountOverview } from './pages/Users/AccountOverview';
import { Transactions1 } from './pages/Admin/Transactions1';
import { Loans } from './pages/Users/Loans';
import { AccountActivation } from './pages/AccountActivation';
import { CreateAccountAdmin } from './pages/Admin/CreateAccountAdmin';
import { PendingRequests } from './pages/Admin/PendingRequests';
import { SettingsUser } from './pages/Users/SettingsUser';
import { CurrencyAdmin } from './pages/Admin/CurrencyAdmin';
import { UserHelp } from './pages/Users/UserHelp';


export const RecoveryContext=createContext();

function App() {
  const [email,setEmail]=useState('');

  
  return (
   <div className="App">
      <Analytics/>
      <BrowserRouter>
        <RecoveryContext.Provider value={{email,setEmail}}>
          <Routes>
            
                <Route path="/" element={<Login/>} ></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/userhome" element={<UserHome/>}></Route>
                <Route path="/passwordrecovery" element={<PasswordRecovery/>}></Route>
                <Route path="/users" element={<Users></Users>}></Route>
                <Route path="/currency" element={<Currency></Currency>}></Route>
                <Route path="/payments" element={<Payments></Payments>}></Route>
                <Route path="/settings" element={<Settings></Settings>}></Route>
                <Route path="/help" element={<Help></Help>}></Route>
                <Route path="/adduser" element={<AddUser></AddUser>}></Route>
                <Route path="/accounts" element={<Accounts></Accounts>}></Route>
                <Route path="/passwordreset" element={<PasswordReset/>}></Route>
                <Route path="/otp" element={<Otp></Otp>}></Route>
                <Route path='/personalization' element={<Personalization></Personalization>}></Route>
                <Route path="/deleteuser" element={<DeleteUser></DeleteUser>}></Route>
                <Route path="/createaccount" element={<CreateAccount></CreateAccount>}></Route>
                <Route path='/transaction' element={<Transaction></Transaction>}></Route>   
                <Route path='/homeusers' element={<HomeUsers></HomeUsers>}></Route>      
                <Route path='/accountoverview' element={<AccountOverview></AccountOverview>}></Route>    
                <Route path='/transactions1' element={<Transactions1></Transactions1>}></Route>   
                <Route path='loans' element={<Loans></Loans>}></Route>
                <Route path='/activate' element={<AccountActivation></AccountActivation>}></Route> 
                <Route path='accountcrationadmin' element={<CreateAccountAdmin></CreateAccountAdmin>}></Route>
                <Route path='pendingrequests' element={<PendingRequests></PendingRequests>}>
                </Route>
                <Route path='settinguser' element={<SettingsUser></SettingsUser>}></Route>
                <Route path='/currencyadmin' element={<CurrencyAdmin></CurrencyAdmin>}></Route>
                <Route path='userhelp' element={<UserHelp></UserHelp>}></Route>
          </Routes>
        </RecoveryContext.Provider>
      </BrowserRouter>
    </div> 
  );
}

export default App;
