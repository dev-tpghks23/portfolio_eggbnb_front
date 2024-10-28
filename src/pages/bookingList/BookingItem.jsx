import React from 'react';
import S from './style';

const BookingItem = ({item, onClick, isActive }) => {

    // 년월일 형태로 변형해주는 메서드
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear(); 
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}년 ${month}월 ${day}일`;
    }

    return (
        // active할때 border색상 노랗게 하기 위해 isActive로 props 받음
        <S.BookingItemWrapper  className={isActive ? 'active' : ''} onClick={onClick}>
            <div className="textBox" >
                <div className="text">
                    <div className="title">{item.roomId.title}</div>
                    <div className="schedule">{`${formatDate(item.checkInDate)} ~ ${formatDate(item.checkOutDate)}`}</div>
                    <div className="briefAddress">{item.roomId.address}</div>
                    <div className="bookingCode"> 예약번호 : {item._id}</div>
                </div>
            </div>
            <div className="imgBox">
                <img src={item.roomId.roomImg[0]} alt="숙소 이미지"/>
            </div>
        </S.BookingItemWrapper>
    );
};

export default BookingItem;