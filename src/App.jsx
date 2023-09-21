
import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import ReusableForm from './components/ReuseableForm/ReusableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import StatefulForm from './StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {


  // const handleSignUpSubmit = data => {
  //   console.log('Sign up data', data);
  // }

  // const handleUpdateProfile = data => {
  //   console.log('Update profile data', data);
  // }

  return (
    <>

      <h1>Form Master</h1>
      <Grandpa></Grandpa>


      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}

      {/* <RefForm></RefForm> */}

      {/* <HookForm></HookForm> */}
{/* 
      <ReusableForm formTitle={'Sign Up'}
        handleSubmit={handleSignUpSubmit}>
          <div>
            <h2>Sign up</h2>
            <p>please sign up right now</p>
          </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>

      <div>
        <h2>Update profile</h2>
        <p>Always keep your profile updated</p>
      </div>

      </ReusableForm> */}
      
    </>
  )
}

export default App
