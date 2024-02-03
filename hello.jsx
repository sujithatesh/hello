function Counter() {
  let count = 0
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => (count = count + 1)}>
        Increment
      </button>
    </>
  );
}

