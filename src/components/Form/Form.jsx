// В разработке .......
// ====================================================================
import React from "react";
import styles from "./Form.scss";
import Button from "../screen/Home/section/Footer/Button/Button";

const Form = () => {
  return (
    <form action="#" method="post">
      <div class="form">
        <div class="input-container ic1 polos">
          <input id="firstname" class="input" type="text" placeholder=" " />
          <label for="firstname" class="placeholder">
            Имя
          </label>
        </div>
        <div class="input-container ic2 polos">
          <input id="lastname" class="input" type="text" placeholder=" " />
          <label for="lastname" class="placeholder">
            Телефон
          </label>
        </div>
        <div class="input-container ic2 polos">
          <input id="email" class="input" type="text" placeholder=" " />
          <label for="email" class="placeholder">
            Кампания
          </label>
        </div>
      </div>
      <Button name="ОСТАВИТЬ ЗАЯВКУ"/>
    </form>
  );
};

export default Form;
