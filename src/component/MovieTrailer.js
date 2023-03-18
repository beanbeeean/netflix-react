import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";

const MovieTrailer = () => {
  const [show, setShow] = useState(false);
  const { movieTrailer } = useSelector((state) => state.detail);
  let trailer = movieTrailer.results.find(
    (item) =>
      item.name === "Official Trailer" ||
      item.name === "Trailer" ||
      item.name.includes("official trailer")
  )
    ? movieTrailer.results.find(
        (item) =>
          item.name === "Official Trailer" ||
          item.name === "Trailer" ||
          item.name.includes("official trailer")
      )
    : movieTrailer.results[0] || null;

  const opts = {
    height: "800px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className="detail-trailer">
      <div className="trailer-area">
        <img
          width={300}
          src="https://americanbluestheater.com/wp-content/uploads/2015/06/watchtrailer.png"
          onClick={() => setShow(true)}
        />
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
        <Modal.Body>
          <YouTube videoId={trailer?.key} opts={opts} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MovieTrailer;
