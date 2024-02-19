import logo from './logo.svg';
import './App.css';
import Footer from './Footer';

// App() 함수의 리턴 문 안에 html태그(JSX)를 작성하면 해당 내용이 화면에 출력된다.
// return 안 내용은 반드시 가장 큰 하나의 태그에 감싸져 있어야 한다.
// 의미없는 태그로 모든 내용을 감싸는 것은 불편하기에 빈 태그를 넣는 것이 허용된다.
// class를 node.js에서 사용하기 위해서는 className이라고 작성해야 함.
function App() {
  const name = '홍길동';
  const age = 20

  return (
    <>
      <div>
        {/* 변수 = 중괄호 */}
        헤더 {name}
      </div>
      {/* 쓰고싶은 컴포넌트로 이름=값 형태로 보내기111 */}
      <MainContent name={name}a age={age}/>
      <Footer />
    </>
  );
}

// 본문 영역 컴포넌트 (대문자로 시작하면 컴포넌트)
// 매개변수로 받아오기
function MainContent(props){
  return (
    <div>
      본문 영역 {props.name} {props.age}
    </div>
  );
}

export default App;
