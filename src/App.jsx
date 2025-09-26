
import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const fetchFriends = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

const fetchPosts = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {
  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

  function handleClick(){
    alert('I am clicked');
  }

  const handleClick3 =()=>{
    alert('Clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }


  return (
    <>
      
      <h3>Vite + React</h3>

      <Suspense fallback={<h3>Posts are coming...</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      <Batsman></Batsman>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){alert('Clicked 2')}}>Click Me2</button>
      
      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={()=>(alert('Clicked 4'))}>Click Me 4</button>

      <button onClick={() => handleAdd5(71)}>Click Add 5</button>
    </>
  )
}

export default App
