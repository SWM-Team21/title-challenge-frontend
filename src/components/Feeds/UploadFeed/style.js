import styled from "@emotion/styled";

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 800px;
  padding-top: 190px;
`;

export const FileUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
  height: 640px;
  font-size: 40px;
  font-weight: 700;
  background-color: ${({ isDragOver }) =>
    isDragOver ? "#3a2d2799" : "#d1c7bd"};
  border-radius: 20px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 70px;
  border-radius: 50px;
  margin-top: 40px;
  font-size: 30px;
  font-weight: 700;
  color: #f1ece6;
  background-color: #a48374;
  cursor: pointer;
`;

export const SubmitBtn = styled.button`
  background: none;
  width: 400px;
  height: 70px;
  background-color: #3a2d27;
  color: #f1ece6;
  border: none;
  border-radius: 50px;
  margin-top: 40px;
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
`;
