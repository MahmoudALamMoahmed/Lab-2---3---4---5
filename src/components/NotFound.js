import MyTitle from "./MyTitle";

function NotFound() {
  return (
    <>
      <MyTitle head={"Not Found"} titleClr={"danger"} />
      <h1 className="text-danger"> 404 </h1>
    </>
  );
}

export default NotFound;
