import { Navigate } from "react-router-dom";
import { useAuthValue } from "src/components/context/Auth/Context";

export default function PrivateRoute({ children }: any) {
  // @ts-ignore
  const { currentUser } = useAuthValue();

  if (!currentUser?.emailVerified) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}