/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

function DeleteModal(props) {
  return (
    <div>
      <section>
        <h3> Confirm deletion </h3>
        <h4> Are you sure you want to delete this note?</h4>
      </section>
      <section>
        <button type="button" onClick={props.onConfirm}> Delete </button>
        <button type="button" onClick={props.onCancel}> Cancel </button>
      </section>
    </div>

  );
}

export default DeleteModal;
