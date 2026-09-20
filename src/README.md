// In react everything is component while buildinng UI
//First Letter of component must be Capital otherwise it will be treated as normal fun

// for named export it is to be done in the curly braces

// Use State

// const[fruit,setFruit]=useState("Apple")

//  function handleFruit() {
//       setFruit("Banana")
//  }

//  {/* <h1>{fruit}</h1>
// <button onClick={()=>{setFruit('Banana')}}>click Me</button> */}

// Props

// const name = "Saif"

// const user = {
//   username:"Saif",
//   age:29

// let [name,setName] = useState('Sahil')

{
  /* <div>
        <h1>Props in React</h1>
        <User name ={name} />
         <button onClick={()=>{setName("Raju")}}>change name</button>
      </div> */
}

// {/* <User name = {name} user ={user}/> */}

// Changing input value  using state

// Input Field Value

// const[val,setVal] = useState("Saif");

// <div>
//       <h2>{val}</h2>
//       <input type="text"  value={val} placeholder="Enter text" onChange={(event)=>{setVal(event.target.value)}}/>
//       <button onClick={()=>{setVal("")}} >clear</button>
//     </div>


// Controlled Component 

  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

{/* <div>
      <h1>Controlled Component</h1>

      <form action="" method="get">
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="password"
           value={password}
          placeholder="Enter Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input
          type="email"
           value={email}
          placeholder="Enter Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </form>

            <h1>{name}</h1>
            <h1>{password}</h1>
            <h1>{email}</h1>

      <button onClick={()=>{
        console.log('Form Submitted')
      }}>Submit</button>

      <button onClick={()=>{setName('');setEmail('');setPassword('')}}>Clear</button>
    </div> */}


// Radio and Dropdown 

import { useState } from "react";

function App() {
  const [gender, setGender] = useState("male");
  const [city,setCity] = useState('delhi')
  return (
    <div>
      <h1>Radio and Drop Down</h1>

      <input
        type="radio"
        checked={gender === "male"}
        onChange={(event) => {
          setGender(event.target.value);
        }}
        name="gender"
        id="male"
        value="male"
      />
      <label htmlFor="male">Male</label>
      <br />

      <input
        type="radio"
        checked={gender === "female"}
        onChange={(event) => {
          setGender(event.target.value);
        }}
        name="gender"
        id="female"
        value="female"
      />
      <label htmlFor="female">Female</label>
      <br />

      <p>Selected gender:{gender}</p>

      <br />
      <br />

      <select onChange={(event)=>(setCity(event.target.value))} defaultValue={"delhi"}>
        <option value="delhi">Delhi</option>
        <option value="lucknow">Lucknow</option>
        <option value="sultanpur">Sultanpur</option>
      </select>

      <p>Selected City : {city} </p>
    </div>
  );
}

export default App;


// Looping in jsx using Map


function App() {
  
    const userData=[{
      id:1,
      name:"Peter",
      age:'20',
      email:'peter@test.com'
    },
  
        {
      id:2,
      name:"Tony",
      age:'45',
      email:'tony@test.com'
    },

    {
      id:3,
      name:"Thor",
      age:'1500',
      email:'thor@test.com'
    },

    {
      id:4,
      name:"Natasha",
      age:'37',
      email:'natasha@test.com'
    },
  ]

  return (
    <div>
      <h2>Loops in JSX</h2>

      <table border="1" style={{padding:"3px",margin:"3px"}}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((item)=>{
              return <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
          </tr>
              
            })
          }
        </tbody>
      </table>

    </div>
  );
}

export default App;


// Reuse component loop in jsx 

import User from "./User";


function App() {
  
    const userData=[{
      id:1,
      name:"Peter",
      age:'20',
      email:'peter@test.com'
    },
  
        {
      id:2,
      name:"Tony",
      age:'45',
      email:'tony@test.com'
    },

    {
      id:3,
      name:"Thor",
      age:'1500',
      email:'thor@test.com'
    },

    {
      id:4,
      name:"Natasha",
      age:'37',
      email:'natasha@test.com'
    },
  ]

  return (
    <div>
      <h2>Reusing component Loops in JSX</h2>
        {
          userData.map((item)=>(
            <div key={item.id}>
              <User data ={item} />
            </div>
          ))
        }
    </div>
  );
}

export default App;


function User({ data}) {
    
  return (
    <div>
      <h3>Id:-{data.id}</h3>
      <h3>Name:-{data.name}</h3>
      <h3>Age:-{data.age}</h3>
      <h3>Email:-{data.email}</h3>
     
    </div>
  );
}

export default User;


// useEffect in React 

import { useEffect, useState } from "react";

function App() {

    const [count,setCount] =useState(0)

     function counter() {
    console.log('Counter function Called')
  }

    useEffect(()=>{
          counter()
    },[])

  return (
    <div>
      <h2>useEffect in React</h2>
        <p>Count:- {count} </p>
        <button onClick={()=>setCount(count + 1)}>count</button>
    </div>
  );
}

export default App;
// use effect in other component 

import { useState } from "react";
import Component from "./Component";

function App() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>useEffect in React handling props sideeffect</h2>
      <button onClick={() => setData(data + 1)}>Data</button>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <Component data={data} count={count} />
    </div>
  );
}

export default App;

import { useEffect } from "react";

const Component = ({ data, count }) => {
  function callOnly() {
    console.log("Called callOnly");
  }

  useEffect(() => {
    callOnly();
  }, [data]);

  return (
    <>
      <div>
        <p>Data:-{data}</p>
        <p>Count:- {count} </p>
      </div>
    </>
  );
};

export default Component;


// Derived state in react 
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleUser = () => {
    setUsers([...users, user]);
  };
  const totalUser = users.length;
  const lastUser = users[users.length - 1];
  const uniqueUser = [...new Set(users)].length;

  return (
    <>
      <h3>Derived State in React</h3>
      <p>Total User :- {totalUser}</p>
      <p>Last User :- {lastUser}</p>
      <p>Unique User :- {uniqueUser}</p>
      <input
        type="text"
        onChange={(event) => setUser(event.target.value)}
        placeholder="Enter user"
      />
      <button onClick={handleUser}>Enter User</button>

      {users.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
        </div>
      ))}
    </>
  );
}

export default App;


// Lifting StateUp

import { useState } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <div>
        <h3>Lifting StateUp</h3>
        <AddUser addUser={setUser} />
        <DisplayUser displayUser={user} />
      </div>
    </>
  );
}

export default App;

const AddUser = ({ addUser }) => {
  return (
    <>
      <h3>Add User</h3>
      <input
        type="text"
        placeholder="Enter User"
        onChange={(e) => addUser(e.target.value)}
      />
    </>
  );
};

export default AddUser;

const DisplayUser = ({ displayUser }) => {
  return (
    <>
      <div>
        <h3>Display User</h3>
        <p>User:-{displayUser}</p>
      </div>
    </>
  );
};

export default DisplayUser;


// updating array in state 
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "Saif",
    address: {
      city: "Delhi",
      country: "India",
    },
  });

  const handleData = (value) => {
    setData((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const handleCity = (value) => {
    setData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        city: value,
      },
    }));
  };

  return (
    <>
      <div>
        <h3>Updating Objects in React State</h3>
        <input
          type="text"
          placeholder="Enter user"
          onChange={(event) => handleData(event.target.value)}
        />

        <input
          type="text"
          placeholder="Enter City"
          onChange={(e) => handleCity(e.target.value)}
        />
        <p>City:{data.address.city}</p>
        <p>Nmae:{data.name}</p>
      </div>
    </>
  );
}

export default App;


// updating array in state

import { useState } from "react";

function App() {
  const [data, setData] = useState(["Sam", "Peter", "Jhon"]);
  const [name, setName] = useState("");

  const handleData = () => {
    setData((prev) => [...prev, name]);
    setName("");
  };

  return (
    <>
      <div>
        <h3>Updating Array in React State</h3>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={handleData}>Add</button>

        {data.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </>
  );
}

export default App;

// updating object in array inside state

import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Sam", age: 20 },
    { id: 2, name: "Peter", age: 25 },
    { id: 3, name: "Jhon", age: 30 },
  ]);

  const updateUser = (id, newName) => {
    setUsers((prev) => {
      return prev.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            name: newName,
          };
        }

        return user;
      });
    });
  };

  return (
    <div>
      <h2>Users</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>
            ID: {user.id} | Name: {user.name} | Age: {user.age}
          </p>

          <button onClick={() => updateUser(user.id, "Rahul")}>
            Change Name
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;


// context Api

import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./SubjectContext";

function App() {
  const [subject, setSubject] = useState("");
  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }}>
      <SubjectContext.Provider value={subject}>
        <h3>Context Api</h3>
        <select
          defaultValue={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="maths">Maths</option>
          <option value="english">English</option>
          <option value="science">Science</option>
        </select>
        <College />
      </SubjectContext.Provider>
    </div>
  );
}

export default App;
