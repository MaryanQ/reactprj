import React from "react";
type ProfileProps = {
    name: string;
    email: string;
    isActive: boolean;
    singleLine: boolean;
};
declare const Profile: React.FC<ProfileProps>;
export default Profile;
