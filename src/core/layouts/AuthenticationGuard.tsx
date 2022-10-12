import { Navigate, useLocation } from "react-router-dom";
import { useAuthenticate } from "src/application/authenticate";

function AuthenticationGuard({ children }: { children: JSX.Element }) {
  let auth = useAuthenticate();

  let location = useLocation();

  if (!auth?.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
}

export default AuthenticationGuard;
