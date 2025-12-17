import MessageCard from "./MessageCard";

function App() {
  return (
    <div>
      <h2>Messages</h2>

      <MessageCard
        title="Welcome"
        message="Hi all, Good Morning...!"
      />

      <MessageCard
        title="Introduction"
        message="My name is K Niveda and I am from Hyderabad."
      />

      <MessageCard
        title="Qualification"
        message="I completed BTect in 2018 and worked as a Software Tester for Hexaware Technologies."
      />

      <MessageCard
        title="Thank You"
        message="Thank you for this opportunity, Bye....!"
      />
    </div>
  );
}

export default App;
