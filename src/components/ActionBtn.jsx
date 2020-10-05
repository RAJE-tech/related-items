import React from 'react';
import StarRate from '@material-ui/icons/StarRate';
import { StarFill, XCircle, XCircleFill } from 'react-bootstrap-icons';

// light grey - "#FAFAFA"

const ActionBtn = (props) => {
  let btn;

  if (props.fav) {
    btn = <div>
            <div>
            <XCircle className='ets-remove-outline' size={20} />
            </div>
            <div>
            <XCircleFill className='ets-remove-fill' color='#E50000' size={18} />
            </div>
          </div>
  } else {
    btn = <div>
            <div>
              {/* <StarFill className='star-outline' color="black" size={20} /> */}
              <StarRate className='ets-star-outline' style={{fontSize: 35}}/>
            </div>
            <div>
              {/* <StarFill className='star-fill' color="#ffe976" size={16} /> */}
              <StarRate className='ets-star-fill' style={{fontSize: 26, color: "#ffe976" }}/>
            </div>
          </div>
  }

  return (
    <div>
      { btn }
    </div>
  );
};

export default ActionBtn;
