export const Content = ({ children, error }) => {
  return error ? (
    <>
      <h2>Ошибка</h2>
      <div>{error}</div>
    </>
  ) : (
    children
  );
};
