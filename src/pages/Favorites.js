import React from "react";
import { useContext } from "react";
import MeetupList from "../meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

export default function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

let content;

if(favoritesCtx.totalFavorites ===  0)
{
  content = <p> You got no favorites yet. Start adding some? </p>
}else
{
  content = <MeetupList meetups={favoritesCtx.favorites}/>
}
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
