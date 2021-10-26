import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, signIn } from './action';
import './App.css';



function App() {
  const dispatch = useDispatch();
  const Data = useSelector((fullState)=>fullState);
  const totalCounter = Data.count;
  const login = Data.logged;
  
  const signInHandler = (event)=>{
    dispatch(signIn());
    //console.log(event.target.innerText);
      if(login){
        console.log(login);
      event.target.innerText = "SignOut";
    }else{
      console.log(login);
      event.target.innerText = "SignIn";
    }
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>WelCome  To Redux</h1>
        
        <button onClick = {()=> dispatch(increase())} >+</button>
        <h3>Counter : {totalCounter}</h3>
        <button onClick = {()=> dispatch(decrease())} >-</button>
        <button onClick={signInHandler.bind(this)}>SignIn</button>
        
        
      </header>
    </div>
  );
}

export default App;
