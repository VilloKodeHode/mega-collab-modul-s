import style from "./LoadingSpinner.module.css";

/**
 * A loading indicator
 *
 * HTML and CSS taken from
 * @link https://loading.io/css/
 */
export function LoadingSpinner() {
  const color = "orange";

  return (
    <div style={{ "--color": color }} className={style["lds-roller"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
