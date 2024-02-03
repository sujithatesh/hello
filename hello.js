function Counter() {
  let count = 0;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => count = count + 1
  }, "Increment"));
}

