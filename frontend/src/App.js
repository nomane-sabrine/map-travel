import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { AddLocation, Grade } from "@material-ui/icons";
import "./app.css";


function App() {
  const [viewport, setViewport] = useState({
    width: "110vw",
    height: "110vw",
    latitude: 46,
    longitude: 17,
    zoom: 2,
  });
  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoic2FicmJraW5lIiwiYSI6ImNrb3o4ZmJ5czBiNjUyb256aWdmbWp1dGIifQ.k7CmGey09HvZUhT-1oOfrw"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/sabrbkine/ckozarlzs3bck18nrymyxlax7"
      >
        <Marker
          latitude={37.145013}
          longitude={9.927666}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div>You are here</div>
          <AddLocation
            style={{ fontSize: viewport.zoom * 10, color: "blue" }}
          />
        </Marker>
        <Popup
          latitude={37.145013}
          longitude={9.927666}
          closeButton={true}
          closeOnClick={false}
          buttom="right"
        >
          <div className="card">
            <label>Place</label>
            <h3 className="place"> TUNIS </h3>
            <label>Review</label>
            <p>Capital of Tunisia</p>
            <label>Rating</label>
            <div className="stars">
              <Grade className="stars" />
              <Grade className="stars" />
              <Grade className="stars" />
              <Grade className="stars" />
              <Grade className="stars" />
            </div>
            <label>Information</label>
            <p>the capital and largest city of Tunisia </p>
            <button className="add">add Favo</button>
            <button className="delete"> Delete </button>
          </div>
        </Popup>
      </ReactMapGL>
    </div>
  );
}

export default App;

//https://visgl.github.io/react-map-gl/docs/get-started/get-started
