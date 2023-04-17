import React from "react";
import propTypes from "prop-types";
const Profile = (props) => {
  return (
    <div>
      <h1
        onClick={() => {
          props.handlname(props.personne.name);
        }}
      >
        name:{props.personne.name}
      </h1>
      <h3>Bio:{props.personne.bio}</h3>
      <h5>Profession:{props.personne.profession}</h5>
      {props.children}
    </div>
  );
};
Profile.defaultProps = {};
Profile.propTypes = {
  name: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
  handlname: propTypes.func,
};

export default Profile;
