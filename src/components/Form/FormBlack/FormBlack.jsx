import React from "react";
import styles from "./FromBlack.scss";
import Button from "../../ButtonMobile/Button";

const Form = () => {
  return (
    <form action="#" method="post">
      <div class="form2">
        <div class="input-container2 ic1 polos">
          <input id="firstname" class="input2" type="text" placeholder=" " />
          <label for="firstname" class="placeholder2">
            Имя
          </label>
        </div>
        <div class="input-container2 ic2 polos">
          <input id="lastname" class="input2" type="text" placeholder=" " />
          <label for="lastname" class="placeholder2">
            Телефон
          </label>
        </div>
        <div class="input-container2 ic2 polos">
          <input id="email" class="input2" type="text" placeholder=" " />
          <label for="email" class="placeholder2">
            Кампания
          </label>
        </div>
      </div>
      <div className="btnfromBlack">
        <Button name="ОСТАВИТЬ ЗАЯВКУ" color="white"/>
      </div>
    </form>
  );
};

export default Form;
