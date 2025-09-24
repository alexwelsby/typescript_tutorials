type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  //destructuring messageCount
  const { messageCount = 0 } = props; //if messageCount is included, use that, else, use 0
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Hello ${props.name}! You have ${messageCount} unread messages.`
          : "Welcome, guest."}
      </h2>
    </div>
  );
};
