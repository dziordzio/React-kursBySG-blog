import { combineReducers } from "redux";

export const songsReducer = () => {
	return [
		{ title: "No Scrubs", duration: "3:13" },
		{ title: "Macarena", duration: "4:24" },
		{ title: "Psalm XI", duration: "5:34" },
		{ title: "Tango na ...", duration: "5:10" }
	];
};

export const selectedSongReducer = (selectedSong = null, action) => {
	switch (action.type) {
		case "SONG_SELECTED":
			return action.payload;
		default:
			return selectedSong;
	}
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
