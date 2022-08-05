import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 90%;
  margin: 0 auto;
  height: max-content;
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey3);
  align-items: center;
  border-radius: 5px;

  .modal--header {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey2);
    border-radius: 5px 5px 0 0;

    h3 {
      margin-left: 1rem;
    }

    svg {
      margin-right: 1rem;
    }
  }

  .form--div {
    width: 90%;
    height: max-content;
    align-self: center;
    margin-top: 1rem;
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      p {
        color: var(--color-grey0);
        font-size: var(--font-size-headline);
        font-weight: var(--font-weight-headline);
      }

      label {
        align-self: flex-start;
        font-size: var(--font-size-headline);
        font-weight: var(--font-weight-headline);
        color: var(--color-grey0);
      }

      input {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        background-color: var(--color-grey2);
        outline: none;
        border: none;
        color: var(--color-grey0);
      }

      select {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: var(--color-grey2);

        color: var(--color-grey0);

        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: "";
      }

      button {
        width: 100%;
        height: 40px;
        margin-bottom: 1rem;
        border: none;
        color: var(--color-grey0);
        background-color: var(--color-primary);
        border-radius: 5px;
      }
    }
  }
`;
