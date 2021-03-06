import Main from "./pages/Main";
import Diary from "./pages/Diary";
import MainHeader from "./components/common/MainHeader";
import Calender from "./components/common/Calender";
import Title from "./components/common/Title";
import Footer from "./components/common/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserData } from "./lib/api";
import { userDataAtom } from "./states/atom";
import { useSetRecoilState } from "recoil";

//디폴트 값으로 현재의 년,월을 저장
const getCurrDate = () => {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();
  return { year: currYear, month: currMonth };
};

function App() {
  //년,월 데이터는 바뀌는 변수이므로 state로 선언
  const [year, setYear] = useState(getCurrDate().year);
  const [month, setMonth] = useState(getCurrDate().month);
  //userData를 recoil 변수에 넣을 것이므로 set준비
  const setUserData = useSetRecoilState(userDataAtom);

  //year,month 값이 바뀌면 그 year과 month에 해당하는 데이터값을 서버에서 데려옴
  useEffect(() => {
    (async () => {
      const data = await getUserData();
      data[year] && setUserData(data[year][month]);
      console.log(data);
    })();
  }, [year, month]);

  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Calender
          currYear={year}
          setCurrYear={setYear}
          currMonth={month}
          setCurrMonth={setMonth}
        />
        <Title />
        {/* Switch는 케이스 별로 나올 페이지를 제어한다*/}
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return <Main year={year} month={month} />;
            }}
          />
          <Route path="/diary/:id" component={Diary} />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
      <div className="App">React App</div>
    </>
  );
}

export default App;
