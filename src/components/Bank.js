import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function Bank() {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h1 className="my-3">Deposit / Withdraw</h1>
      <div className="actions my-3 d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={() => {
            withdrawMoney(100);
          }}>
          -
        </button>
        <span>Add to cart</span>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={() => {
            depositMoney(100);
          }}>
          +
        </button>
      </div>
    </div>
  );
}

export default Bank;
