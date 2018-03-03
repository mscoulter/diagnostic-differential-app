import {formatText} from '../formatHelper';

describe('formatText', ()=>{
  it('should make entries lowercase, replace spaces with underscores, and remove apostrophes and dashes', ()=>{
    const output = formatText("Park-in-son's Disease")
    expect(output).toEqual("park_in_sons_disease")
  })
})
