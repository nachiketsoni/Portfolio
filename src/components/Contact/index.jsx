import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import { useRef, useState } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Magnetic from "../../common/Magnetic";
import Link from "next/link";
import GetInTouchForm from "../GetInTouchForm";
export default function index({ setform }) {
  const [toast, setToast] = useState(null);
  const [getInTouchForm, setgetInTouchForm] = useState();
  const handleCopyClick = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast("Copied to clipboard!!");
      setTimeout(() => {
        setToast(null);
      }, 1000);
    } catch (err) {
      console.error("1", err);
      alert("Copy to clipboard failed.");
    }
  };
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <>
      <motion.div style={{ y }} ref={container} className={styles.contact}>
        {toast && (
          <div
            style={{
              position: "fixed",
              top: "25%",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "999999999",
              padding: "1rem 2rem",
              borderRadius: "100px",
              backgroundColor: "#4BB543",
            }}
          >
            {toast}
          </div>
        )}
        <div className={styles.body}>
          <div className={styles.title}>
            <span>
              <div className={styles.imageContainer}>
                <Image fill={true} alt={"image"} src={`/images/avatar.png`} />
              </div>
              <h2>Let's work</h2>
            </span>
            <h2>together</h2>
            <motion.div
              onClick={() => setform(true)}
              style={{ x }}
              className={styles.buttonContainer}
            >
              <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                <p>Get in touch</p>
              </Rounded>
            </motion.div>

            <motion.svg
              style={{ rotate, scale: 2 }}
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                fill="white"
              />
            </motion.svg>
          </div>
          <div className={styles.nav}>
            <Link target="_blank" href={"https://mailto:nxchikxt@gmail.com"}>
              <Rounded>
                <p> nxchikxt@gmail.com</p>
              </Rounded>
            </Link>{" "}
            <div onClick={() => handleCopyClick("+91 9522881872")}>
              <Rounded>
                <p>+91 9522881872</p>
              </Rounded>
            </div>
          </div>
          <div className={styles.info}>
            <div>
              <span>
                <h3></h3>

                <p>
                  made with{" "}
                  <Image
                    src={"/images/heart.webp"}
                    width={15}
                    height={15}
                    alt="❤️"
                  />{" "}
                  by nachiket soni
                </p>
              </span>
            </div>
            <div>
              <span>
                <h3>Socials</h3>
                <Magnetic>
                  <p>
                    <Link
                      target="_blank"
                      href={"https://linkedin.com/in/nachiket-soni"}
                    >
                      LinkedIn
                    </Link>
                  </p>
                </Magnetic>{" "}
              </span>
              <Magnetic>
                <p>
                  <Link
                    target="_blank"
                    href={"https://github.com/nachiketsoni"}
                  >
                    {" "}
                    Github
                  </Link>
                </p>
              </Magnetic>
              <Magnetic>
                <p>
                  <Link href={"https://leetcode.com/nxchikxt/"}></Link> Leetcode
                </p>
              </Magnetic>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
