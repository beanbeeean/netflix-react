import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./component/Navigation";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";

// 1. 3개 페이지 필요 홈페이지, movie 페이지, movieDetail 페이지
// 2. 홈페이지에서 배너를 볼 수 있다.
// 3. 3가지 섹션의 영화를 볼 수 있다.(popular, top rated, upcoming)
// 4. 각 영화에 마우스를 올려두면, 제목, 장르, 점수, 인기도, 청불여부
// 5. 영화를 슬라이드로 넘기면서 볼 수 있다.

// 6. 영화 디테일 페이지에서 영화에 대한 디테일한 정보를 볼 수 있다.(포스터, 제목, 줄거리, 점수, 인기도, 청불여부 등등)
// 7. trailer를 누르면 trailer 볼 수 있다.
// 8. 영화에 리뷰도 볼 수 있다.
// 9. 관련된 영화도 볼 수 있다.

// 10. 영화 검색을 할 수 있다.
// 11. 영화 정렬을 할 수 있다.
// 12. 영화 필터링 할 수 있다.

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
