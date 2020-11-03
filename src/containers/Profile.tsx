import {Field} from "../components/profile/Field";
import React from "react";
import {IUser} from "../components/profile/IUser";

type User = {
    user: IUser;
};

const Profile = ({user}: User) => {
    const {age, avatar, foodType, likes, location, name, twitterUsername} = user;
    const twitterUrl = `https://twitter.com/@${twitterUsername}`;

    const profile = () => (
        <>
            <img src={avatar} alt={name}/>
            <h3>
                <a href={twitterUrl}>{name}</a>
            </h3>
            <Field title={"Location"} description={location}/>
            <Field title={"Eats"} description={foodType}/>
            <Field title={"Age"} description={age}/>
            <Field title={"Likes"} description={likes}/>
            <p>
                <strong>Twitter</strong>
                <a href={twitterUrl}>@{twitterUsername}</a>
            </p>
        </>
    );

    return <div>{profile()}</div>;
};

export default Profile;
