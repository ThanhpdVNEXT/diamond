type propTask = {
  date: any,
}
const Task = (props: any) => {
  return (
    <div className="container">
      <ul className="timeline">
        <li className="task">
          <div className="bd-task">
            <div className="row">
                <div className="title"></div>
              <div className="col-left">
                <p>
                お引取り
                </p>
              </div>
              <div className="col-right">
                <p className="due">2022/12/21　9:00</p>
              </div>
            </div>
          </div>
        </li>
        <li className="task">
          <div className="bd-task">
            <div className="row">
                <div className="title"></div>
              <div className="col-left">
                <p>
                お引取り
                </p>
              </div>
              <div className="col-right">
                <p className="due">2022/12/21　19:00</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Task;
