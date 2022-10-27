//Imported Styles
import classes from "./Profile.module.css";

//imported Asset
import ProfileImage from "../assets/profileImage.jpg";

const Profile = (props) => {
  return (
    <header className={classes.header}>
      <img src={ProfileImage} alt="Profile_Image" />
      <h2>Mfoniso U.</h2>
    </header>
  );
};

export default Profile;
