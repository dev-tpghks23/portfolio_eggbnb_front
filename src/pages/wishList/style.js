import styled, { keyframes } from "styled-components";
import theme from "../../global/theme";
import { flexCenterColumn } from "../../global/common";


const S = {};
const PALETTE = theme.PALETTE;

S.WishListContainer = styled.div`
    height: 200vh; //1vh = 1% of viewport height, vw
    position: relative;
        & .modalDecorate{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
            & .closeButton{
                position: absolute;
                top: -10px;
                left: 20px;
                font-weight: bold;
                cursor: pointer;
                padding: 8px 8px;
                border: none;
                border-radius: 3px;
                background-color: white;
                color : ${theme.PALETTE.yellow};

                &:hover {
                transition: 0.3s; // hover되면 0.3초동안 커짐
                transform: scale(1.3);
            }
            }
            & .modalBody{
                margin-top: 30px;
                margin-bottom: 20px;
                    & img {
                    width : 200px;
                    align-items: center;
                    margin-bottom: 30px;
                    }
                    & h2 {
                        font-size: 15px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    & h3{
                        font-size: 15px;
                        margin-bottom: 10px;
                    }
            }
            & .searchButton{
                background-color: ${theme.PALETTE.yellow};
                color: white;
                width: 145px;
                height: 30px;
                padding: 0 3px;
                border: 1px solid;
                border-radius: 50px;
                cursor: pointer;
                transition: 0.3s;

                &:hover {
                    color : ${theme.PALETTE.yellow};
                    background-color: white;
                }
                
            }
        }

`


S.PageTitle = styled.h1`
    color : ${theme.PALETTE.black};
    font-size: 28px;
    font-weight: bold;
    margin-top: 40px;
    margin-left: 60px;
`

/* 숙소카드 1개 */
/* 위시리스트 flex-container */
S.ContentBox = styled.div`
    display: flex;
    padding: 50px 50px 50px; //위쪽 내부여백만 0
    justify-content: flex-start; // justify-content : 가로방향 아이템 정렬
    align-items: flex-start; // align-items : 세로방향 아이템 정렬
    flex-wrap : wrap;//줄바꿈 가능
   
    /* 위시리스트 flex-item */
    & .content{
        position: relative;
        // default width(화면크기가 1000px보다 작을 때) : 전체의 50%
        width: 50%;
        padding: 10px; //<-이거 화면커지면 왜 적용 안되는지 알아보기
        transition: 0.3s; // hover되면 0.3초동안 커짐

        & .heart{
            position: absolute;
            top: 50px;
            right : 34px;
            width: 25px;
            height: 25px;
        }

        &:hover{//커서 이미지 위에 올리면 1.02배 커짐
            transform: scale(1.02);
        }
        // 반응형 미디어
        // 화면크기가 1000px 이상일 때,
        @media(min-width: 1000px){
            // 해당 숙소카드는 1개당 width를 33.333px로 보이게 하겠다.
            width: calc(100% / 3);
        }
        @media(min-width: 1300px){
            width: calc(100% / 4);
        }
        @media(min-width: 1550px){
            width: calc(100% / 5);
        }
        @media(min-width: 1900px){
            width: calc(100% / 6);
        }
 

        & a{ // 링크로 감싸준 부분
            & .imgBox{
                aspect-ratio: 5/3; //가로비율이 세로보다 조금 김
                border-radius: 20px;
                overflow: hidden; //삐져나오는 걸 가려줌
                & img{
                    width: 100%;
                    height: 100%; 
                    object-fit: cover; //전체 콘텐츠 상자를 채우면서 가로 세로 비율을 유지하도록 크기가 조정
                    border-radius: 20px;
                    }
                }
            & .textBox{
                padding: 20px 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 155px;
                &>div:last-child{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    & .price{
                        display: inline-block;
                        margin-left: 10px;
                        font-weight: bold;
                        letter-spacing: 0.8px;
                        color: ${PALETTE.yellow};
                    }
                }
                & .titleBox{
                    font-size: 20px;
                    margin-bottom: 13px;
                    font-weight: bold;
                    & h6{
                        line-height: 22px;
                        letter-spacing: 0.6px;
                        word-break: keep-all;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        color: ${PALETTE.black};
                    }
                }
                & .addAndPriceBox{
                    font-size: 14px;
                    margin-bottom: 28px;
                    & .address{
                        color: ${PALETTE.gray[300]};
                    }
                }
                & .linkBox{
                    font-size: 12px;
                    font-weight: bold;
                    color: ${PALETTE.black};
                }
        } }
    }
        
`

export default S;