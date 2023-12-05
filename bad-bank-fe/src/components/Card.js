import React from 'react';

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? 'bg-' + props.bgcolor : '';
    const txt = props.txtcolor ? 'text-' + props.txtcolor : 'text-black';
    return 'card mb-3 ' + bg + ' ' + txt;
  }

  const cardStyle = {
    maxWidth: '800px',
    minWidth:'350px',
    width: '70%', // Ensure the card takes the full width
    height: '80vh',
    maxHeight: "500px",
    margin: '0 auto', // Center the card horizontally
    // backgroundImage: `url('${props.backgroundImage}')`,
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    

  };

  return (
    <div className={classes()} style={cardStyle}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}

export default Card;
