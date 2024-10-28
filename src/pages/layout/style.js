import styled from "styled-components";
import theme from "../../global/theme";

const S = {};
const PALETTE = theme.PALETTE;

S.LayoutWrapper = styled.div`
    width: 100%;
`
S.Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    z-index: 999;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
    &.scrolled {
        border-bottom: 1px solid ${PALETTE.gray[300]};
    }
    
`
S.Logo = styled.span`
    font-size: 40px;
    font-weight: bold;
    color: ${PALETTE.yellow};
`
S.SearchWrapper = styled.div`
    position: absolute;
    border: 1px solid ${PALETTE.yellow};
    border-radius: 40px;
    height: 48px;
    left: 50%;
    transform: translate(-50%, 27px);
    background-color: white;
    top: 0;
    transition: top 0.3s;
    &.big{
        height: 68px;
    }
    &.ldown{
        top: 50px;
        box-shadow: 0 6px 6px rgba(0, 0, 0, 0.08);
    }
    &.down{
        top: 475px;
    }
    & .smallBox,.bigBox form{
        display: flex;
        justify-content: start;
        align-items: center;
    }
    & .smallBox{
        display: flex;
        height: 100%;
        & button{
            border: none;
            background-color: transparent;
            width: 100%;
            height: 100%;
            color: ${PALETTE.black};
            cursor: pointer;
            transition: 0.3s;
            &:active{
                transform: scale(0.95);
        }
        }
        &>div{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        &>span{
            display: inline-block;
            width: 1px;
            height: 24px;
            background-color: ${PALETTE.yellow};
        }
        &>div:first-of-type{
            width: 98px;
            & button{
                font-weight: 600;
            }
        }
        &>div:nth-of-type(2){
            width: 120px;
            & button{
                font-weight: 600;
            }
        }
        &>div:nth-of-type(3){
            width: 105px;
            & button{
                color: ${PALETTE.gray[300]};
            }
        }
        &>div:last-of-type{
            padding-right: 8px;
        }
    }
    &.big .smallBox{
        display: none;
    }
    & .bigBox{
        display: none;
        height: 100%;
        & form{
            position: relative;
        }
        & form>div{
            cursor: pointer;
        }
        & form>span{
            display: inline-block;
            width: 1px;
            height: 32px;
            background-color: ${PALETTE.yellow};
        }
        & form>div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            height: 100%;
            padding-left: 24px;
            transition: background-color 0.3s;
            border-radius: 40px;
            &.locationBox{
                width: 284px;
                & input{
                    border: none;
                    color: ${PALETTE.black};
                    background-color: transparent;
                    outline: transparent;
                    &::placeholder{
                        color: ${PALETTE.gray[300]};
                    }
                }
            }
            &.checkInBox{
                width: 141px;
            }
            &.checkOutBox{
                width: 141px;
                position: relative;
            }
            &.guestsBox{
                width: 226px;
                position: relative;
            }
            &:last-child{
                padding: 9px 9px 9px 0;
                display: block;
                &:hover{
                    background-color: transparent;
                }
            }
            &>div:first-of-type{
                font-weight: 600;
                font-size: 12px;
                margin-bottom: 4px;
                width: 100%;
            }
            &>div:nth-of-type(2){
                width: 100%;
                font-size: 14px;
                color: ${PALETTE.gray[300]};
            }
        }
        & .popup{
            display: none;
            position: absolute;
            top: 80px;
            box-shadow: 0 6px 10px rgba(0,0,0,0.15);
            border-radius: 20px;
            width: 300px;
            height: fit-content;
            padding: 15px;
            cursor: default;
            overflow-y: scroll;
            background-color: #fff;
            &::-webkit-scrollbar{
                width: 6px;
            }
            &::-webkit-scrollbar-thumb{
                background-color: ${PALETTE.yellow};
                border-radius: 3px;
            }
            &::-webkit-scrollbar-track{}
            &.location{
                display: block;
                left: 0;
                & .content{
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    & div{
                        width: calc(100% / 3);
                        padding: 0 5px;
                        margin-bottom: 10px;
                        & span{
                            font-size: 14px;
                            font-weight: 400;
                            border: 1px solid #DDDDDD;
                            border-radius: 15px;
                            padding: 10px 0;
                            display: inline-block;
                            transition: color border-color background-color 0.3s;
                            cursor: pointer;
                            width: 100%;
                            text-align: center;
                            &:hover{
                                background-color: ${PALETTE.yellow};
                                border-color: ${PALETTE.yellow};
                                color: #fff;

                            }
                        }
                    }
                }
            }
            &.checkIn{
                display: block;
                width: fit-content;
                height: fit-content;
                left: 50%;
                transform: translate(-50%);
                & .content{
                    & .rdrMonthAndYearWrapper{
                        padding: 0;
                    }
                    & .rdrDayToday .rdrDayNumber span:after{
                        background: ${PALETTE.yellow};
                    }
                    & .rdrMonthAndYearPickers{
                        flex-flow: row-reverse;
                    }
                    & .rdrMonth{
                        padding: 0 0.833em;
                    }
                }
            }
            &.guests{
                display: block;
                right: 0px;
                & .content{
                    padding: 15px 15px 5px;
                    & ul{
                        & li{
                            display: flex;
                            justify-content: space-between;
                            align-items: flex-start;
                            &>div{
                                &:first-child{
                                    & h6{
                                        font-size: 16px;
                                        margin-bottom: 5px;
                                    }
                                    & p{
                                        font-size: 12px;
                                        color: ${PALETTE.gray[300]};
                                        font-weight: 400;
                                    }
                                }
                                &:last-child{
                                    display: flex;
                                    align-items: center;
                                    & button{
                                        border: 1px solid ${PALETTE.gray[300]};
                                        border-radius: 50%;
                                        color: ${PALETTE.gray[300]};
                                        width: 20px;
                                        height: 20px;
                                        font-size: 16px;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        background-color: #fff;
                                        cursor: pointer;
                                        &:hover{
                                            border-color: ${PALETTE.yellow};
                                            color: ${PALETTE.yellow};
                                        }
                                    }
                                    & span{
                                        font-size: 16px;
                                        color: ${PALETTE.black};
                                        margin: 0 17px;
                                    }
                                }
                            }
                        }
                        & hr{
                            border: 0;
                            border-bottom: 1px solid ${PALETTE.gray[200]};
                            margin: 12px 0;
                        }
                    }
                }
            }
        }
        & .open{
            display: block;
            position: fixed;
            top: 100px;
            background-color: #ddd;
        }
    }
    &.big .bigBox{
        display: flex;
    }
    &.big a{
        width: 48px;
        height: 48px;
    }
`
S.SearchBtn = styled.div`
    overflow: hidden;
    & .searchBtn{
        display: block;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        background-color: ${PALETTE.yellow};
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.3s;
        & svg path{
            fill: white;
        }
    }
    & a:hover{
        background-color: #e79700;
    }
`
S.UserMenu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    border: 1px solid ${PALETTE.yellow};
    border-radius: 30px;
    width: 86px;
    min-width: 86px;
    height: 48px;
    cursor: pointer;
    transition: transform 0.3s;
    font-size: 14px;
    color: #F2AC29;
    & div:first-child{
        padding-left: 8px;
        & svg{
            width: 16px;
            height: 16px;
            & path{
                fill: ${PALETTE.yellow};
            }
        }
    }
    & div:nth-child(2) svg{
        width: 32px;
        height: 32px;
        & path{
            fill: ${PALETTE.yellow};
        }
    }
    & .userPopupBox{
        position: absolute;
        top: 60px;
        right: 0;
        border-radius: 20px;
        box-shadow: 0 6px 10px rgba(0,0,0,0.15);
        width: 200px;
        height: fit-content;
        padding: 15px;
        cursor: default;
        background-color: #fff;
        & ul{
            & li{
                & a{
                    color: ${PALETTE.black};
                    display: block;
                    padding: 10px;
                    font-size: 14px;
                    transition: 0.3s;
                    &:hover{
                        color: ${PALETTE.yellow};
                    }
                }
            }
        }
    }
`
S.Footer = styled.footer`
    width: 100%;
    height: 130px;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 28px 0 34px;
    border-top: 1px solid ${PALETTE.gray[200]};
    &>div{
        width: 100%;
        max-width: 1015px;
        display: flex;
        flex-direction: column;
        &>div{
            display: flex;
            &:first-child{
                justify-content: space-between;
                margin-bottom: 12px;
                &>div{
                    display: flex;
                    font-size: 14px;
                    &>div:first-child{
                        margin-right: 10px;
                        color: ${PALETTE.black};
                    }
                    &>div:last-child a{
                        color: ${PALETTE.black};
                    }
                }
            }
            &:last-child{
                border-top: 1px solid ${PALETTE.gray[200]};
                padding-top: 12px;
                & p{
                    font-size: 10px;
                    color: ${PALETTE.gray[300]};
                    line-height: 12px;
                }
            }
        }
    }
`
export default S;
