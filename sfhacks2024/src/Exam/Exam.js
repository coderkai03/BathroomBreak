
const Exam = () => {
    
    return (
        <div>
            <div className="exambar">
            <p className="exams">Exams</p>
    </div>
    <div className = "verticalline"></div>
      <div className="examcat">
        <div className="lawexam">
          <p className="law-enforcement">Law Enforcement</p>
          <p className="take-again">Take again</p>
        </div>
        <div className="socialexam">
          <p className="social-worker">Social Worker</p>
          <p className="start">Start</p>
        </div>
      </div>
      
      <div className="exam-edit">
      <p className="new-exam">New Exam</p>
      <div className="all-edit">
        <div className="edit-rect" />
        <p className="edit">Edit</p>
      </div>
    </div>
    <p className="topics">Topics to Include</p>
    </div>
    )
}

export default Exam