import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMetupHandler(meetupData) {
    fetch("https://cors-proxy-5d1fc-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "content-type": "application/json" },
    }).then(() => history.replace("/"));
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
