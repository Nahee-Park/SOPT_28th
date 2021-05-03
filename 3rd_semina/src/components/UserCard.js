import React from "react";
import closeIcon from '../images/closeIcon.svg';
import githubIcon from '../images/githubIcon.svg';
import stroke from '../images/stroke.svg';
import styled from 'styled-components';

const UserCard = ({ data }) => {
    const UserCardWrap = styled.div`
    .UserCardContainer{
        width: 591px;
        height: 265px;
        background: #414141;
        border: 8px solid rgba(105, 105, 105, 0.5);
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
        border-radius: 40px;
    }
    .card-first{
        display: flex;
        /* align-items: center; */
    }
    .card-basic-info{
        position: relative;
        height: 70px;
        width: 521px;
    }
    .basic{
        position: absolute;
    }
    .icon-name{
        display: flex;
    }
    .githubIcon{
        padding-top: 42px;
        margin-left: 20px;
        padding-right: 8px;
    }
    .user-login{
        padding-top: 36px;
    }
    /* .user-name{} */
    .user-bio{
        padding-left: 23px;
        padding-top: 73px;
        font-family: Noto Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 132.5%;
        color: #DBDBDB;
    }
    .user-image {
        box-sizing: border-box;
        width: 70px;
        height: 70px;
        border-radius: 100px;
        margin-left: 47px;
        margin-top: 35px;
        filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.25));
    }
    .githubIcon {
        width: 24px;
        height: 24px;
    }
    .user-login{
        font-family: Noto Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        color: #DBDBDB;
    }
    .closeIcon{
        width: 18px;
        height: 18px;
        color: #2F2F2F;
        margin-right:26px;
        margin-top: 21px;
    }
    .user-link-container{
        cursor: pointer;
        position: absolute;
        margin-left: 377px;
        margin-top: 35px;
        width: 135px;
        height: 38px;
        background: #555555;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        /* padding: 6px 19px 8px 20px; */
    }
    a{
        font-family: Noto Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 132.5%;
        /* identical to box height, or 24px */
        color: #DBDBDB;
        text-decoration: none;
    }
    .user-link-container:hover{
        background-color: #DBDBDB;
        a{
            color: #555555;
        }
    }
    .card-second{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 497px;
        height: 97px;
        background: #2F2F2F;
        border-radius: 20px;
        margin-left: 47px;
        margin-top: 28px;
    }
    .name{
        font-family: Noto Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 132.5%;
        /* or 26px */

        display: flex;
        align-items: center;
        margin-bottom: 22px;
        color: #DBDBDB;
    }
    .data{
        font-family: Noto Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 132.5%;
        /* identical to box height, or 24px */
        /* padding-left: 18px; */
        display: flex;
        align-items: center;

        color: #DBDBDB;
    }
    .user-followers-data{
        padding-left: 
    }
    .stroke{
        position: absolute;
    }
    .user{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    `;
    return (
        data && (
            <UserCardWrap>
                <div className="UserCardContainer">
                    <div className="card-first">
                        <img className="user-image" src={data.avatar_url} alt="profil image" />
                        <div className="card-basic-info">
                            <div className="basic icon-name">
                                <img src={githubIcon} className="githubIcon"/> 
                                <div className="user-login">{data.login}</div>
                            </div>                          
                            {/* <div className="basic user-name">{data.name}</div> */}
                            <div className="basic user-bio">{data.bio}</div>
                        </div>
                        <div className="user-link-container" onclick="location.href='{data.html_url}';">
                            <a
                                className="user_link"
                                href={data.html_url}
                                alt=""
                                target="_blank"
                                rel="noreferrer"
                                >
                                    Go to Profile
                            </a>
                        </div>
                        <img src={closeIcon} className="closeIcon" /> 
                    </div>
                    <div className="card-second">
                        <div className="user user-followers">
                            <div className="user-followers-name name">Follower</div>
                            <div className="user-followers-data data">{data.followers}</div>
                        </div>
                        <div className="user user-following">
                            <div className="user-following-name name">Following</div>
                            <div className="user-following-data data">{data.following}</div>
                        </div>
                        <div className="user user-repos">
                            <div className="user-repos-name name">Repos</div>
                            <div className="user-repos-data data">{data.public_repos}</div>
                        </div>
                        <img src={stroke} className="stroke"/> 
                    </div> 
                </div>
            </UserCardWrap>
        )
    );
};

export default UserCard;
