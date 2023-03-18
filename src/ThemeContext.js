import React, { useState } from "react";

export const StoreContext = React.createContext(null);

export default ({ children }) => {
  const [dateGte, setDateGte] = useState(1990);
  const [dateLte, setDateLte] = useState(2023);
  const [voteGte, setVoteGte] = useState(1);
  const [voteLte, setVoteLte] = useState(10);

  const store = {
    dateGte: [dateGte, setDateGte],
    dateLte: [dateLte, setDateLte],
    voteGte: [voteGte, setVoteGte],
    voteLte: [voteLte, setVoteLte],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
