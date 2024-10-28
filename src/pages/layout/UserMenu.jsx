import { faBars, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import S from './style';
import PopupBox4 from './PopupBox4';
import { useSelector } from 'react-redux';

const UserMenu = () => {
    const userStatus = useSelector((state)=>state.user.isLogin);
    const [menuState,setMenuState] = useState(false);
    const menuRef = useRef(null);
    const menuListRef = useRef(null);
    const setUserMenu = () => {
        if(menuState){
            setMenuState(false)
        }else{
            setMenuState(true)
        }
    }
    useEffect(() => {
        const handleOutsideClose = (e) => {
            // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
            if(menuState && (!menuRef.current.contains(e.target))){setMenuState(false)}
            else if(menuState && (menuListRef.current.contains(e.target))){setMenuState(false)}
        };
        document.addEventListener('click', handleOutsideClose);
        return () => document.removeEventListener('click', handleOutsideClose);
    }, [menuState]);
    
    return (
        <S.UserMenu ref={menuRef} onClick={setUserMenu}>
            {userStatus?
            <>
                <div><FontAwesomeIcon icon={faBars} /></div>
                <div><FontAwesomeIcon icon={faCircleUser} /></div>
            </>
            :
            <>
                로그인
            </>}
            <PopupBox4 menuState={menuState} ref={menuListRef}/>
        </S.UserMenu>
    );
};

export default UserMenu;