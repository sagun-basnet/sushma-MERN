import Button from "./Button";
const Navbar = ({ userName }) => {
  console.log(userName);

  return (
    <div className="underline p-2">
      {userName ? (
        <h1 className="text-xl">{userName}</h1>
      ) : (
        <Button text="Login" color="blue" textColor={"white"} />
      )}
      {userName && <h1 className="text-2xl">Welcome</h1>}
    </div>
  );
};

export default Navbar;
