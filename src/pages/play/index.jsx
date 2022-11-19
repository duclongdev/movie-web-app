import React from 'react'

const Play = () => {
  return (
    <div className="bg-red-600">Play</div>
  )


var Video =React.createClass({
  render: function(){
     return(
      <video width={520} height={380} controls >
           <source src="" type="video/mp4"> </source>
           <source src="" type="video/mp4"> </source>
      </video>
     );
  }
});
}
export default Play