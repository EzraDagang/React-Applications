import pacificRim from "../../assets/pacificRim.jpg";

function ProfilePicture(){

const handleClick = (e) => e.target.style.display = "none";
    
return(
        <img onClick={(e) => handleClick(e)} src={pacificRim} alt=""/>
    )
}

export default ProfilePicture;