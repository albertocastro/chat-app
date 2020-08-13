import TEST from "./app/index.js"
import Sidebar from "./components/Sidebar/Sidebar.js"
const event = new Event('refresh');
let i = 0
console.log(TEST)
const another = ()=>{
    const element = document.createElement('div');
    const clickHandler = ()=>{
     
        i++
        document.dispatchEvent(event)
    }
    
    element.innerHTML=`<div><button onClick='clickHandler()'>Refresh ${i}</button></div>`
    element.getElementsByTagName("button")[0].onclick = clickHandler
    return element
}
const App =() =>{
    const element = document.createElement('div');
    element.innerHTML="SUP"
    element.appendChild(another())
    element.appendChild(Sidebar())

    
    return element
  }
  document.addEventListener("refresh",()=>{
      console.log("refreshing")
      document.body.innerHTML = ""
    document.body.appendChild (  App()    )
  })
  document.body.appendChild( App());
  