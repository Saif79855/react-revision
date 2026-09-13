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
