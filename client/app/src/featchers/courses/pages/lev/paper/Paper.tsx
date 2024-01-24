import React from 'react'
interface courseInterface{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    courseInfo: any;
}
function Paper({courseInfo}:courseInterface) {
  return (
    <div className="paper" style={{ border: "2px solid blue" }}>
    <div
      className="paper-content"
      data-testid="content-div"
      style={{ border: "2px solid pink" }}
    >
      <textarea value={courseInfo} readOnly></textarea>
    </div>
  </div>
  )
}

export default Paper