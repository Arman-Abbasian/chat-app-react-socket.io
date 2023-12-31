import styled from "styled-components";

const navItems=[
    {id:1,name:"معامله P2P"},
    {id:1,name:"معامله سریع"},
    {id:1,name:"ثبت درخواست معامله"},
    {id:1,name:"درباره ما"},
    {id:1,name:"تماس با ما"},
    {id:1,name:"وبلاگ"}
]
export default function Header() {
  
  
  return (
    <>
    <HeaderContainer>
        <div className="Right">
        <svg width="56" height="56" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.99439C0 1.4421 0.447715 0.994385 1 0.994385H17C17.5523 0.994385 18 1.4421 18 1.99438V17.9944C18 18.5467 17.5523 18.9944 17 18.9944H1C0.447716 18.9944 0 18.5467 0 17.9944V1.99439ZM3.68917 9.429L3.69525 5.30912C4.77442 5.23775 7.73483 5.309 9.06226 5.29969C11.0268 5.28598 12.3766 5.08995 13.2961 6.44428C14.2 7.77572 13.6626 9.44038 12.5171 10.1441C11.928 10.506 11.5263 10.5303 10.8684 10.5351C10.5441 10.5375 10.55 10.5595 10.3804 10.3794C10.1122 10.095 9.1807 9.22716 9.0461 9.00786C9.14967 8.80149 10.2065 7.92197 10.354 7.62806L6.04004 7.63052L6.03952 11.9434C6.23917 11.8547 7.40937 10.5899 7.42346 10.571C7.75293 10.8991 9.50577 12.6198 9.75054 12.853C9.42651 13.1811 8.6075 13.9725 8.32044 14.2303C7.81758 13.7396 4.12324 9.86527 3.68917 9.429ZM1.50419 17.1694L5.40956 17.1605C5.24249 16.982 1.68173 13.3776 1.50665 13.2702L1.50419 17.1694ZM9.75054 12.853C10.0048 13.0473 10.2731 13.3552 10.5063 13.5901C10.7564 13.842 10.9735 14.0598 11.2256 14.3093L13.4229 16.5158C13.5575 16.6501 13.6631 16.752 13.7948 16.8854C13.9312 17.0237 13.9775 17.1504 14.2055 17.1708L17.1416 17.1667C17.0544 16.9895 15.2065 15.1676 14.865 14.8415L13.6915 13.6972C13.4175 13.4163 12.6939 12.76 12.5701 12.5314L12.7349 12.4489C13.4944 12.1247 14.0549 11.8766 14.6633 11.1784C15.8854 9.77567 16.3346 7.83197 15.5585 6.03723C15.1831 5.16935 14.6868 4.60843 14.0867 4.12328C12.4979 2.83826 10.6509 3.11768 8.27428 3.11898C6.02478 3.12014 3.75085 3.1513 1.50432 3.11704C1.53367 5.35128 1.47678 7.62573 1.50846 9.84252C1.52035 10.6692 1.33842 10.3535 2.27782 11.2952C3.77658 12.7981 5.23125 14.2891 6.74811 15.7764C6.68216 15.9203 6.22947 16.338 6.09331 16.4701C5.88203 16.6749 5.57998 16.9337 5.43141 17.1689L9.75753 17.1662L9.75054 12.853Z" fill="#FD2F70"/>
</svg>
{navItems.map(item=>{
    return <p className="navItem" key={item.nav}>{item.name}</p>
})}
        </div>
        <div className="Actions">
            <button className="button secondaryButton">ورود</button>
            <button className="button primaryButton">ثبت نام</button>
        </div>
    </HeaderContainer>
    </>
  );
}



const HeaderContainer = styled.div`
    display: flex;
    height:72px;
    width:100%;
    justify-content:space-between;
    align-items:center;
    padding: 16px 120px 16px 120px;
    .Right{
        display: flex;
    gap:32px;
    align-items:center;
    p{
        color:#4F4F4F;
        gap:1px;
        border-radius:4px;
    }
    }
    .Actions{
        display:flex;
        align-items:center;
        gap:4px;

        .primaryButton{
            width:84px;
            color:white;
            background-image: linear-gradient(31.82deg, #B51F4F -4.32%, #FD2F70 101.44%);
            border:none
        }
        .secondaryButton{
        border: 1px solid #FD2F70;
        color: #FD2F70;
        }
        .button{
            width: 84px;
            padding: 8px;
            border-radius: 8px;
            gap: 7px;
            cursoer:pointer;
        }
    }
  
`;
