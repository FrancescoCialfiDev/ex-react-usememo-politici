import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useState, useEffect, useMemo, memo } from "react";

const baseUrl = "https://boolean-spec-frontend.vercel.app/freetestapi/politicians/";

async function fetchData(baseUrl) {
  try {
    const data = await fetch(baseUrl);
    const parseIntoObj = await data.json();
    return parseIntoObj;
  } catch (error) {
    console.error(error);
  }
}

// // MILESTONE 1
// 
// const PoliticiansCard = () => {
// 
//   const [politiciansList, setPoliticiansList] = useState([]);
// 
//   useEffect(() => {
//     fetchData(baseUrl)
//       .then(res => setPoliticiansList(res))
//       .catch(error => console.error(error.stack))
//   }, []);
// 
//   return (
//     <>
//       {politiciansList.map(element => <div key={element.id} className="card col-3 p-2 ">
//         <img src={element.image} style={{ height: "300px" }} className="card-img-top container-fluid" alt="..." />
//         <div className="card-body">
//           <div style={{ height: "280px" }}>
//             <h5 className="card-title">{element.name}</h5>
//             <p className="card-text">{element.biography}</p>
//             <p className="card-text"><strong>Role:</strong> {element.position}</p>
//           </div>
//           <a href="#" className="btn btn-primary">Show Details</a>
//         </div>
//       </div>)}
//     </>
//   )
// }
// 
// function App() {
//   return (
//     <>
//       <div className="container">
//         <div className="row g-2 ">
//           <PoliticiansCard />
//         </div>
//       </div>
//     </>
//   )
// }
// 
// export default App

// // // MILESTONE 2
//
// const PoliticiansCard = () => {
// 
//   useEffect(() => { fetchData(baseUrl).then(res => setPoliticiansList(res)).catch(error => console.error(error.stack)) }, []);
// 
//   const [politiciansList, setPoliticiansList] = useState([]);
//   const [value, setValue] = useState("")
// 
//   const filteredData = useMemo(() => {
//     const filtredName = politiciansList.filter((element) => element.name.toLowerCase().includes(value.toLowerCase()) || element.biography.toLowerCase().includes(value.toLocaleLowerCase()))
//     return filtredName
//   }, [politiciansList, value])
// 
//   return (
//     <>
//       <input type="text" placeholder="Ricerca avanzata" onChange={(e) => { setValue(e.target.value) }} value={value} />
//       {filteredData.map(element => <div key={element.id} className="card col-3 p-2 ">
//         <img src={element.image} style={{ height: "300px" }} className="card-img-top container-fluid" alt="..." />
//         <div className="card-body">
//           <div style={{ height: "280px" }}>
//             <h5 className="card-title">{element.name}</h5>
//             <p className="card-text">{element.biography}</p>
//             <p className="card-text"><strong>Role:</strong> {element.position}</p>
//           </div>
//           <a href="#" className="btn btn-primary">Show Details</a>
//         </div>
//       </div>)}
//     </>
//   )
// }
// 
// function App() {
//   return (
//     <>
//       <div className="container">
//         <div className="row g-2 ">
//           <PoliticiansCard />
//         </div>
//       </div>
//     </>
//   )
// }
// 
// export default App

// MILESTONE 3

// function App() {
// 
//   const [politiciansList, setPoliticiansList] = useState([]); // Variabile di stato per memorizzare i dati della fetch.
//   const [value, setValue] = useState("") // Variabile di stato con valore dell'input
// 
//   useEffect(() => {
//     fetchData(baseUrl)
//       .then(res => setPoliticiansList(res))
//       .catch(error => console.error(error.stack))
//   }, []); // Setta i dati al mounting del componenete.
// 
//   const filteredData = useMemo(() => {
//     const filtredName = politiciansList.filter((element) => element.name.toLowerCase().includes(value.toLowerCase()) || element.biography.toLowerCase().includes(value.toLowerCase()))
//     return filtredName
//   }, [politiciansList, value])
// 
//   return (
//     <>
//       <div className="container">
//         <input
//           style={{ margin: "10px", borderRadius: "10px", border: "1px solid black", padding: "5px 10px" }}
//           type="text"
//           placeholder="Ricerca avanzata"
//           onChange={(e) => { setValue(e.target.value) }}
//           value={value}
//         />
//         <div className="row g-2 ">
//           {filteredData.map((element) => {
//             return <PoliticiansCard id={element.id} image={element.image} name={element.name} biography={element.biography} position={element.position} />
//           })}
//         </div>
//       </div>
//     </>
//   )
// }
// 
// const PoliticiansCard = memo((props) => {
// 
//   console.log("Rendered:", props.id)
// 
//   return (
//     <>
//       <div key={props.id} className="card col-12 col-sm-6 col-md-4 col-lg-3 p-2">
//         <img src={props.image} style={{ height: "300px" }} className="card-img-top container-fluid" alt="..." />
//         <div className="card-body">
//           <div style={{ height: "280px" }}>
//             <h5 className="card-title">{name}</h5>
//             <p className="card-text">{props.biography}</p>
//             <p className="card-text"><strong>Role:</strong> {props.position}</p>
//           </div>
//           <a href="#" className="btn btn-primary">Show Details</a>
//         </div>
//       </div>
//     </>
//   )
// })
// 
// 
// 
// export default App

// MILESTONE 4 ( BONUS )

function App() {

  const [politiciansList, setPoliticiansList] = useState([]); // Variabile di stato per memorizzare i dati della fetch.
  const [value, setValue] = useState("") // Variabile di stato con valore dell'input
  const [selectValue, setSelectValue] = useState("")

  useEffect(() => {
    fetchData(baseUrl)
      .then(res => setPoliticiansList(res))
      .catch(error => console.error(error.stack))
  }, []); // Setta i dati al mounting del componenete.

  const derivated = politiciansList.reduce((acc, curr) => {
    if (!acc.some((element) => element === curr.position)) {
      acc.push(curr.position)
    }
    return acc
  }, [])
  console.log(derivated)

  const filteredData = useMemo(() => {
    const filtredName = politiciansList.filter((element) => element.name.toLowerCase().includes(value.toLowerCase()) || element.biography.toLowerCase().includes(value.toLowerCase()) && element.position.includes(selectValue))
    return filtredName
  }, [politiciansList, value, selectValue])


  return (
    <>
      <div className="container">
        <input
          style={{ margin: "10px", borderRadius: "10px", border: "1px solid black", padding: "5px 10px" }}
          type="text"
          placeholder="Ricerca avanzata"
          onChange={(e) => { setValue(e.target.value) }}
          value={value}
        />
        <select name="position" id="position" onChange={(e) => { setSelectValue(e.target.value) }}>
          {derivated.map((element) => <option key={element.id} value={element}>{element}</option>)}
        </select>
        <div className="row g-2 ">
          {filteredData.map((element) => {
            return <PoliticiansCard id={element.id} image={element.image} name={element.name} biography={element.biography} position={element.position} />
          })}
        </div>
      </div>
    </>
  )
}

const PoliticiansCard = memo((props) => {

  console.log("Rendered:", props.id)

  return (
    <>
      <div key={props.id} className="card col-12 col-sm-6 col-md-4 col-lg-3 p-2">
        <img src={props.image} style={{ height: "300px" }} className="card-img-top container-fluid" alt="..." />
        <div className="card-body">
          <div style={{ height: "280px" }}>
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.biography}</p>
            <p className="card-text"><strong>Role:</strong> {props.position}</p>
          </div>
          <a href="#" className="btn btn-primary">Show Details</a>
        </div>
      </div>
    </>
  )
})



export default App
