import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const board_list = [
    {
      'boardNo':'1'
      , 'title' : '1번 글'
      , 'content' : '1번 내용'
      , 'writer' : 'Java'
      , 'regDate' : '2024-02-01'
    }
    ,{
      'boardNo':'2'
      , 'title' : '2번 글'
      , 'content' : '2번 내용'
      , 'writer' : 'Html'
      , 'regDate' : '2024-01-21'
    }
    ,{
      'boardNo':'3'
      , 'title' : '3번 글'
      , 'content' : '3번 내용'
      , 'writer' : 'Python'
      , 'regDate' : '2024-01-25'
    }
    ,{
      'boardNo':'4'
      , 'title' : '4번 글'
      , 'content' : '4번 내용'
      , 'writer' : 'Css'
      , 'regDate' : '2021-05-14'
    }
    ,{
      'boardNo':'5'
      , 'title' : '5번 글'
      , 'content' : '5번 내용'
      , 'writer' : 'Javascript'
      , 'regDate' : '2020-02-01'
    }
  ]
let [isShow, setIsShow] = useState(false);
let [idx, setIdx] = useState(0);

  return (
    <div className="App">
      <div className='header'>
        <h4>게시글</h4>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <td>글 번호</td>
              <td>제목</td>
              <td>작성자</td>
              <td>작성일</td>
            </tr>
          </thead>
          <tbody>
            {
            board_list.map((board, i) => {
              return(
              <List key={i} idx={i} setIsShow={setIsShow} setIdx={setIdx} boardNo={board.boardNo} title={board.title} content={board.content} writer={board.writer} regDate={board.regDate}/>
              );
            })
            }
          </tbody>
        </table>
      </div>

      <div>
        {
          isShow ? <Detail i={idx} list={board_list}/> : ''
        }
      </div>
      
    </div>
  );
}

function List(props){
  return (
        <tr onClick={()=>{
          props.setIsShow(true)
          props.setIdx(props.idx)
        }}>
          <td>{props.boardNo}</td>
          <td>{props.title}</td>
          <td>{props.writer}</td>
          <td>{props.regDate}</td>
        </tr>
  );
}

function Detail(props){
  return(
    <div className='detail'>
    <p>글 번호 : {props.list[props.i].boardNo}</p>
    <p>글 제목 : {props.list[props.i].title}</p>
    <p>글 내용 : {props.list[props.i].content}</p>
    <p>작성자 : {props.list[props.i].writer}</p>
    <p>작성일 : {props.list[props.i].regDate}</p>
    </div>
  );
}

export default App;
