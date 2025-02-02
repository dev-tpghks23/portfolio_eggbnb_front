import { useState, useEffect, React } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";

const Success = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [responseData, setResponseData] = useState(null);
    const currentUser = useSelector(state => state.user.currentUser);
    const isLogin = useSelector(state => state.user.isLogin);
    const userOId = currentUser._id;
    const roomId = searchParams.get("roomId");
    const sdate = searchParams.get("sdate");
    const edate = searchParams.get("edate");
    const guests = searchParams.get("guests");
    const infants = searchParams.get("infants");
    const title = searchParams.get("title");
    const token = localStorage.getItem("token");

    // const bookingData = async() => {
    //     const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/booking/reservation/success?guests=${guests}&infants=${infants}&userId=${userId}&roomId=${roomId}&createdAt=${createdAt}&updatedAt=${updatedAt}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`);
    // };

    useEffect(() => {

        // bookingList fetch() 보내기
        async function bookingData () {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/booking/bookingsuccess`, {
                method: 'POST',
                body: JSON.stringify({
                    roomId: roomId,
                    checkInDate: sdate,
                    checkOutDate: edate,
                    guests: guests,
                    infants: infants,
                }),
                headers: {
                    "Content-Type" : "application/json; charset=utf-8",
                    'Authorization' : `Bearer ${token}`,
                },
            });
        };
        bookingData().then().catch(console.error)
        const requestData = {
            orderId: searchParams.get("orderId"),
            amount: searchParams.get("amount"),
            paymentKey: searchParams.get("paymentKey"),
        };

        // TODO: 개발자센터에 로그인해서 내 결제위젯 연동 키 > 시크릿 키를 입력하세요. 시크릿 키는 외부에 공개되면 안돼요.
        // @docs https://docs.tosspayments.com/reference/using-api/api-keys
        const secretKey = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";

        // 토스페이먼츠 API는 시크릿 키를 사용자 ID로 사용하고, 비밀번호는 사용하지 않습니다.
        // 비밀번호가 없다는 것을 알리기 위해 시크릿 키 뒤에 콜론을 추가합니다.
         // @docs https://docs.tosspayments.com/reference/using-api/authorization#%EC%9D%B8%EC%A6%9D
        const encryptedSecretKey = `Basic ${btoa(secretKey + ":")}`;

        async function confirm() {
            const response = await fetch("https://api.tosspayments.com/v1/payments/confirm", {
                method: "POST",
                headers: {
                Authorization: encryptedSecretKey,
                "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            const json = await response.json();

            if (!response.ok) {
            // TODO: 구매 실패 비즈니스 로직 구현
                navigate(`/fail?code=${json.code}&message=${json.message}`);
                return;
            }

        // TODO: 결제 성공 비즈니스 로직을 구현하세요.
            return json;
        }
        confirm().then((data) => {
            setResponseData(data);
        });
    }, [searchParams]);

    return (
        <div className="container">
            <div className="box_section" style={{ width: "600px" }}>
                <img width="100px" src="https://static.toss.im/illusts/check-blue-spot-ending-frame.png" alt="success" />
                <h2>결제를 완료했어요</h2>
                <div className="p-grid typography--p" style={{ marginTop: "50px" }}>
                    <div className="p-grid-col text--left">
                        <b>결제금액</b>
                    </div>
                    <div className="p-grid-col text--right" id="amount">
                        {`${Number(searchParams.get("amount")).toLocaleString()}원`}
                    </div>
                </div>
                <div className="p-grid typography--p" style={{ marginTop: "10px" }}>
                    <div className="p-grid-col text--left">
                        <b>예약된 숙소</b>{/* <b>주문번호</b> */}
                    </div>
                    <div className="p-grid-col text--right" id="orderId">
                    {`${searchParams.get("title")}`}{/* {`${searchParams.get("orderId")}`} */}
                    </div>
                </div>
                {/* <div className="p-grid typography--p" style={{ marginTop: "10px" }}>
                    <div className="p-grid-col text--left">
                        <b>paymentKey</b>
                    </div>
                    <div className="p-grid-col text--right" id="paymentKey" style={{ whiteSpace: "initial", width: "250px" }}>
                        {`${searchParams.get("paymentKey")}`}
                    </div>
                </div> */}
                <div className="p-grid-col">
                    {/* <Link to="https://docs.tosspayments.com/guides/payment-widget/integration">
                        <button className="button p-grid-col5">연동 문서</button>
                    </Link>
                    <Link to="https://discord.gg/A4fRFXQhRu">
                        <button className="button p-grid-col5" style={{ backgroundColor: "#e8f3ff", color: "#1b64da" }}>
                            실시간 문의
                        </button>
                    </Link> */}
                    <Link to="/bookingList">
                        <button className="button p-grid-col5">예약 목록 보러가기</button>
                    </Link>
                    <Link to="/">
                        <button className="button p-grid-col5" style={{ backgroundColor: "#e8f3ff", color: "#1b64da" }}>
                            메인 페이지 바로가기
                        </button>
                    </Link>
                </div>
            </div>
            {/* <div className="box_section" style={{ width: "600px", textAlign: "left" }}>
                <b>Response Data :</b>
                <div id="response" style={{ whiteSpace: "initial" }}>
                    {responseData && <pre>{JSON.stringify(responseData)}</pre>}
                </div>
            </div> */}
        </div>
    );
}


export default Success;