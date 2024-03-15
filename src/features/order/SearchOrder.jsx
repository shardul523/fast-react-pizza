import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    navigate(`order/${searchQuery}`);
    setSearchQuery("");
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
