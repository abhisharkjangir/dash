import React from "react";
import './fileBrowser.scss';
import Wrapper from "../wrapper";

const FileBrowser = ({
  id,
  type,
  name,
  value,
  onChange,
  label,
  disabled,
  className
}) => (
  <Wrapper className='mb-3'>
    <div className='file-browser'>
      <p>{label}</p>
      <div className="custom-file">
        <input type="file" className="custom-file-input" id={id} value={value} name={name} onChange={onChange} disabled={disabled} />
        <label className="custom-file-label" htmlFor={id}>Choose file</label>
      </div>
    </div>
  </Wrapper>
);

export default FileBrowser;
