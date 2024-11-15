import React, { useState } from "react";
import style from "./style.module.scss";

const index = ({setform}) => {
  const [email, setemail] = useState("");
  const [comment, setcomment] = useState("");
  const [rate, setrate] = useState(1);

  const rateHandler = (point) => {
    setrate(point);
  };
  const submitHandler = ()=>{
    
  }
  return (
    <>
      <div className={style.container}>
        <div
          onClick={() => {
            setform(false);
          }}
          className={style.overlay}
        ></div>
        <div className={style.formBox}>
          <div
            onClick={() => {
              setform(false);
            }}
            className={style.close}
          >
            X
          </div>
          <img
            className={style.image}
            src="https://images.unsplash.com/photo-1506792006437-256b665541e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Picture of the author"
          />

          <div className={style.right}>
            <h1>GET IN TOUCH</h1>
            <form>
              <div className={style.inputwrapper}>
                <input
                  className={style.inputtext}
                  type="email"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  placeholder=" "
                  required
                />
                <label className={style.inputlabel}>Email</label>
              </div>
              <div className={style.inputwrapper}>
                <textarea
                  className={style.inputtext}
                  id={style.textarea}
                  onChange={(e) => setcomment(e.target.value)}
                  value={comment}
                  type="text"
                  placeholder=" "
                  required
                />
                <label className={style.inputlabel}>Comment</label>
              </div>
              <div className={style.rate}>
                <h3>Rate Website</h3>

                <span onMouseEnter={() => rateHandler(1)}>
                  {rate >= 1 ? "★" : "☆"}
                </span>
                <span onMouseEnter={() => rateHandler(2)}>
                  {rate >= 2 ? "★" : "☆"}
                </span>
                <span onMouseEnter={() => rateHandler(3)}>
                  {rate >= 3 ? "★" : "☆"}
                </span>
                <span onMouseEnter={() => rateHandler(4)}>
                  {rate >= 4 ? "★" : "☆"}
                </span>
                <span onMouseEnter={() => rateHandler(5)}>
                  {rate >= 5 ? "★" : "☆"}
                </span>
                <br />
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
