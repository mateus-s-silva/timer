import { styled } from "styled-components";

export const HomeContainer = styled("div")`
  display: flex;
  flex: 1;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3.5rem;
  }
`;

export const BaseCountdownButton = styled("button")`
  width: 100%;
  border: 0;
  border-radius: 8px;
  padding: 1rem;
  font-weight: bold;
  gap: 0.5rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme["red-500"]};
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme["red-700"]};
  }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
`;
