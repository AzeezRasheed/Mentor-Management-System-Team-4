import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import AuthButton from "./Buttons/AuthButton";
import Button from "./Buttons/Button";

const Box = styled.div`
  ${tw`
flex flex-col relative text-start items-start px-2
`}
`;

const Title = styled.div`
  ${tw`
flex font-Mukta font-semibold text-[32px] leading-[53px] text-[#141414] mb-3
`}
`;

const Description = styled.div`
  ${tw`
font-Mukta font-normal text-[24px] leading-[40px] text-[#808080]
`}
`;
function AuthSignup() {
  return (
    <Box>
      <Title>Forgot Password?</Title>
      <Description>
        An email has been sent to your registered email.
      </Description>
      <Description>Follow the link to reset your password.</Description>
      <div css={[tw` mt-8 w-full max-w-[426px]`]}>
        <Button color="primary" type="button">
          Done
        </Button>
      </div>
    </Box>
  );
}

export default AuthSignup;