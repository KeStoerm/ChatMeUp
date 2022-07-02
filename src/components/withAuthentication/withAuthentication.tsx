import { firebaseAuth } from "firebaseClient/clientapp";
import Router from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';

export const withAuthetication = (Component: React.ComponentType) => {
  const WrappedComp: React.FC = () => {
    const [user, loading, error] = useAuthState(firebaseAuth);
    const isAuthenticated = user && !loading;

    useEffect(() => {
      if (!user && !loading) {
        Router.push("/");
      }
    }, [ user, loading ])

    return isAuthenticated ? <Component /> : <></>;
  } 

  WrappedComp.displayName = `withAuthentication(${Component.name || Component.displayName || "Component"})`

  return WrappedComp;
}