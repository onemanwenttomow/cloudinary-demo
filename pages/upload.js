import Image from "next/image.js";
import React, { useState } from "react";
import styled from "styled-components";

export default function Form() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log("Browser: response from API: ", data);

    if (data.secure_url) {
      setImage(data);
    } else {
      setError(data);
    }
  }

  return (
    <div>
      {image && (
        <div>
          <Image
            src={image.secure_url}
            alt="new image on cloudinary"
            height={image.height}
            width={image.width}
          />
        </div>
      )}
      {error && <div>{error.message}</div>}
      <StyledForm onSubmit={handleSubmit}>
        <input name="file" type="file" accept="image/*" />
        <button>Submit</button>
      </StyledForm>
    </div>
  );
}

const StyledForm = styled.form`
  padding: 24px;
`;
