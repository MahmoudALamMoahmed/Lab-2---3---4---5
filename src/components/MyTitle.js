function MyTitle({ head, titleClr }) {
  return (
    <>
      <h1 style={{ textAlign: "center" }} className={`text-${titleClr}`}>
        {head}
      </h1>
    </>
  );
}

export default MyTitle;
