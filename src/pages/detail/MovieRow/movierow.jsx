import React from "react";
import ListEpisode from "./ListEpisode/index"
import ListHighlight from "./ListHighlights/index"
const MovieRow = () => {
    return(
        <div>
            <ListEpisode/>
            <ListHighlight/>
        </div>
    )
}
export default MovieRow;