import React, { useState ,useEffect} from 'react';
import './style.css';
import axios from"axios"

const Home = () => {

  const [file, setFile] = useState(null);
  const [data, setdata] = useState("")
  const [data1, setdata1] = useState([])


  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }


  console.log(data)

  const fetchuserdetail = async () => {

    const x = await axios.get("apiuserdetail")
    setdata1(x.data)
  }
  useEffect(() => {
    fetch()
  }, [])

  return (
    <div className='home'>
      <div className="heading">
        Student Record Management
      </div>
      <div className="input-container" style={{fontSize:"1.2rem"}}>
        Please enter your student ID:
        <input type="text" placeholder='Student ID' className="input-box" onChange={(e) => setdata(e.target.value)} />
        <button className='search-btn'>Search</button>
      </div>
      <div className="student-details">
        <div className="student-details-heading">
          Student Details:
        </div>
        <div className="student-details-box">
          <div className="details-box">
            <div className="top">
              <div className="details-tag">
                <div className="label">
                  Name
                </div>
                -<input type="text" className="student-details-input" />
              </div>
              <div className="details-tag">
                <div className="label">
                  Id
                </div>
                -<input type="text" className="student-details-input" />
              </div>
              <div className="details-tag">
                <div className="label">
                  Advisor Code
                </div>
                -<input type="text" className="student-details-input" />
              </div>
              <div className="details-tag">
                <div className="label">
                  Branch
                </div>
                -<input type="text" className="student-details-input" />
              </div>
              <div className="details-tag">
                <div className="label">
                  Batch
                </div>
                -<input type="text" className="student-details-input" />
              </div>
            </div>

            <div className="middle">
              <div className="details-tag">
                <div className="label">
                  Mobile Number
                </div>
                -<input type="number" className="student-details-input" />
              </div>
              <div className="details-tag">
                <div className="label">
                  Email
                </div>
                -<input type="email" className="student-details-input" />
              </div>
              <div className="details-tag">
                <div className="label">
                  Addresss
                </div>
                -<input type="name" className="student-details-input" />
              </div>
            </div>

            <div className="bottom">
              <div className="details-tag">
                <div className="label">
                  Hostel
                </div>
                -<input type="number" className="student-details-input" />
              </div>
              <div className="details-tag">
                <div className="label">
                  Room Number
                </div>
                -<input type="number" className="student-details-input" />
              </div>
            </div>

          </div>

          <div className="student-profile">
            <img src={file || require("../../images/img_avatar.png")} alt='profile-img' />

            <button>
              <input type="file" onChange={handleChange} className="profile-picture-upload"/>
              Update Profile Picture
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home;