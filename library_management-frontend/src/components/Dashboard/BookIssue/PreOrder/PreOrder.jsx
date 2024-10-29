import { useState } from "react";
import PreOrderList from "./PreOrderList";
import SearchUserPreOrder from "./SearchUserPreOrder";

const PreOrder = () => {
  const [preOrderList, setPreOrderList] = useState([]);
  return (
    <div>
      <div>
        <h1>Pre Order Books Issue</h1>
        <SearchUserPreOrder setPreOrderList={setPreOrderList} />
        <PreOrderList preOrderList={preOrderList} />
      </div>
    </div>
  );
};

export default PreOrder;
