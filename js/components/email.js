import React from 'react';
import {Link} from 'react-router';

export default function Email(props){
  return (
    <div>
        <Link to={`/emails/${props.folder}/${props.id}`}>
          <h3>From: {props.from} || Content: {props.content}</h3>
        </Link>
    </div>
  )
}
