import PropTypes from "prop-types";

function Modal1({fill0,fill1,fill2}){

  return (
   <>
   <div className="modal">
    <div className="header">
      <h3>Add {fill0}</h3>
      <button>delete</button>
    </div>
    <div className="body">
      <form action="" onSubmit={null}>
        <div className='firstfill'>
          <label htmlFor="firstfill">{fill1}</label>
          <input type="text" name="firstfill" id="firstfill" />
        </div>
        <div className="secondfiller">
          <div className="secondfill">
            <label htmlFor="secondfill">{fill2}</label>
            <input type="text" id="secondfill"/>
          </div>
          <div className="city">
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
        </div>
        <div className="dates">
          <div className="startdate">
            <label htmlFor="startdate">Start date</label>
            <div className="inputs">
              <input type="text" id="Startmonth" placeholder="Month"/>
              <input type="text" id="Startyear" placeholder="Year"/>
            </div>
          </div>
          <div className="enddate">
            <label htmlFor="enddate">End date</label>
            <div className="inputs">
              <input type="text" id="Endmonth" placeholder="Month"/>
              <input type="text" id="Endyear" placeholder="Year"/>
            </div>
          </div>
        </div>
        <div className="description">
          <label htmlFor="description">Description</label>
          <input type="text" placeholder="Description"/>
        </div>
      </form>
    </div>
   </div>
   </>)
}

Modal1.propTypes = {
  fill0 : PropTypes.string,
  fill1 : PropTypes.string,
  fill2 : PropTypes.string,

}
export default Modal1;