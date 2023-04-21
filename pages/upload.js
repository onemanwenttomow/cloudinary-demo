import Image from "next/image.js";
import React, { useState } from "react";
import styled from "styled-components";

export default function Form() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
  }

  return (
    <div>
      {image && (
        <div>
          <Image
            src={image.url}
            alt="new image on cloudinary"
            height={image.height}
            width={image.width}
          />
        </div>
      )}
      {error && <div>{error.message}</div>}
      <StyledForm onSubmit={handleSubmit}>
        <input name="file" type="file" />
        <button>Submit</button>
      </StyledForm>
    </div>
  );
}

const StyledForm = styled.form`
  padding: 24px;
`;
