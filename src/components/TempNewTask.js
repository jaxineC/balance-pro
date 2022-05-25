return (
  <div
    style={{
      top: Tasks.length * 22,
      left: clickPosition + XPosition + 130,
      borderStyle: "none",
      borderRadius: 5,
      backgroundColor: "buleviolet",
      objectFit: "scaleDown",
    }}
  >
    <input
      className="Task TextS"
      autoFocus
      type="text"
      placeholder="New task"
      value={inputText}
      onChange={(event) => setInputText(event.target.value)}
      style={{
        width: 140,
        top: Tasks.length * 22,
        left: clickPosition + XPosition,
        padding: 0,
        border: 1,
        borderStyle: "solid",
        borderColor: "blueviolet",
      }}
    ></input>
    <svg
      className="addBtn"
      onClick={handleAddTasktoDb}
      style={{
        height: 22,
        position: "absolute",
        left: clickPosition + XPosition + 145,
        top: Tasks.length * 22 + 2,
        padding: 0,
        margin: 0,
      }}
      fill="none"
      height="22"
      viewBox="0 0 24 24"
      width="18"
      // xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="m9.02975 3.3437c1.95365-.45827 3.98685-.45827 5.94055 0 2.8213.66179 5.0242 2.86472 5.686 5.68605.4583 1.95365.4583 3.98685 0 5.94055-.6618 2.8213-2.8647 5.0242-5.686 5.686-1.9537.4583-3.9869.4583-5.94055 0-2.82133-.6618-5.02425-2.8647-5.68605-5.686-.45827-1.9537-.45827-3.9869 0-5.94056.6618-2.82133 2.86472-5.02425 5.68605-5.68604zm6.02265 7.1336c.2165-.2319.2039-.59535-.028-.8118-.2319-.21644-.5953-.20391-.8118.028l-2.9448 3.1552-1.49422-1.4942c-.22431-.2243-.58798-.2243-.81228 0-.22431.2243-.22431.588 0 .8123l1.9146 1.9146c.1101.1101.2603.1708.416.1681.1558-.0027.3037-.0685.41-.1824z"
        fill="rgb(152, 152, 152)"
        fillRule="evenodd"
      />
    </svg>
  </div>
);
