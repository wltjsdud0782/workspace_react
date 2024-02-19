import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // let title = '첫번째 글';

  let arr = [1,2];
  let num1 = arr[0];
  let num2 = arr[1];
  
  let [a, b] = [1,2];
  console.log(a); // 1 출력
  console.log(b); // 2 출력

  //state 변수
  let [title, setTitle] = useState(['리액트 학습', '울산 맛집', '겨울 코트 추천']);
  let [likeCnt, setLikeCnt] = useState([0,0,0]);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그</h4>
      </div>

      <button type='button' onClick={() => {
        let title2 = [...title]; // title의 주소값이 아닌 다른 주소로 같은 값 저장
        title2[0] = '남자 옷 추천';
        setTitle(title2);
      }}>글 변경</button>

      {
      title.map((e, i)=>{
        return(
          <List title={e} likeCnt={likeCnt} idx={i} setLikeCnt={setLikeCnt}/>
        );
      })
      }
    </div>
  );
}

// 블로그 글 하나하나를 표현하는 컴포넌트
function List(props){
  return (
    <div className='list'>
        <h4>{props.title}<span onClick={() => {
          let copyLikeCnt = [...props.likeCnt];
          copyLikeCnt[props.idx]++;
          props.setLikeCnt(copyLikeCnt);
        }}> 👍 </span>{props.likeCnt[props.idx]}</h4>
        <p>2월 19일 작성</p>
      </div>
  )
}

export default App;
