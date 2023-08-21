import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

function LoginWithGoogle(){
    return(
        <div>
            <LoginSocialGoogle
            client_id={"59825482155-hk22j6d2i4807vrp7s9rksntt8367i4k.apps.googleusercontent.com"}
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={({ provider, data }) => {
            console.log(provider, data);
            }}
            onReject={(err) => {
            console.log(err);
            }}>
            <GoogleLoginButton />
            </LoginSocialGoogle>
        </div>
    )
}
export default LoginWithGoogle