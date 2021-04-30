import React from "react";
// 안써도 자동 한국시간 가져오지만 확실히 하기위해
import 'moment/locale/ko';
import moment from "moment";
import "@public/calendar.css"

const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(nowTime)

const today = moment();
today.add(1,'days');

console.log(today)

function Calendar(){

}

const Handler = () =>{
    return(
        <div>
            <h2>Now : {nowTime}</h2>

            <div className="Calendar">
                <div className="head">
                    <button>
                        {/*<MdChevronLeft />*/}
                    </button>
                    <span className="title">December 2016</span>
                    <button>
                        {/*<MdChevronRight />*/}
                    </button>
                </div>
                <div className="body">
                    <div className="row">
                      {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((el) => (
                            <div className="box" key={el}>
                                <span className="text">{el}</span>
                            </div>
                        ))}
                    </div>

                    <div className="row">
                        <div className="box grayed">
                            <span className="text">28</span>
                        </div>
                        <div className="box grayed">
                            <span className="text">29</span>
                        </div>
                        <div className="box grayed">
                            <span className="text">30</span>
                        </div>
                        <div className="box selected">
                            <span className="text">1</span>
                        </div>
                        <div className="box">
                            <span className="text">2</span>
                        </div>
                        <div className="box">
                            <span className="text">3</span>
                        </div>
                        <div className="box">
                            <span className="text">4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Handler;