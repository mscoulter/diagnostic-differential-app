import React from 'react'
import {
  Input,
  Button
} from 'semantic-ui-react'

export const Home = ({
  addDiagnosis,
  clinicalFeatures,
  diagnosis,
  diagnosisChange,
  displayDiff,
  toggleDisplay
}) => {

  return (
    <div>
      <div className="ui grid container">
        <div className="four wide column">
          Problem #1
          <div className="ui action input">
            <Input type="text" placeholder='Enter Problem...' />
            <Button onClick={toggleDisplay} className="ui button primary">Develop</Button>
          </div>
        </div>
      </div>
      {displayDiff &&
      <div>
      <div className="ui grid">
        <div className="two wide column"></div>
        <div className="six wide column">
          Diagnosis #1
          <div className="ui fluid icon input">
            <input type="text" placeholder="Enter Diagnosis..." value={diagnosis} onChange={diagnosisChange}/>
          </div>
          {clinicalFeatures &&
          <div className="ui celled list">
            {clinicalFeatures.map(feature=>{
              return <div className="item">{feature}</div>
            })}
          </div>
          }
        </div>
        <div className="six wide column">
          Related Diagnoses
          <div className="ui fluid icon input">
            <input type="text" placeholder="Enter Diagnosis..."/>
          </div>
        </div>
        <div className="two wide column"></div>
        <div className="two wide column"></div>
      </div>
      <Button primary onClick={addDiagnosis}>Add Diagnostic Item</Button>
      </div>
      }
    </div>
  )
}
