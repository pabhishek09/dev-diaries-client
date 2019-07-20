let Profile;

const setProfile = (data) => {
  Profile = data;
  localStorage.setItem('user', JSON.stringify(Profile));
};

const getProfile = () => {
  const profileData = Profile || JSON.parse(localStorage.getItem('user'));
  if (profileData) {
    return profileData;
  } else {
    window.location.replace("/login");
  }
}

export { setProfile,  getProfile};
