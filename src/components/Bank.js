import React from "react";

function Bank() {
  return (
    <div>
      <h1 className="my-3">Deposit / Withdraw</h1>
      <div className="actions my-3 d-flex justify-content-center">
        <button type="button" className="btn btn-primary mx-2">
          -
        </button>
        <span>Add to cart</span>
        <button type="button" className="btn btn-primary mx-2">
          +
        </button>
      </div>
    </div>
  );
}

export default Bank;
