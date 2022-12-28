import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    overflow: auto;
    width: 100%;
    max-height: 60vh;
    margin-bottom: 10px;

    border: 1px solid ${theme.palette.light.base};
    filter: drop-shadow(0px 6px 20px rgba(0, 0, 0, 0.08));
    border-radius: 12px;

    ::-webkit-scrollbar {
          width: 10px;
    }

    ::-webkit-scrollbar-track {
          border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.4);
          border-radius: 5px;
    }
`
