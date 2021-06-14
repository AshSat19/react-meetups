import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups?.map((m) => (
        <MeetupItem
          key={m.id}
          image={m.image}
          title={m.title}
          address={m.address}
          description={m.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
