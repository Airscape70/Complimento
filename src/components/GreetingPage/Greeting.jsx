
import s from './greeting.module.css'


export const GreetingTest = (props) => {

  return (
    <div className={s.container}>
      <div className={s.logo}>Complimento</div>

      <div className={s.testName}>Аттестация "Кухня"</div>

        <form className={s.testForm}>
          <ul>
            <li>ФИО сотрудника <input type="text" name="fullName" placeholder="Введите ваше ФИО" /></li>
            <li>Должность <input type="text"  name="jobTitle" placeholder="Введите вашу должность"/></li>
            <li>Дата прохождения теста <input type="data"  name="data" placeholder="Введите дату"/></li>
          </ul>
          <button>Принять</button>
        </form>

      <div className={s.warning}>Внимание! Тест ограничен по времени 120 минут!</div>

    </div>
  );
};
