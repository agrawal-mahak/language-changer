const Languageoption = (props) => {
    return(
        <div style={{marginTop:'5rem'}}>
            <select onChange={props.onChange}>
                <option >Select Language</option>
                <option value={'en'}>English</option>
                <option value={'ko'}>Korean</option>
                <option value={'chi'}>Chinese</option>
                <option value={'hi'}>Hindi</option>
            </select>
        </div>
        // <div className="dropdown">
        //     <button className="dropdown-btn">
        //         <select>Select Language</select>
        //     </button>
        //     <ul className="dropdown-content">
        //         <option value={'en'}>English</option>
        //         <option value={'ko'}>Korean</option>
        //         <option value={'chi'}>Chinese</option>
        //         <option value={'hi'}>Hindi</option>
        //     </ul>
        // </div>
    )
}
export default Languageoption;