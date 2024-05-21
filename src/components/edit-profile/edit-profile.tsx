import { FC } from "react";

const EditProfile: FC = () => {
  return (
    <div className="wrapper bg-white mt-sm-5">
      <h4 className="pb-4 border-bottom">Account settings</h4>
      <div className="d-flex align-items-start py-3 border-bottom">
        <img
          src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="img"
          alt=""
        />
        <div className="pl-sm-4 pl-2" id="img-section">
          <b>Profile Photo</b>
          <p>Accepted file type .png. Less than 1MB</p>
          <button className="btn button border">
            <b>Upload</b>
          </button>
        </div>
      </div>
      <div className="py-2">
        <div className="row py-2">
          <div className="col-md-6">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="bg-light htmlForm-control"
              placeholder="Steve"
            />
          </div>
          <div className="col-md-6 pt-md-0 pt-3">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="bg-light htmlForm-control"
              placeholder="Smith"
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-6">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              className="bg-light htmlForm-control"
              placeholder="steve_@email.com"
            />
          </div>
          <div className="col-md-6 pt-md-0 pt-3">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              className="bg-light htmlForm-control"
              placeholder="+1 213-548-6015"
            />
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-6">
            <label htmlFor="country">Country</label>
            <select name="country" id="country" className="bg-light">
              <option value="india" selected>
                India
              </option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="uae">UAE</option>
            </select>
          </div>
          <div className="col-md-6 pt-md-0 pt-3" id="lang">
            <label htmlFor="language">Language</label>
            <div className="arrow">
              <select name="language" id="language" className="bg-light">
                <option value="english" selected>
                  English
                </option>
                <option value="english_us">English (United States)</option>
                <option value="enguk">English UK</option>
                <option value="arab">Arabic</option>
              </select>
            </div>
          </div>
        </div>
        <div className="py-3 pb-4 border-bottom">
          <button className="btn btn-primary mr-3">Save Changes</button>
          <button className="btn border button">Cancel</button>
        </div>
        <div className="d-sm-flex align-items-center pt-3" id="deactivate">
          <div>
            <b>Deactivate your account</b>
            <p>Details about your company account and password</p>
          </div>
          <div className="ml-auto">
            <button className="btn danger">Deactivate</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
