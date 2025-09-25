import { Login } from "./Login";
import type { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>; //typing a component prop that's passed in
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Alex" />;
  } else {
    return <Login />;
  }
};
