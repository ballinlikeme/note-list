export const Tasks = () => {
  <main className="tasks">
    <div class="tasks__container _container">
      <div className="tasks__filter">
        <label htmlFor="filter-input">Фильтрация</label>
        <input type="text" id="filter-input" />
      </div>
      <div className="tasks__row">
        <ul className="tasks__list">
          <li className="tasks__element">Task 1</li>
          <li className="tasks__element">Task 2</li>
          <li className="tasks__element">Task 3</li>
          <li className="tasks__element">Task 4</li>
        </ul>
        <ul className="tasks__list">
          <li className="tasks__element completed">Task 1</li>
          <li className="tasks__element completed">Task 2</li>
          <li className="tasks__element completed">Task 3</li>
          <li className="tasks__element completed">Task 4</li>
        </ul>
      </div>
    </div>
  </main>;
};
