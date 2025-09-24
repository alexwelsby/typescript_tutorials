import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
    //experimenting with type assertion
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({ name: "Hey", email: "hey.@enail" });
  };
  const handleLogout = () => {
    //setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};
