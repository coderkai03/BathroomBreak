import './Exam.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

import { Configuration, OpenAIApi } from "openai"


const Exam = () => {

  const history = useHistory()
    
  const handleSubmit = () => {
    history.push('/new-exam')
  }


    return (
        <div>
          <div className='exam-page'>
            <h1>Exams</h1>
            <div className='exam-sections'>
              <div className='examlist'>
              <div className="preview-div">
                <h1>Operator Exam</h1>
              </div>
              </div>
              <div className='exam-options'>
                <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <input type="checkbox" id="checkbox1" name="checkbox1" value="option1"/>
                    <label for="checkbox1" class="form-check-label">Domestic violence</label>
                  </div>
                  <div class="form-group">
                    <input type="checkbox" id="checkbox2" name="checkbox2" value="option2"/>
                    <label for="checkbox2" class="form-check-label">Human Rights</label>
                  </div>
                  <div class="form-group">
                    <input type="checkbox" id="checkbox3" name="checkbox3" value="option3"/>
                    <label for="checkbox3" class="form-check-label">Deescalation</label>
                  </div>
                  <button className='new-exam' type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Exam