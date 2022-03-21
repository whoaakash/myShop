import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

// const SignIn = () => {
//     const logGoogleUser = async () => {
//         const {user} = await signInWithGooglePopup();
//         const userDocRef =await createUserDocumentFromAuth(user);
//         createUserDocumentFromAuth(user);
//     }
const SignIn = () => {
    const logGoogleUser = async () => {
      const response = await signInWithGooglePopup();
      createUserDocumentFromAuth(response);;
    };
  
    return (
        <>
            <h1>This is signIn page</h1>
            <button onClick={logGoogleUser} >signIn </button>
        </>
    )
}

export default SignIn;