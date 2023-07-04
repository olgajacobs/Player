import styles from "./FilterItem.module.css";

function FilterItem({ buttons, setButtons, id, menuList, buttonName }) {
  function buttonClick(buttonNumber) {
    const tempArray = [false, false, false];
    tempArray[buttonNumber] = !buttons[buttonNumber];
    setButtons(tempArray);
  }
  return (
    <div className={styles.main}>
      <button
        type="button"
        className={`${styles.filter__button} ${
          buttons[id] ? styles.filter_btnSelected : ""
        }`}
        onClick={() => buttonClick(id)}
      >
        {buttonName}
      </button>
      <div
        className={`${styles.dropdownContent} ${
          buttons[id] ? styles.show : ""
        }`}
      >
        {menuList}
      </div>
    </div>
  );
}
export default FilterItem;
