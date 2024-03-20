import notFound from "../../assets/NotFound.jpeg";

const NotFound = () => {
  return (
    <div className="w-1/3 flex justify-center ">
      <img className="mx-auto" src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
