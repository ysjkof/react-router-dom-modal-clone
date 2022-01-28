import Dialog from "@reach/dialog";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getImageById } from "../images";
import "@reach/dialog/styles.css";

export function Modal() {
  let navigate = useNavigate();
  let { id } = useParams<"id">();
  let image = getImageById(Number(id));
  // html element button을 설정하는 것 같음. js에서는 React.useFef();하면 끝.
  let buttonRef = React.useRef<HTMLButtonElement>(null);

  function onDismiss() {
    navigate(-1);
  }

  if (!image) return null;

  return (
    <Dialog
      aria-labelledby="label"
      onDismiss={onDismiss}
      // initialFocusRef는 모달창 열림 시 포커스 되는 걸 설정함. 현재 button element가 포커스된다.
      initialFocusRef={buttonRef}
    >
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          padding: "8px 8px",
        }}
      >
        <h1 id="label" style={{ margin: 0 }}>
          {image.title}
        </h1>
        <img
          style={{
            margin: "16px 0",
            borderRadius: "8px",
            width: "100%",
            height: "auto",
          }}
          width={400}
          height={400}
          src={image.src}
          alt=""
        />
        <button
          style={{ display: "block" }}
          // initialFocusRef 설정
          ref={buttonRef}
          onClick={onDismiss}
        >
          Close
        </button>
      </div>
    </Dialog>
  );
}
