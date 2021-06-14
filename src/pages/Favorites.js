import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  const content =
    favoritesCtx.totalFavorites === 0 ? (
      <p>No Favorites added yet!</p>
    ) : (
      <MeetupList meetups={favoritesCtx.favorites} />
    );

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
