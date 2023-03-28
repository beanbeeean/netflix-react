import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

export default function Banner({ movies }) {
  const navigate = useNavigate();
  const showDetail = (id) => {
    navigate(`/movies/${id}`);
  };
  let banner = movies.slice(0, 5);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <Slider {...settings}>
      {banner.map((item) => (
        <div onClick={() => showDetail(item.id)}>
          <div
            className="banner"
            style={{
              backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.poster_path})`,
            }}
          >
            <div className="banner-gradient">
              <div className="banner-info">
                <h1>{item.title}</h1>
                <p>{item.overview}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* <div>
        <div
          className="banner"
          style={{
            backgroundImage:
              "url(" +
              `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${banner[0].poster_path}` +
              ")",
          }}
        >
          <div className="banner-info">
            <h1>{banner[0].title}</h1>
            <p>{banner[0].overview}</p>
          </div>
        </div>
      </div> */}
    </Slider>
  );
}
