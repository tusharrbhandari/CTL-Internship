import { useState } from 'react';
import { FaBell, FaBellSlash, FaChartLine, FaComment, FaDownload, FaEnvelope, FaGoogle, FaLanguage, FaLocationArrow, FaMailBulk, FaMap, FaMapMarked, FaMapMarker, FaMapPin, FaMapSigns, FaMicrophone, FaMicrophoneAlt, FaRegBell, FaSearch, FaSearchLocation, FaSpeakap, FaSpeakerDeck, FaVolumeUp } from 'react-icons/fa';
import "./searchbar.css";
function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
<div className='s-bar'>
    <div className="l-header">
    <div className="just"><h2>Just</h2></div>
    <div className="dial"><h2>dial</h2></div>
    </div>
    <div className='header'>
    <p className='language'><a  href='https://en.wikipedia.org/wiki/Language'><FaLanguage />EN</a></p>
    <p className='hiring'>we are hiring</p>
    <p className='invester'>invester religion</p>
    <p className='lead'><FaEnvelope/>Leads</p>
    <p className='advertize'><FaVolumeUp/>advertize</p>
    <p className='listening'> <h6 className='bz'>Bussiness</h6><FaChartLine/>Free listing </p>
    <p className='bell'><FaBell/></p>
    <p className='upin'>signup/signin</p>
    </div>
   

    <div className="search-buss">
        <div className="search"><strong>Search across "4.7Crores+" </strong></div>
        <div className="buss"><h4>Bussiness</h4></div>
    </div>
    
    <div className='location'>
    <div className='map'><FaMapMarker/></div>betkuli,karwar
    <div className="inpt">
    <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        
      />
      <div className="microph"><FaMicrophone/></div>
      <div className="search-btn"><FaSearch/></div>
      {/* <button>Search</button> */}</div>

      <div className="download"><span>Download App</span></div>
    <div className="dbtn"><FaDownload/></div>
    </div>
    </div>
    

 
  );
};

export default Searchbar ;
