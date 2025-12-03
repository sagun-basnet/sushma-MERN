import Card from "./components/Card";
import Count from "./components/Count";
import Navbar from "./components/Navbar";

const App = () => {
  const data = [
    {
      id: 1,
      name: "jhon",
      age: 25,
      email: "jhon@gmail.com",
    },
    {
      id: 2,
      name: "shyam",
      age: 24,
      email: "shyam@gmail.com",
    },
    {
      id: 2,
      name: "shyam",
      age: 24,
      email: "shyam@gmail.com",
    },
  ];
  return (
    <div>
      {/* <div className="grid grid-cols-4 gap-3">
        {data.map((item, index) => {
          return (
            <Card
              name={item.name}
              age={item.age}
              email={item.email}
              index={index}
            />
          );
        })}
      </div> */}

      <Count />
    </div>
  );
};

export default App;
