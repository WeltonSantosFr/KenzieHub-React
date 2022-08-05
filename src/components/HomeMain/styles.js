import styled from "styled-components";

export const HomeMainStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-grey4);
  color: var(--color-grey0);
  overflow: hidden;

  @media (min-width: 1024px) {
    width: 65%;
    margin: 0 auto;
  }

  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--color-grey4);
  }

  .header--main {
    width: 90%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;

    h3 {
      color: var(--color-grey0);
      font-size: var(--font-size-title1);
      font-weight: var(--font-weight-title1);
    }

    button {
      width: 30px;
      height: 30px;
      background-color: var(--color-grey3);
      color: var(--color-grey0);
      border: none;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .main--list {
    width: 90%;
    background-color: var(--color-grey3);
    height: 100%;
    align-self: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    overflow-y: scroll;

    ul {
      margin-top: 1rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      li {
        background-color: var(--color-grey4);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        height: 50px;
        border-radius: 5px;

        h3 {
          font-size: var(--font-size-title1);
          font-weight: var(--font-weight-title1);
          color: var(--color-grey0);
          margin-left: 1rem;
        }

        p {
          font-size: var(--font-size-headline);
          font-weight: var(--font-weight-headline);
          color: var(--color-grey1);
          margin-right: 1rem;
        }
      }
    }
  }
`;
