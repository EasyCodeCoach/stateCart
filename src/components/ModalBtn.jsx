import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showToggle } from "../features/modal/modalSlice";

function ModalBtn() {
  const dispatch = useDispatch();
  const { toggle } = useSelector((state) => state.modal);
  return (
    <div>
      <button
        onClick={() => dispatch(showToggle())}
        type="button"
        class="btn btn-primary my-3 mx-3"
      >
        {toggle ? "hide cart" : "show cart"}
      </button>
    </div>
  );
}

export default ModalBtn;
