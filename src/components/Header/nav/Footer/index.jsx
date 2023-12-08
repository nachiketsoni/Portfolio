import styles from "./style.module.scss";
import Link from "next/link";
import Magnetic from "../../../../common/Magnetic";
export default function index() {
  return (
    <div className={styles.footer}>
      <Link target="_blank" href={"https://linkedin.com/in/nachiket-soni"}>
        <Magnetic>
          <p>LinkedIn</p>
        </Magnetic>{" "}
      </Link>
      <Link target="_blank" href={"https://github.com/nachiketsoni"}>
        <Magnetic>
          <p>Github</p>
        </Magnetic>{" "}
      </Link>
      <Link target="_blank" href={"https://leetcode.com/nxchikxt/"}>
        <Magnetic>
          <p>Leetcode</p>
        </Magnetic>{" "}
      </Link>
    </div>
  );
}
