import { ReactElement, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthValue } from "src/components/context/Auth/Context";

interface PrivateRouteProps {
  children: ReactNode;
}
export default function PrivateRoute({ children }: PrivateRouteProps) {
  // @ts-ignore
  const { currentUser } = useAuthValue();

  if (!currentUser?.emailVerified) {
    return <Navigate to="/sign-in" replace />;
  }

  return <>{children}</>;
}