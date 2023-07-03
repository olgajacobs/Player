
import styles from './Filter.module.css';

function FilterItem({buttons,setButtons,id,menuList})
{
    function buttonClick(buttonNumber){
        const tempArray=[false,false,false]
        tempArray[buttonNumber]=!buttons[buttonNumber];
        setButtons(tempArray);
    }
 return(
    <div className={styles.dropdown}>
        <button type="button" className={`${styles.filter__button} ${buttons[id]?styles.filter_btnSelected:""}`} onClick={()=>buttonClick(id)}>исполнителю</button>
        <div id="myDropdown" className={`${styles.dropdownContent} ${buttons[id]?styles.show:""}`}>
            {menuList}
        </div>
    </div>
    )

}
export default FilterItem